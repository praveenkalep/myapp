import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import parlour from "./components/parlour/parlour";
import tips from "./components/tips/tips";
import about from "./components/about/about";
import application from "./components/application/application";
import login from "./components/login/login";
import signup from "./components/signup/signup";
import logo from "./components/images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/homepage/homepage"
import Header from "./components/Header/Header";
function App  () {
  return (
    <div> 
       <Router>
      <Header />
      <NavBar />   
     <Switch>
      <Route exact path ="/" component={HomePage} />
      <Route  path ="/login" component={login}/>
      <Route  path ="/signup" component={ signup } />
      <Route  path ="/parlour" component={ parlour } />
      <Route  path ="/tips" component={ tips } />
      <Route  path ="/application" component={ application } />
      <Route  path ="/about" component={ about } />
    </Switch>
  </Router>
  </div>
);
};
export default App;