
import {
    useState,
} from "react"

import Item from "./Item"
import Table from "./Table"



function Box() {

    const [voteItems, setVoteItems] = useState([
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

    const handleDelete = (name) => {
        setVoteItems(voteItems.filter(item => item !== name))
        setVoteLines(voteLines.filter(line => line.name !== name))
    }

    const renderVoteItems = () => {
        return voteItems.map((item, index) => {

            let totalVotes = 0;
            const existingLine = voteLines.find(line => line.name === item)
            if (existingLine) {
                totalVotes = existingLine.likes + existingLine.dislikes
            }

            return (
                <Item
                    key={index}
                    name={item}
                    totalVotes={totalVotes}
                    onVote={handleVote}
                    onDelete={handleDelete}
                />
            )
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