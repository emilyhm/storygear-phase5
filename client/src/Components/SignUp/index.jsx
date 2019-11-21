import React from 'react';
import httpClient from '../../httpClient';
import './signup.css';

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
    state = {
        fields: { 
            email: '',
            username: '',
            password: ''
        }
    };

    // the information is displaying in the input fields
    onInputChange(e) {
        console.log('hello')
        this.setState({
            fields: {
                // THIS NAME IS NOT THE SAME AS THE NAME FROM STATE!!!
                ...this.state.fields, 
                [e.target.name]: e.target.value
            }
        });
    };

    //when you submit the form, the function signup is called and then the user param is passed 
    onFormSubmit(e) {
        e.preventDefault()
        console.log(this.state.fields)
        httpClient.signUp(this.state.fields)
        .then(user => {

            this.setState({ fields: {
                email: '',
                username: '',
                password: ''
                }
            })
            console.log(user)
            if(user) {
                console.log('I WORK!!!')
                this.props.onSignUpSuccess(user)
                //this takes the user to a different page, mainly the home page
                this.props.history.push('/');
            };
        })
        .catch(err => console.log(err))
    };


    render() {
        const { email, username, password } = this.state.fields

        return (
            <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                <legend>
                    <h1>Hello, Sign Up now!</h1>

                    Please enter an email:
                    <br />
                    <input type="text" name="email" value={email}/>

                    <br />

                    Please create a username:
                    <br />
                    <input type="text"  name="username" value={username}/>

                    <br/>

                    Please create a password:
                    <br />
                    <input type="password" name="password" value={password}/>

                    <br/>

                    <button type="submit">Sign Up!</button>

                </legend>
            </form>
        );
    };
};

export default SignUp;