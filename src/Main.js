import React, { Component } from "react";
// import {
//   Route,
//   NavLink,
//   HashRouter
// } from "react-router-dom";
import SendBet from './components/SendBet';
import Game from './components/Game';
// import Home from "./Home";
// import Rules from "./Rules";
// import Fair from "./Fair";

import './Main.css';

class Main extends Component {
  render() {
    return (
      <div style={{ width: '100%', display: 'table' }}>
        <div style={{ display: 'table-row' }}>
          <div style={{ width: '80%', display: 'table-cell' }} className="trbox"><Game currency={"BTC"} address={"BTC_SEND_ADDR"} /></div>
          <div style={{ width: '5%', display: 'table-cell' }} ></div>
          <div style={{ width: '15%', display: 'table-cell' }} className="trbox"><SendBet currency={"BTC"} address={"BTC_SEND_ADDR"} /></div>
        </div>
      </div>
    );
  }
}

export default Main;
