import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

export default  function SigninScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        // TODO: signin action
    }
    return (
        <div>
            <form action="" className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign in</h1>
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="email"
                           id="email"
                           placeholder="Enter email"
                           value={email}
                           required
                           onChange={ e => setEmail(e.target.value) }
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                           id="password"
                           placeholder="Enter password"
                           value={password}
                           required
                           onChange={ e => setPassword(e.target.value) }
                    />
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit">
                        Sign in
                    </button>
                </div>
                <div>
                    <label/>
                    <div>
                        New customer ? <NavLink to="/register">Create your account</NavLink>
                    </div>
                </div>

            </form>
        </div>
    )
}
