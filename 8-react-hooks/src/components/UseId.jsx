
import { useId } from 'react';

function UseId() {
    const emailId = useId();
    const passwordId = useId();
    return (
        <div>
            <h1>UseId</h1>
            <hr />

            <form>
                <div className="mb-3">
                    <label htmlFor={emailId} className="form-label">Email address</label>
                    <input type="email" className="form-control" id={emailId} aria-describedby={`${emailId}-help`} />
                    <div id={`${emailId}-help`} className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor={passwordId} className="form-label">Password</label>
                    <input type="password" className="form-control" id={passwordId} aria-describedby={`${passwordId}-help`} />
                    <div id={`${passwordId}-help`} className="form-text">We'll never share your password with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}

export default UseId;