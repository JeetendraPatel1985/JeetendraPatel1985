import { useState, useContext, createContext } from "react";

const ColorContext = createContext("White");
const UserContext = createContext("Guest");


function A() {
    return (
        <div className="card">
            <div className="card-header">A</div>
            <div className="card-body">
                im A component
                <B />
            </div>
        </div>
    );
}

function B() {
    const color = useContext(ColorContext);
    return (
        <div className="card">
            <div className="card-header">B</div>
            <div className="card-body" style={{
                backgroundColor: color
            }}>
                im B component - {color}
                <C />
            </div>
        </div>
    );
}

function C() {
    const currentUser = useContext(UserContext);
    return (
        <div className="card">
            <div className="card-header">C</div>
            <div className="card-body">
                im C component - {currentUser}
            </div>
        </div>
    );
}


function UseContext() {
    const [color, setColor] = useState("yellow");
    const [currentUser, setCurrentUser] = useState("John Doe");
    const handleThemeChange = () => {
        setColor(color === "white" ? "black" : "white");
    }
    const handleLogout = () => {
        setCurrentUser("Guest");
    }
    return (
        <div>
            <h1>UseContext</h1>
            <hr />
            <button onClick={handleThemeChange}>Change to dark Theme</button>
            <button onClick={handleLogout}>logout</button>
            <hr />
            <ColorContext.Provider value={color}>
                <UserContext.Provider value={currentUser}>
                    <A />
                </UserContext.Provider>
            </ColorContext.Provider>

            <ColorContext.Provider value={"tomato"}>
                <A />
            </ColorContext.Provider>

        </div>
    );
}

export default UseContext;