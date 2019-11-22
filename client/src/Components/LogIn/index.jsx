import React from 'react';
import httpClient from '../../httpClient';

class LogIn extends React.Component {
    state = {
        fields: { 
            username: "",
            password: ""
        }
    };

    onInputChange(e) {
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value 
            }
        });
    };

    onFormSubmit(e) {
        e.preventDefault()
        httpClient.logIn(this.state.fields)
        .then(user => {
            this.setState({ fields: {
                username: '',
                password: ''
            }})
            console.log(user)

            if(user) {
                this.props.onLoginSuccess(user)
                this.props.history.push('/products')
            };
        });
    };

    render() {
        const { username, password } = this.state.fields
        return (
            <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                <legend>
                    <h1>Hello, LogIn now!</h1>
                    Username:
                    <br />
                    <input type="text" placeholder="Username" name="username" value={ username } required/>

                    <br/>

                    Password: 
                    <br />
                    <input type="password" placeholder="Password" name="password" value={ password } required/>

                    <br />

                    <button type="submit">Log In</button>

                </legend>
            </form>
        );
    };
};

export default LogIn;