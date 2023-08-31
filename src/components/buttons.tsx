import React from 'react';

type PropsType = {
    title: string
    callBack: () => void
    isDisabled: boolean
    // callbackSetIncrease: () => void
    // callBackReset: () => void

    // isResetDisabled?: boolean
}
export const ButtonCounter = (props: PropsType) => {
    return (
        <div>
            <button onClick={props.callBack} disabled={props.isDisabled} className={'button-add '}>{props.title}</button>
            {/*<button onClick={props.callBack} disabled={props.isResetDisabled} className={'button-reset'}>{props.title}</button>*/}
        </div>
    );
};
