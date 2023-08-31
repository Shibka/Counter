import React, {ChangeEvent, useState} from 'react';
import {ButtonCounter} from "./buttons";

type CounterSettingPropsType = {
    setValue: (value: number)=>void
}
export const CounterSetting = (props: CounterSettingPropsType) => {

    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.valueAsNumber)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.valueAsNumber)
    }

    const isSetDisabled = startValue < 0 || maxValue < 0

    const onClickSetMaxValue =()=>{
        props.setValue(maxValue)
        props.setValue(startValue)
        console.log(maxValue)
        console.log(startValue)
    }
    // const onClickSetStartValue =() =>{
    //     props.setStartValue(startValue)
    //     console.log(startValue)
    // }

    return (
        <div className={'counter-setting'}>
            <div className={'value-setting'}>
                <div className={'inputs'}>
                    <div className={'value-max'}>
                        max value:
                        <div>
                            <input
                                value={maxValue}
                                onChange={onChangeMaxValue}
                                type='number'
                                className={'input1'}/>
                        </div>
                    </div>
                    <div className={'value-start'}>
                        start value: {}
                        <div>
                            <input
                                value={startValue}
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
                    callBack={onClickSetMaxValue}
                    isDisabled={isSetDisabled}
                    />
            </div>
        </div>
    );
};

