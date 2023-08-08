import React, {useState} from 'react';
import { ButtonCounter} from "./buttons";

export const Counter = () => {
    let [num, setNum] = useState(0)

    const ButtonIncrease = () => {
        setNum(num + 1)
    }
    const ButtonReset = () => {
        setNum(0)
    }
    const isDisabled: boolean = num === 5
    const isResetDisabled: boolean = num === 0

    return (
        <div className={'counter'}>
            <div className={`num  ${isDisabled ? 'error' : ''} `}>
                {num}
            </div>
            <div  className={'buttons'}>
                <ButtonCounter onClickButtonIncrease={ButtonIncrease}
                        onClickButtonReset={ButtonReset}
                        isDisabled={isDisabled}
                        isResetDisabled={isResetDisabled}
                />
            </div>
        </div>
    );
};

