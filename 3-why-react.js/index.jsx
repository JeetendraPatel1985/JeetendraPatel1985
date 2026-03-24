



// Create Component Class e.g ClockComponent
function Clock(props) {
    let { timeZone } = props
    return (
        <div className="card">
            <div className="card-header">{timeZone}</div>
            <div className="card-body">
                <p className="card-text">
                    <span className="badge bg-danger">
                        {new Date().toLocaleTimeString('en-US', { timeZone })}
                    </span>
                </p>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Clock timeZone="Asia/Kolkata" />
                </div>
                <div className="col-4">
                    <Clock timeZone="Asia/Dubai" />
                </div>
                <div className="col-4">
                    <Clock timeZone="America/New_York" />
                </div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(<App />)
}, 1000)