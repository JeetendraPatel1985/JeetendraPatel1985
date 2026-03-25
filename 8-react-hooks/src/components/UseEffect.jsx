import { use, useEffect, useState } from "react";



function UseEffect(props) {
    console.log("Component rendered");
    let { foo } = props;

    const [count, setCount] = useState(0);
    const [light, setLight] = useState("off");
    const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // console.log("effect-1")
        document.title = `Count: ${count}`;
    });

    useEffect(() => {
        // console.log("effect-2")
    }, []);

    useEffect(() => {
        // console.log("effect-3")
    }, [light]);

    useEffect(() => {
        // console.log("effect-4")
    }, [foo]);

    useEffect(() => {
        console.log("effect-5")
        if (light === "off") {
            setTimeNow("Light is off")
            return;
        }
        const intervalId = setInterval(() => {
            console.log("Tick..")
            setTimeNow(new Date().toLocaleTimeString())
        }, 1000)
        return () => {
            console.log("effect-5-cleanup")
            clearInterval(intervalId);
        }
    }, [light])


    const [resourceType, setResourceType] = useState();
    const [items, setItems] = useState([]);


    useEffect(() => {
        if (!resourceType) {
            return;
        }
        console.log("Fetching data for resource type: ", resourceType);
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])


    return (
        <div>
            <h1>UseEffect</h1>
            <hr />
            Resource Type:{resourceType}
            <hr />
            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("users")}>Users</button>
            <button onClick={() => setResourceType("comments")}>Comments</button>
            <hr />
            <div> {JSON.stringify(items)}</div>
            <hr />
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <hr />
            <h2>Light: {light}</h2>
            <button onClick={() => setLight(light === "off" ? "on" : "off")}>Toggle Light</button>
            <hr />
            <h2>Time: {timeNow}</h2>
        </div>
    )
}

export default UseEffect;