import { TequipmentCostsState, TestimatedProfitState, ToverheadsState, TrowNameState, TsalariesState, TsetStateCombiner, TstateCombiner } from "@js/types/reactState/mainProjectLine";
import { TLine, TuserList } from "@js/types/state/userRouter";
import React, { useEffect, useState } from "react";
import { createLine } from "./createLine";
import { useAppDispatch } from "@js/hooks/useAppDispatch";

const initLineObj: TLine = {
    id: 0,
    rowName: '',
    total: 0,
    salary: 0,
    mimExploitation: 0,
    machineOperatorSalary: 0,
    materials: 0,
    mainCosts: 0,
    supportCosts: 0,
    equipmentCosts: 0,
    overheads: 0,
    estimatedProfit: 0,
    child: []
}
type Tparams = {
    userListParents: TuserList,
    userListChild: TuserList,
    userList: TuserList
}
export default ({userListParents, userListChild, userList}: Tparams)=>{
    const dispatch = useAppDispatch()

    const [rowNameState, setRowNameState] = useState<TrowNameState>([])
    const [salariesState, setSalariesState] = useState<TsalariesState>([])
    const [equipmentCostsState, setEquipmentCostsState] = useState<TequipmentCostsState>([])
    const [overheadsState, setOverheadsState] = useState<ToverheadsState>([])
    const [estimatedProfitState, setEstimatedProfitState] = useState<TestimatedProfitState>([])

    const [editLineId, setEditLineId] = useState<number | undefined>()
    
    const stateCombiner:TstateCombiner = {
        rowNameState,
        salariesState,
        equipmentCostsState,
        overheadsState,
        estimatedProfitState
    }
    const setStateCombiner:TsetStateCombiner = {
        setRowNameState,
        setSalariesState,
        setEquipmentCostsState,
        setOverheadsState,
        setEstimatedProfitState
    }

    useEffect(()=>{
        if(userList[0]){
            userList.map(el=>{setStateInitValue(el, setStateCombiner)})
        }else{
            setStateInitValue(initLineObj, setStateCombiner)
        }
    }, [userList])

    if(userList[0]){
        return userListParents.map(el=>createLine({
            dispatch,
            el, 
            stateCombiner, 
            setStateCombiner,
            editLine:{editLineId, setEditLineId},
            create: el.id === 0 ? true : false,
            childLevel: 0,
            child: userListChild
        }))
    }else{
        return createLine({
            dispatch,
            el: initLineObj, 
            stateCombiner, 
            setStateCombiner, 
            editLine: {editLineId, setEditLineId},
            create: true,
            childLevel: 0
        })
    }
}

function setStateInitValue(el: TLine, setStateCombiner: TsetStateCombiner){
    const {setRowNameState, setSalariesState, setEquipmentCostsState, setOverheadsState, setEstimatedProfitState} = setStateCombiner

    setRowNameState((prev)=> pushFn({prev, el, nameParam: 'rowName'}))
    setSalariesState((prev)=> pushFn({prev, el, nameParam: 'salary'}))
    setEquipmentCostsState((prev)=> pushFn({prev, el, nameParam: 'equipmentCosts'}))
    setOverheadsState((prev)=> pushFn({prev, el, nameParam: 'overheads'}))
    setEstimatedProfitState((prev)=> pushFn({prev, el, nameParam: 'estimatedProfit'}))

    type TparamPushFn = {
        prev: any, 
        el: TLine, 
        nameParam: 'rowName' | 'salary' | 'equipmentCosts' | 'overheads' | 'estimatedProfit'
    }

    function pushFn({prev, el, nameParam}: TparamPushFn){
        const newState = [...prev];
        newState.push({id: el.id, [nameParam]: el[nameParam]})
        return newState
    }
}