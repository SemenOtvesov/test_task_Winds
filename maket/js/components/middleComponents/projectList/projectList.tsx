import React, { RefObject, useContext, useEffect, useRef } from "react";
import projectItem from "./projectItem";
import { AppContext } from "@js/context";

const arr = [
    {title:'Название проекта', subTitle: 'Аббревиатура', subList: ['По проекту', 'Объекты', 'РД', 'МТО', 'СМР', 'График', 'МиМ', 'Рабочие', 'Капвложения', 'Бюджет', 'Финансирование', 'Панорамы', 'Поручения', 'Контрагенты']},
]

export default ()=>{
    const {setMainProjectListRefState} = useContext(AppContext)
    const mainProjectListRef: RefObject<HTMLDivElement> = useRef(null)

    useEffect(()=>{
        if(mainProjectListRef !== null){setMainProjectListRefState(mainProjectListRef)}
    })

    return <div ref={mainProjectListRef} className="main__projectList active">
        {arr.map(project=>projectItem(project))}
    </div>
}