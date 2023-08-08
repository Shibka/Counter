import React from 'react';

type PropsType = {
    onClickButtonIncrease: () => void
    onClickButtonReset: () => void
    isDisabled: boolean
    isResetDisabled: boolean
}
export const ButtonCounter = (props: PropsType) => {
    return (
        <div>
            <button onClick={props.onClickButtonIncrease} disabled={props.isDisabled} className={'button-add '}>inc</button>
            <button onClick={props.onClickButtonReset} disabled={props.isResetDisabled} className={'button-reset'}>reset</button>
        </div>
    );
};

export const ButtonSetting = () =>{
    return (
        <div>
        <button className={'button-reset'}>set</button>
        </div>
    );
}