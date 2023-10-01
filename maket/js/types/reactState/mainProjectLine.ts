type setStateCallback <Obj> = (prev: Array<Obj>)=>Array<Obj>

export type TsetStateCombiner = {
    setRowNameState: TsetRowNameState,
    setSalariesState: TsetSalariesState,
    setEquipmentCostsState: TsetEquipmentCostsState,
    setOverheadsState: TsetOverheadsState,
    setEstimatedProfitState: TsetEstimatedProfitState,
}

export type TsetRowNameState = (a: setStateCallback<TrowNameStateEl>)=>void
export type TsetSalariesState = (a: setStateCallback<TsalariesStateEl>)=>void
export type TsetEquipmentCostsState = (a: setStateCallback<TequipmentCostsStateEl>)=>void
export type TsetOverheadsState = (a: setStateCallback<ToverheadsStateEl>)=>void
export type TsetEstimatedProfitState = (a: setStateCallback<TestimatedProfitStateEl>)=>void




export type TstateCombiner = {
    rowNameState: TrowNameState,
    salariesState: TsalariesState,
    equipmentCostsState: TequipmentCostsState,
    overheadsState: ToverheadsState,
    estimatedProfitState: TestimatedProfitState,
}

export type TrowNameState = Array<TrowNameStateEl>
export type TsalariesState = Array<TsalariesStateEl>
export type TequipmentCostsState = Array<TequipmentCostsStateEl>
export type ToverheadsState = Array<ToverheadsStateEl>
export type TestimatedProfitState = Array<TestimatedProfitStateEl>

export type TrowNameStateEl = {id: number, rowName: string}
export type TsalariesStateEl = {id: number, salary: number}
export type TequipmentCostsStateEl = {id: number, equipmentCosts: number}
export type ToverheadsStateEl = {id: number, overheads: number}
export type TestimatedProfitStateEl = {id: number, estimatedProfit: number}