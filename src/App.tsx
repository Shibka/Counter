import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter";
import {CounterSetting} from "./components/counter_setting";

function App() {

    let [value, setValue] = useState(()=>{
        let valueAsString = localStorage.getItem('startValue')
        return valueAsString?  JSON.parse(valueAsString) : 0
    })

    let [startValue, setStartValue] = useState<number>(0)
        // let valueAsString = localStorage.getItem('startValue')
        // return valueAsString?   JSON.parse(valueAsString) : 0})

    let [maxValue, setMaxValue] = useState(()=>{
        let valueAsString = localStorage.getItem('maxValue')
        return valueAsString? JSON.parse(valueAsString): 5
    })

    let [disable, setDisable] = useState(false)
    let [buttonDisable, setButtonDisable] = useState(true)
    let [error, setError] = useState('')

    const increaseValue = () => {
        setValue(value + 1);
    };
    const resetValue = () => {
        setValue(0)
    }
    const startValueHandler = (newValue: number) => {
        setStartValue(newValue)
        setValue(newValue);
    };
    const maxValueHandler = (newValue: number) => {
        setMaxValue(newValue);
        setValue(newValue)
    };


        return (
            <div className="App">
                <CounterSetting
                    error={error}
                    setError={setError}
                    isSetdisable={buttonDisable}
                    setButtonDisable={setButtonDisable}
                    disable={disable}
                    setDisable={setDisable}
                    maxValueHandler={maxValueHandler}
                    startValue={startValue}
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    maxValue={maxValue}
                    startValueHandler={startValueHandler}
                />

                <Counter
                    error={error}
                    isSetDisable={buttonDisable}
                    setButtonDisable={setButtonDisable}
                    increaseValue={increaseValue}
                    resetValue={resetValue}
                    value={value}
                    startValue={startValue}
                    maxValue={maxValue}
                    disable={disable}
                />
            </div>
        )

}

export default App;
