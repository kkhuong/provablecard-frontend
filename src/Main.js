import React, { Component } from "react";
import SendBet from './components/SendBet';
import Game from './components/Game';

import './Main.css';

class Main extends Component {
  render() {
    return (
      <div style={{ width: '100%', display: 'table' }}>
        <div style={{ display: 'table-row' }}>
          <div style={{ minWidth: '480px', width: '80%', display: 'table-cell' }} className="trbox"><Game currency={"BTC"} address={"BTC_SEND_ADDR"} /></div>
          <div style={{ minWidth: '20px', width: '5%', display: 'table-cell' }} ></div>
          <div style={{ width: '15%', display: 'table-cell' }} className="trbox"><SendBet currency={"BTC"} address={"BTC_SEND_ADDR"} /></div>
        </div>
      </div>
    );
  }
}

export default Main;
