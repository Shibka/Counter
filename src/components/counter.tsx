import React from 'react';
import {ButtonCounter} from "./buttons";

type CounterPropsType = {
    value: number
    IncreaseValue: ()=>void
    resetValue: ()=>void
}
export const Counter = (props:CounterPropsType) => {
    // let [num, setNum] = useState(0)

    const ButtonIncrease = () => {
        props.IncreaseValue()
    }
    const ButtonReset = () => {
        props.resetValue()
    }

    const setStartValue =()=>{

    }
    const isDisabled: boolean = props.value === 5
    const isResetDisabled: boolean = props.value === 0

    return (
        <div className={'counter'}>
            <div className={`num  ${isDisabled ? 'error' : ''} `}>
                {props.value}
            </div>
            <div className={'buttons'}>
                <ButtonCounter
                    title={'inc'}
                    callBack={ButtonIncrease}
                    isDisabled={isDisabled}
                />
                <ButtonCounter
                    title={'reset'}
                    callBack={ButtonReset}
                    isDisabled={isResetDisabled}
                />
            </div>
        </div>
    );
};

