import React, { Component } from 'react';
import './App.css';
import AppWrapper from '../AppWrapper';

import data from '../../common/data/data.json';

class App extends Component {
  render() {
    return (
      <div className="app">
          <div className="base-wrapper">
            <AppWrapper data={data}/>
          </div>
      </div>
    );
  }
}

export default App;
