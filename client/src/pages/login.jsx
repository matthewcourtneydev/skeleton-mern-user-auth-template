import React from 'react';

const Login = () => {
    return (
        <div id="login" className='page'>
            <div className="card">
                <h1>User Login</h1>
                <h2>Use a valid user name and password to access your account.</h2>
                <form action="submit">
                    <input id="username-input" name="username-input" placeholder="Username or Email" type="text" for="username"/>
                    <input id="password-input" name="password-input" placeholder="Password" type="text" for="password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </div>
    );
}

export default Login;
