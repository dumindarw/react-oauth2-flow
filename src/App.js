import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import Login from './components/Login';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Login login={this.login}/>
      </div>
    );
  }
}

export default App;



