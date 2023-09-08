import React, {useState} from 'react';
import {ButtonCounter} from "./buttons";

type CounterPropsType = {
    disable: boolean
    value: number
    increaseValue: () => void
    resetValue: () => void
    startValue: number
    maxValue: number
}
export const Counter = (props: CounterPropsType) => {

    const ButtonIncrease = () => {
        props.increaseValue()
    }
    const ButtonReset = () => {
        props.resetValue()
    }
    const isDisabled: boolean = props.value === props.maxValue || props.disable
    const isResetDisabled: boolean = props.value <= props.startValue || props.disable

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

