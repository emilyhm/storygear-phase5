import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';
import './App.css';
import Products from './Components/Products/index';
import Home from './Components/Home/index';
import Contact from './Components/Contact/index';
import Footer from "./Components/Footer/index";
import Reviews from "./Components/reviews/reviews"
import LogIn from "./Components/LogIn/index";
import LogOut from "./Components/LogOut/index";
import SignUp from "./Components/SignUp/index";
import httpClient from './httpClient';
import NavBar from './NavBar';

class App extends React.Component {
  //the token is being stored in state
  state = { currentUser: httpClient.getCurrentUser() }

  //sets the state to the jwt/token
  onLoginSuccess(user) {
    this.setState({
      currentUser: httpClient.getCurrentUser()
    });
  };

  //takes the currentuser out of state
  logOut() {
    httpClient.logOut()
    this.setState({ currentUser: null });
  };

  render(){
    const { currentUser } = this.state
    return (
      <div className="main">
        <Router>
          <div className="both">
            <div className="logo">
              {/* shows logo */}
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Film_strip.svg/1115px-Film_strip.svg.png" width="30" height="30" alt="black and white film strip with brand name"/>
              </div>
              <div>
                <p>Story Gear</p>
              </div>
            </div>

            {/* when first pulled up, is the nav bar is shown first */}
            <NavBar currentUser={ currentUser }/>
            
          </div>
          {/* EVERYTHING ELSE IS THE OPTIONS THAT THE USER HAS TO GO WITH DIFFERENT ROUTES LIKE LOGIN OR SIGNUP */}

            <Switch>

              <Route path="/login" render={(props) => {
                return <LogIn {...props}
                onLoginSuccess={this.onLoginSuccess.bind(this)}/>
              }}/>

              <Route path="/logout" render={(props) => {
                return <LogOut onLogOut= {this.logOut.bind(this)}/>
              }}/>

              {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
              <Route path="/signup" render = {(props) => {
                return <SignUp {...props}
                onSignUpSuccess= {this.onLoginSuccess.bind(this)}/>
              }}/>
              
              <Route path="/products" 
              render={() => {
                return currentUser
                  ? <Products/>
                  : <Redirect to="/login" />
              }} />

              <Route path="/contact-us"
              render={() => {
                return currentUser
                  ? <Contact/>
                  : <Redirect to="/login" />
              }} />
            
              
              <Route path="/reviews" component={Reviews} />
              
              
              {/* second component that shows the home unconditionally */}
                  <Route exact path="/" component={Home}/>
            </Switch>
        </Router>

        {/* footer is displayed on every page */}
        <Footer />
      </div>
    );
  };
};

export default App;
