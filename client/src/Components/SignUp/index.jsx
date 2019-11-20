import React from 'react';
import './signup.css';

class SignUp extends React.Component {
    render() {
        return (
            <form>
                <legend>
                    <h1>Hello, Sign up now!</h1>

                    Email:
                    <br />
                    <input type="text" name="email"/>

                    <br />

                    Username:
                    <br />
                    <input type="text" name="username"/>

                    <br/>

                    Password: 
                    <br />
                    <input type="text" name="password"/>

                </legend>
            </form>
        );
    };
};

export default SignUp;