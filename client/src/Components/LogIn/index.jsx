import React from 'react';

class LogIn extends React.Component {
    render() {
        return (
            <form>
                <legend>
                    <h1>Hello, LogIn now!</h1>
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

export default LogIn;