import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter";
import {CounterSetting} from "./components/counter_setting";

function App() {
    let [value, setValue] = useState(0)

    const callBackSetValue = () => {
        setValue(value)
    }
    const IncreaseValue = () => {
        setValue(value + 1)
    }
    const resetValue = () => {
        setValue(0)
    }

    const setStartValue = () => {

    }
    return (
        <div className="App">
            <CounterSetting setValue={callBackSetValue}
            />
            <Counter IncreaseValue={IncreaseValue}
                     resetValue={resetValue}
                     value={value}/>
        </div>
    );
}

export default App;
