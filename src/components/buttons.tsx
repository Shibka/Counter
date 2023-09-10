import React from 'react';

type PropsType = {
    title: string
    callBack: () => void
    isDisabled: boolean
}
export const ButtonCounter = (props: PropsType) => {

    return (
        <div>
            <button onClick={props.callBack} disabled={props.isDisabled} className={'button-add '}>{props.title}</button>
        </div>
    );
};
