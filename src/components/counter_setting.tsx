import React, {ChangeEvent, useEffect, useState} from 'react';
import {ButtonCounter} from "./buttons";

type CounterSettingPropsType = {
    error: string
    setError: (title: string) => void
    setButtonDisable: (value: boolean) => void
    isSetdisable: boolean
    disable: boolean
    setDisable: (disabled: boolean) => void
    startValue: number
    setStartValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
    startValueHandler: (value: number) => void
    maxValueHandler: (value: number) => void
    settingModeOnOff: (modeOff: boolean) => void

}
export const CounterSetting = (props: CounterSettingPropsType) => {


    useEffect(() => {
        localStorage.setItem('maxValue', props.maxValue.toString())
        localStorage.setItem('startValue', JSON.stringify(props.startValue))
    }, [props.maxValue, props.startValue])

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.valueAsNumber
        props.setMaxValue(newValue)
        props.setButtonDisable(false)
        props.setDisable(true)
        if (newValue <= 0 || newValue <= props.startValue || props.startValue < 0) {
            props.setError('Incorrect value')
        } else {
            props.setError('Press "set"')
        }

    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.valueAsNumber
        props.setStartValue(newValue)
        props.setButtonDisable(false)
        props.setDisable(true)
        if (newValue < 0 || newValue >= props.maxValue) {
            props.setError('Incorrect value')
        } else {
            props.setError('Press "set"')
        }


    }
    const onClickHandler = () => {
        props.startValueHandler(props.startValue)
        props.setDisable(false)
        props.setButtonDisable(true)
        props.setError('')
props.settingModeOnOff(false)
    }

    const isSetDisabled = props.startValue >= props.maxValue
        || props.startValue < 0
        || props.maxValue < 0
        || props.isSetdisable


    return (
        <div className={'counter-setting'}>
            <div className={'value-setting'}>
                <div className={'inputs'}>
                    <div className={'value-max'}>
                        max value:
                        <input
                            value={props.maxValue}
                            onChange={onChangeMaxValue}
                            type='number'
                            className={props.maxValue < 0
                            || props.maxValue <= props.startValue ? 'input1 input-error' : 'input1'}
                        />
                    </div>
                    <div className={'value-start'}>
                        start value: {}
                        <input
                            value={props.startValue}
                            onChange={onChangeStartValue}
                            type='number'
                            className={props.startValue < 0
                            || props.startValue >= props.maxValue ? 'input2 input-error' : 'input2'}
                        />
                    </div>
                </div>
            </div>
            <div className={'buttons'}>
                <ButtonCounter
                    title={'Set'}
                    callBack={onClickHandler}
                    isDisabled={isSetDisabled}
                />
            </div>
        </div>
    );
};

