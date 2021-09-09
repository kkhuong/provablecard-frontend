import logo from './logo.svg';
import React, {Component} from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import { Calendar } from '@progress/kendo-react-dateinputs'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Hello KendoReact!</h1>
        <Calendar/>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
