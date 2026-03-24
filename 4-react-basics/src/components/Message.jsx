

function Message(props) {
    console.log("Message :: rendered")
    const { message = 'hello world', from = 'Anonymous' } = props;
    return (
        <div className="alert alert-primary">
            <div>{message} - <strong>{from}</strong></div>
        </div>
    )
}

export default Message