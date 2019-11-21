import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


const NavBar = (props) => {
    return (
        <div id="nav">
            {/* unconditionally rendered and brings the home page component */}
              <Link id="home" to="/">Home</Link> 
              {/* if jwt(token) is present it retuns the link to the protected webpages and the logout link OTHERWISE it shows the login and signup */}
              {props.currentUser
                ? (
                    <span>
                        <Link id="other-links" to='/products' >Products</Link> 
                        <Link id="other-links" to='/contact-us'>Say Hello!</Link> 
                        <Link to="/logout">Log Out</Link>
                    </span>
                )
                : (
                    <span>
                       <Link to="/login">Log In</Link> 
                       <Link to="/signup">Sign Up</Link> 
                    </span>
                )
              }
            </div> 
    );
};

export default NavBar