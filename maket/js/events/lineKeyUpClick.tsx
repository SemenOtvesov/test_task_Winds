import { getState } from '@js/components/middleComponents/mainProject/mainProjectLine/createInput';
import createUserListLine from '@js/state/userRouter/asyncThunk/createUserList-line';
import setUserListLine from '@js/state/userRouter/asyncThunk/setUserList-line';
import { TsetStateCombiner, TstateCombiner } from '@js/types/reactState/mainProjectLine';
import { TLine, TLinePost } from '@js/types/state/userRouter';

type Tprops = {
    stateCombiner: TstateCombiner,
    setStateCombiner: TsetStateCombiner,
    setEditLineId: (a: number|undefined)=>void,
    id: number,
    create: boolean,
    dispatch: (a: any)=>void,
    event: React.KeyboardEvent<HTMLDivElement>,
    parentId?: number,
}

const lineKeyUpClick = ({stateCombiner, setStateCombiner, setEditLineId, id, create, dispatch, parentId, event}: Tprops) => {
    const equipmentCosts = getState({state: stateCombiner.equipmentCostsState, id, nameParam: 'equipmentCosts'})
    const estimatedProfit = getState({state: stateCombiner.estimatedProfitState, id, nameParam: 'estimatedProfit'})
    const overheads = getState({state: stateCombiner.overheadsState, id, nameParam: 'overheads'})
    const rowName = getState({state: stateCombiner.rowNameState, id, nameParam: 'rowName'})
    const salary = getState({state: stateCombiner.salariesState, id, nameParam: 'salary'})
    
    if(event.key === 'Enter'){
        if(create){
            const postLineObj: TLinePost = {
                equipmentCosts,
                estimatedProfit,
                machineOperatorSalary: 0,
                mainCosts: 0,
                materials: 0,
                mimExploitation: 0,
                overheads,
                parentId: null,
                rowName,
                salary,
                supportCosts: 0
            }
            if(parentId){
                postLineObj.parentId = parentId
            }
            dispatch(createUserListLine(postLineObj))
            deleteValuesStateInitLine(setStateCombiner)
        }else{
            const setLineObj: TLine = {
                id,
                rowName,
                total: 0,
                salary,
                mimExploitation: 0,
                machineOperatorSalary: 0,
                materials: 0,
                mainCosts: 0,
                supportCosts: 0,
                equipmentCosts,
                overheads,
                estimatedProfit,
                child: []
            }
            dispatch(setUserListLine({body: setLineObj, rId: id}))
        }
        setEditLineId(undefined)
    }
}
export default lineKeyUpClick

function deleteValuesStateInitLine(setStateCombiner: TsetStateCombiner){
    const {setEquipmentCostsState, setEstimatedProfitState, setOverheadsState, setRowNameState, setSalariesState} = setStateCombiner

    setEquipmentCostsState((prev)=>filterFn(prev))
    setEstimatedProfitState((prev)=>filterFn(prev))
    setOverheadsState((prev)=>filterFn(prev))
    setRowNameState((prev)=>filterFn(prev))
    setSalariesState((prev)=>filterFn(prev))

    function filterFn(prev: any){return [...prev].filter(el=>el.id !== 0)}
}