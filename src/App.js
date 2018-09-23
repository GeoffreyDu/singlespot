import React, { Component } from 'react';
import './App.css';
import Storelist from './components/StoreList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Storelist/>
      </div>
    );
  }
}

export default App;
