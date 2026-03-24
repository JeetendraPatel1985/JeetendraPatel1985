

function Item({ name = "Unknown", totalVotes = 0, onVote, onDelete }) {

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

    const handleDelete = () => {
        if (onDelete) {
            onDelete(name)
        }
    }

    return (
        <div className="card m-2 position-relative">
            <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-2"
                aria-label={`Delete ${name}`}
                onClick={handleDelete}
            ></button>
            <div className="card-body">
                <div>{name}</div>
                <div className="badge bg-dark">{totalVotes}</div>
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