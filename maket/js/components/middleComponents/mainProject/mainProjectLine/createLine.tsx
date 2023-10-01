import React from "react";
import { TLine, TuserList } from "@js/types/state/userRouter";
import { TsetStateCombiner, TstateCombiner } from "@js/types/reactState/mainProjectLine";
import CreateInput from "./createInput";
import lineKeyUpClick from "@js/events/lineKeyUpClick";
import addLineClick from "@events/addLineClick";
import deleteUserListLine from "@state/userRouter/asyncThunk/deleteUserList-line";

type Tparams = {
    dispatch: (a: any)=>void,
    el: TLine,
    stateCombiner: TstateCombiner,
    setStateCombiner: TsetStateCombiner,
    editLine: {
        editLineId: number | undefined, 
        setEditLineId: (a: number|undefined)=>void
    },
    create: boolean,
    childLevel: number,
    child?: TuserList
}

export function createLine({dispatch, el, stateCombiner, setStateCombiner, editLine, create, childLevel, child}: Tparams){
    const disabled:boolean = el.id === editLine.editLineId ? false : true

    const genSublistObj={
        dispatch,
        stateCombiner, 
        setStateCombiner,
        editLine, 
        childLevel: childLevel + 1,
    }
    return (
        <div key={el.id} className="main__project-line-container">
            <div 
                onDoubleClick={(e)=>editLine.setEditLineId(el.id)}
                onKeyUp={(e)=>lineKeyUpClick({
                    stateCombiner,
                    setStateCombiner,
                    setEditLineId: editLine.setEditLineId, 
                    id: el.id,
                    create,
                    dispatch,
                    parentId: el.parentId,
                    event: e
                })}
                className="main__project-line"
            >
                <div className="main__project-line-item">
                    {genLevelLine(disabled, dispatch, el, childLevel)}
                </div>
                <div className="main__project-line-item">
                    <CreateInput 
                        state={stateCombiner.rowNameState} 
                        setStateFn={setStateCombiner.setRowNameState}
                        nameParam = 'rowName'
                        id={el.id}
                        disabled={disabled}
                        type="text"
                    />
                </div>
                <div className="main__project-line-item">
                    <CreateInput 
                        state={stateCombiner.salariesState} 
                        setStateFn={setStateCombiner.setSalariesState}
                        nameParam = 'salary'
                        id={el.id}
                        disabled={disabled}
                        type="number"
                    />
                </div>
                <div className="main__project-line-item">
                    <CreateInput 
                        state={stateCombiner.equipmentCostsState} 
                        setStateFn={setStateCombiner.setEquipmentCostsState}
                        nameParam = 'equipmentCosts'
                        id={el.id}
                        disabled={disabled}
                        type="number"
                    />
                </div>
                <div className="main__project-line-item">
                    <CreateInput 
                        state={stateCombiner.overheadsState} 
                        setStateFn={setStateCombiner.setOverheadsState}
                        nameParam = 'overheads'
                        id={el.id}
                        disabled={disabled}
                        type="number"
                    />
                </div>
                <div className="main__project-line-item">
                    <CreateInput 
                        state={stateCombiner.estimatedProfitState} 
                        setStateFn={setStateCombiner.setEstimatedProfitState}
                        nameParam = 'estimatedProfit'
                        id={el.id}
                        disabled={disabled}
                        type="number"
                    />
                </div>
            </div>

            <ul className="main__project-line-sublist">
                {genSublist({child, el, genSublistObj})}
            </ul>
        </div>
        ) 
}

function genLevelLine(disabled: boolean, dispatch: (a:any)=>void, el: TLine, childLevel: number){

    return (
        <div className={genBoxClassname()}>
            <span 
                onClick={(e)=>addLineClick({dispatch, id: el.id, childLevel, event: e})} 
                className="icon-workIcon"
            ></span>
            <span onClick={(e)=>dispatch(deleteUserListLine(el.id))} className="icon-deleteWork"></span>
            {childLevel !== 0 ? <div className="main__project-line-button-plug"/> : ''}
        </div>
    )

    function genBoxClassname(){
        let className = 'main__project-line-button-box'
        if(disabled){className += ' active'}
        className += ` pos-${childLevel}`
        return className
    }
}
type TgenSublistObjProps = {
    child: Array<TLine> | undefined,
    el: TLine, 
    genSublistObj: {
        dispatch: (a: any)=>void,
        stateCombiner: TstateCombiner, 
        setStateCombiner: TsetStateCombiner,
        editLine: {
            editLineId: number | undefined, 
            setEditLineId: (a: number|undefined)=>void
        }, 
        childLevel: number,
    }
}
function genSublist({child, el, genSublistObj}:TgenSublistObjProps){
    return child?.map(childEl=>{
        const createObj = {
            ...genSublistObj, 
            create: childEl.id === 0 ? true : false, 
            el: childEl,
            child
        }
        if(childEl.parentId === el.id){
            return createLine(createObj)
        }
    })
}