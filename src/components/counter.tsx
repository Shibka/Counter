import React from 'react';
import {ButtonCounter} from "./buttons";
import {CounterSetting} from "./counter_setting";

type CounterPropsType = {
    error: string
    setButtonDisable: (value: boolean) => void
    isSetDisable: boolean
    disable: boolean
    value: number
    increaseValue: () => void
    resetValue: () => void
    startValue: number
    maxValue: number

    settingModeOnOff: (modeOn: boolean) => void

    //
    // setError: (title: string) => void
    // setDisable: (disabled: boolean) => void
    // setStartValue: (value: number) => void
    // setMaxValue: (value: number) => void
    // startValueHandler: (value: number) => void
    // maxValueHandler: (value: number) => void
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

    const settingModeOn = () => {
        props.settingModeOnOff(true)
    }


    // const onSetButtonClick = () => {
    //     return (
    //         <CounterSetting
    //             error={props.error}
    //             setError={props.setError}
    //             isSetdisable={props.isSetDisable}
    //             setButtonDisable={props.setButtonDisable}
    //             disable={props.disable}
    //             setDisable={props.setDisable}
    //             maxValueHandler={props.maxValueHandler}
    //             startValue={props.startValue}
    //             setMaxValue={props.setMaxValue}
    //             setStartValue={props.setStartValue}
    //             maxValue={props.maxValue}
    //             startValueHandler={props.startValueHandler}
    //         />
    //     )
    // }

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
                <ButtonCounter
                    title={'set'}
                    callBack={settingModeOn}
                    isDisabled={false}
                />
            </div>
        </div>
    );
};

