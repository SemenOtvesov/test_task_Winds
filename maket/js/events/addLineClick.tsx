import { addUserListLine } from '@js/state/userRouter/userRouter';
import { TLine } from '@js/types/state/userRouter';

type Tprops = {
    dispatch: (a: any)=>void,
    id: number,
    childLevel: number,
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
}

const addLineClick = ({dispatch, id, childLevel, event}: Tprops) => {
    const newLine:TLine = {
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
    dispatch(addUserListLine({newLine, childLevel, id}))
}
export default addLineClick