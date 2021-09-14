import React, { Component } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import { Button } from "@progress/kendo-react-buttons";
import SendBet from './components/SendBet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Main from './Main';
import AboutPage from './AboutPage';
import RulesPage from './RulesPage';
import FairPage from './FairPage';
import TermsPage from './TermsPage';
import InstructionsPage from './InstructionsPage';

import './App.css';


class App extends Component {

  render() {
    return (
      <div className="ui container">
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/about" component={AboutPage} />
              <Route path="/terms" component={TermsPage} />
              <Route path="/instructions" component={InstructionsPage} />
              <Route path="/rules" component={RulesPage} />
              <Route path="/fair" component={FairPage} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
