import React from 'react';
import {ButtonSetting} from "./buttons";

export const CounterSetting = () => {

    return (
        <div className={'counter-setting'}>
            <div className={'value-setting'}>
                <div className={'inputs'}>
                    <div className={'value-max'}>
                        max value:
                        <div>
                            <input type='number'
                                   className={'input1'}/>
                        </div>
                    </div>
                    <div className={'value-start'}>
                        start value:
                        <div>
                            <input type='number'
                                   className={'input2'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'buttons'}>
                <ButtonSetting/>
            </div>
        </div>
    );
};

