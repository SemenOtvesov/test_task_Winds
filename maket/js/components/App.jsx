import React, { useEffect, useState } from "react"
import Header from "@mainComponents/header"
import Main from "@mainComponents/main"
import { AppContext } from "@js/context"
import getUserList from "@js/state/userRouter/asyncThunk/getUserList"
import { useDispatch } from "react-redux"

export default ()=>{
    const [mainProjectListRefState, setMainProjectListRefState] = useState()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getUserList())
    }, [])
    
    return(
        <AppContext.Provider value={{mainProjectListRefState, setMainProjectListRefState}}>
            <Header/>
            <Main/>
        </AppContext.Provider>
    )
}