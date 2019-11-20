import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Products from './Components/Products/index';
import Home from './Components/Home/index';
import Contact from './Components/Contact/index';
import Footer from "./Components/Footer/index";
import Reviews from "./Components/reviews/reviews"
import LogIn from "./Components/LogIn/index";
import LogOut from "./Components/LogOut/index";
import SignUp from "./Components/SignUp/index";

class App extends React.Component {
  render(){
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

            {/* displays the nav bar */}
            <div id="nav">
              <Link id="home" to="/">Home</Link> {' '}
              <Link id="other-links" to='/products' >Products</Link> {' '}
              <Link id="other-links" to='/contact-us'>Say Hello!</Link> {' '}
            </div> 
          </div>
            <Switch>
              {/* the first component to render */}
              <Route exact path="/" component={Home}/>
              <Route path="/products" component={Products}/>
              <Route path="/contact-us" component={Contact}/>
              <Route path="/reviews" component={Reviews} />
            </Switch>
        </Router>

        {/* footer is displayed on every page */}
        <Footer/>
      </div>
    );
  };
};

export default App;
