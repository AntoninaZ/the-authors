import React, { Component } from 'react';
import './App.css';
import AppWrapper from '../AppWrapper';
import utils from "../../utils/utils";
import data from '../../common/data/data.json';

const dataFromJson = utils.initData(data);

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="base-wrapper">
          <AppWrapper data={dataFromJson}/>
        </div>
      </div>
    );
  }
}

export default App;
