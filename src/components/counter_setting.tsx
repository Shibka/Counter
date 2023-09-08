import React, {ChangeEvent, useState} from 'react';
import {ButtonCounter} from "./buttons";

type CounterSettingPropsType = {
    disable: boolean
    setDisable: (disabled: boolean) => void
    startValue: number
    setStartValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
    startValueHandler: (value: number) => void
    maxValueHandler: (value: number) => void

}
export const CounterSetting = (props: CounterSettingPropsType) => {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.valueAsNumber
        props.setMaxValue(newValue)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.valueAsNumber
        props.setStartValue(newValue)
    }
    const onClickHandler = () =>{
        props.startValueHandler(props.startValue)
        props.setDisable(false)
    }

    const isSetDisabled = props.startValue >= props.maxValue || props.startValue < 0 || props.maxValue < 0


    return (
        <div className={'counter-setting'}>
            <div className={'value-setting'}>
                <div className={'inputs'}>
                    <div className={'value-max'}>
                        max value:
                        <div>
                            <input
                                value={props.maxValue}
                                onChange={onChangeMaxValue}
                                type='number'
                                className={'input1'}/>
                        </div>
                    </div>
                    <div className={'value-start'}>
                        start value: {}
                        <div>
                            <input
                                value={props.startValue}
                                onChange={onChangeStartValue}
                                type='number'
                                className={'input2'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={'buttons'}>
                <ButtonCounter
                    title={'Set'}
                    callBack={onClickHandler}
                    // anotherCallBack={() => props.maxValueHandler(props.maxValue)}
                    isDisabled={isSetDisabled}
                />
            </div>
        </div>
    );
};

