import React, {useState} from 'react';
import {ButtonCounter} from "./buttons";

type CounterPropsType = {
    error: string
    setIsSetDisable: (value: boolean) => void
    isSetdisable: boolean
    disable: boolean
    value: number
    increaseValue: () => void
    resetValue: () => void
    startValue: number
    maxValue: number
}
export const Counter = (props: CounterPropsType) => {

    const buttonIncrease = () => {
        props.increaseValue()
    }
    const buttonReset = () => {
        props.resetValue()
    }

    const errorSetting =() =>{
        if (props.error === 'Incorrect value' || props.error === 'Press "set"'){
            return props.error
        }
        return props.value
    }

    const isDisabled: boolean = props.value === props.maxValue || props.disable
    const isResetDisabled: boolean = props.value <= props.startValue || props.disable

    return (
        <div className={'counter'}>
            <div className={`num  ${props.error === 'Incorrect value' || props.value === props.maxValue? 'error' : ''} `}>
                {errorSetting()}
            </div>
            <div className={'buttons'}>
                <ButtonCounter
                    title={'inc'}
                    callBack={buttonIncrease}
                    isDisabled={isDisabled}
                />
                <ButtonCounter
                    title={'reset'}
                    callBack={buttonReset}
                    isDisabled={isResetDisabled}
                />
            </div>
        </div>
    );
};

