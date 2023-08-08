import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/counter";
import {CounterSetting} from "./components/counter_setting";

function App() {


  return (
    <div className="App">
        <CounterSetting/>
          <Counter/>
    </div>
  );
}

export default App;
