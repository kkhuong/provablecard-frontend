import React, { Component } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from "@progress/kendo-react-buttons";
import SendBet from './components/SendBet';
import Main from './Main';

import './App.css';


class App extends Component {

  render() {
    return (
      <div className="ui container">
        <div className="App">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
