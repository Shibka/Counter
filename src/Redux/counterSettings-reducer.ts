type StartValueHandlerType ={
    type: 'START-VALUE-HANDLER'
    newValue: number
}
export const counterSettingsReducer = (state: any, action: StartValueHandlerType) =>{
    switch (action.type){
        case "START-VALUE-HANDLER":
            return action.newValue
    }
}

export const startValueHandlerAC = (newValue: number): StartValueHandlerType=> {
    return {type: 'START-VALUE-HANDLER', newValue} as const
}