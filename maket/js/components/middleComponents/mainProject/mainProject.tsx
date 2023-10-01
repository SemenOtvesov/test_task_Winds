import React from "react"
import { useSelector } from "react-redux"
import TglobalState from "@js/types/state/globalState"
import { TuserList } from "@js/types/state/userRouter"

import userProjectLine from './mainProjectLine/mainProjectLine'

export default ()=>{
    const userList: TuserList = useSelector((state: TglobalState)=>state.userRouter.userList)

    return <div className="main__project">
        <div className="main__project-title">Строительно-монтажные работы</div>

        <div className="main__project-line-box">
            <div className="main__project-line title">
                <div className="main__project-line-item">Уровень</div>
                <div className="main__project-line-item">Наименование работ</div>
                <div className="main__project-line-item">Основная з/п</div>
                <div className="main__project-line-item">Оборудование</div>
                <div className="main__project-line-item">Накладные расходы</div>
                <div className="main__project-line-item">Сметная прибыль</div>
            </div>

            {userProjectLine({
                userListParents: userList.filter(el=>!el.parentId),
                userListChild: userList.filter(el=>el.parentId),
                userList
            })}

        </div>

    </div>
}
