
import {
    useState,
} from "react"

import Item from "./Item"
import Table from "./Table"



function Box() {

    const [voteItems] = useState([
        "foo",
        "bar",
        "baz",
        "qux",
        "quux",
        "corge",
    ])
    const [voteLines, setVoteLines] = useState([]);

    const handleVote = (event) => {
        let { type, name } = event
        const existingLine = voteLines.find(line => line.name === name)
        if (existingLine) {
            if (type === "like") {
                existingLine.likes += 1
            } else if (type === "dislike") {
                existingLine.dislikes += 1
            }
            setVoteLines([...voteLines])
        } else {
            const newLine = {
                name: name,
                likes: type === "like" ? 1 : 0,
                dislikes: type === "dislike" ? 1 : 0,
            }
            setVoteLines([...voteLines, newLine])
        }
    }

    const renderVoteItems = () => {
        return voteItems.map((item, index) => {
            return (<Item key={index} name={item} onVote={handleVote} />)
        })
    }

    return (
        <div className="card">
            <div className="card-header">Box</div>
            <div className="card-body">
                <div className="d-flex justify-content-around flex-wrap">
                    {renderVoteItems()}
                </div>
                <Table voteLines={voteLines} />
            </div>
        </div>
    )
}

export default Box