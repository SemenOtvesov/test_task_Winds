import projectListItemClick from "@events/projectListItemClick";
import projectListSubItemClick from "@events/projectListSubItemClick";
import { AppContext } from "@js/context";
import React, { useContext } from "react";

export default (project: {title: string; subTitle: string, subList: string[]})=>{
    const {mainProjectListRefState} = useContext(AppContext)

    return <div key={Math.random()} id="projectListItem" onClick={projectListItemClick} className="main__projectList-item">
        <div className="main__projectList-item-main">
            <div className="main__projectList-item-textBox">
                <div className="main__projectList-item-title">{project.title}</div>
                <div className="main__projectList-item-text">{project.subTitle}</div>
            </div>
            <span className="main__projectList-item-arrow icon-arrow"></span>
        </div>

        <ul className="main__projectList-item-list">
            {project.subList.map(category=>(
                <li id="projectListSubItem" onClick={(e)=>projectListSubItemClick({mainProjectListRefState, event: e})} key={Math.random()}>
                    <div className="main__projectList-item-list-item-prevew icon-projectIcon"></div>
                    <div className="main__projectList-item-list-item-text">{category}</div>
                </li>
            ))}
        </ul>
    </div>
}