import React from "react";
import { TequipmentCostsState, TestimatedProfitState, ToverheadsState, TrowNameState, TsalariesState, TsetEquipmentCostsState, TsetEstimatedProfitState, TsetOverheadsState, TsetRowNameState, TsetSalariesState, TsetStateCombiner, TstateCombiner } from "@js/types/reactState/mainProjectLine";

type Tprops = {
    state: TrowNameState | TsalariesState | TequipmentCostsState | ToverheadsState | TestimatedProfitState,
    setStateFn: TsetRowNameState | TsetSalariesState | TsetEquipmentCostsState | TsetOverheadsState | TsetEstimatedProfitState,
    nameParam: 'rowName' | 'salary' | 'equipmentCosts' | 'overheads' | 'estimatedProfit'
    id: number,
    disabled: boolean,
    type: 'text' | 'number'
}

export default ({state, setStateFn, id, nameParam, disabled, type}:Tprops)=>{
    return (
        <input
            type={type}
            value={getState({state, id, nameParam})}
            onChange={(e)=>setState({setState: setStateFn, id, nameParam, event: e})}
            disabled={disabled}
        />
    )
}

type TgetStateProps = {
    state: TrowNameState | TsalariesState | TequipmentCostsState | ToverheadsState | TestimatedProfitState,
    id: number,
    nameParam: 'rowName' | 'salary' | 'equipmentCosts' | 'overheads' | 'estimatedProfit'
}
export function getState({state, id, nameParam}:TgetStateProps){
    const resObj:any =  [...state].find(el=> el.id === id)
    if(!resObj){return 0}
    const res = resObj[nameParam]
    return res && res
}


type TsetStateProps = {
    setState: TsetRowNameState | TsetSalariesState | TsetEquipmentCostsState | TsetOverheadsState | TsetEstimatedProfitState,
    id: number,
    nameParam: 'rowName' | 'salary' | 'equipmentCosts' | 'overheads' | 'estimatedProfit',
    event: React.ChangeEvent<HTMLInputElement>
}
function setState({setState, id, nameParam, event}:TsetStateProps){
    setState((prev:any)=>{
        const newState = [...prev]
        const resObj:any =  newState.find(el=> el.id === id)
        if(!resObj){return prev}
        resObj[nameParam] = event.target.value
        return newState
    })
}