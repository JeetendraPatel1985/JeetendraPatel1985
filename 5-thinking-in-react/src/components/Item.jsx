

function Item({ name = "Unknown", onVote }) {

    const handleLike = () => {
        if (onVote) {
            const event = {
                type: "like",
                name: name,
            }
            onVote(event)
        }
    }

    const handleDislike = () => {
        if (onVote) {
            const event = {
                type: "dislike",
                name: name,
            }
            onVote(event)
        }
    }

    return (
        <div className="card m-2">
            <div className="card-body">
                <div>{name}</div>
                <hr />
                <div className="d-flex justify-content-around">
                    <button className="btn btn-primary" onClick={handleLike}>Like</button>
                    <button className="btn btn-danger" onClick={handleDislike}>Dislike</button>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Item