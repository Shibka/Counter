type StartValueHandlerType ={
    type: "INCREASE-VALUE-HANDLER"
    newValue: number
}
export const initialState = { newValue: 0}
export const counterSettingsReducer = (state: any, action: StartValueHandlerType) =>{
    switch (action.type){
        case "INCREASE-VALUE-HANDLER":
            return {count: state.newValue + 1};
        default: return state
    }
}

export const startValueHandlerAC = (newValue: number): StartValueHandlerType=> {
    return {type: "INCREASE-VALUE-HANDLER", newValue} as const
}