import headerMoreClick from "@events/headerMoreClick";
import headerExitClick from "@events/headerExitClick";
import { AppContext } from "@js/context";
import React, { useContext } from "react";

export default ()=>{
    const {mainProjectListRefState} = useContext(AppContext)
    return <header className="header">

        <div onClick={(e)=>headerMoreClick({mainProjectListRefState, event: e})} className='header__icon icon-moreBtn'></div>
        <div onClick={(e)=>headerExitClick({mainProjectListRefState, event: e})}  className='header__icon icon-exit'></div>

        <div className="header__item">Просмотр</div>
        <div className="header__item">Управление</div>
        
    </header>
}