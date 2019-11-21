import React from 'react';
import { Redirect } from 'react-router-dom';



class LogOut extends React.Component {
    //this component fires, where the function is passed down from app.jsx

    componentDidMount() {
        this.props.onLogOut()
    }

    render() {
        return <Redirect to="/login" />
    }
}

export default LogOut;