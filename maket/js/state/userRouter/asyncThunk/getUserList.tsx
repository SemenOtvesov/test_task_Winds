import { apiUrl, eId } from "@js/snipets/constants";
import getFetch from "@js/snipets/getFetch";
import { TLine } from "@js/types/state/userRouter";
import { createAsyncThunk } from "@reduxjs/toolkit";


export default createAsyncThunk('getUserList', async ()=>{
    const userList: Array<TLine> = []
    await getFetch(apiUrl + `/v1/outlay-rows/entity/${eId}/row/list`).then((res:Array<TLine>)=>{
        if(!res){return []}

        res.forEach(line=>{
            userList.push(line)
            line.child.forEach(childLine=>{
                userList.push({...childLine, parentId: line.id})
                childLine.child.forEach(lastLine=>{
                    userList.push({...lastLine, parentId: childLine.id})
                })
            })
        })
    })

    return userList
})