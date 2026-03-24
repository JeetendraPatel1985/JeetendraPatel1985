

function Table({ voteLines = [] }) {

    const renderVoteLines = () => {
        return voteLines.map((line, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{line.name}</td>
                    <td>{line.likes}</td>
                    <td>{line.dislikes}</td>
                </tr>
            )
        })
    }

    return (
        <div className="card">
            <div className="card-header">Table</div>
            <div className="card-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Likes</th>
                            <th scope="col">Dislikes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderVoteLines()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table