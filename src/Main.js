import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Home from "./Home";
import Rules from "./Rules";
import Fair from "./Fair";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/rules">Rules</NavLink></li>
                    <li><NavLink to="/fair">Fair</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/rules" component={Rules}/>
                    <Route path="/fair" component={Fair}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;
