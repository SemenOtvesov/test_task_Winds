import { createSlice, current } from "@reduxjs/toolkit";
import getUserList from "./asyncThunk/getUserList";
import { TLine, Tstate, TuserList } from "@js/types/state/userRouter";
import setUserListLine from "./asyncThunk/setUserList-line";

const initialState: Tstate = {
    userList: []
}

const userRouter = createSlice({
    name: 'userRouter',
    initialState,
    reducers: {

        addUserListLine: (state: Tstate, action: {payload: {newLine: TLine, childLevel: number, id: number}})=>{
            let newUserList = [...state.userList]
            const createLine = newUserList.find(line=>line.id === 0)
            if(action.payload.childLevel === 0){
                if(createLine){
                    if(createLine.parentId){
                        newUserList = newUserList.filter(line=> line.id !== 0)
                    }else{
                        newUserList = newUserList.filter(line=> line.id !== 0)
                        newUserList.push({...action.payload.newLine, parentId: action.payload.id})
                    }
                }else{newUserList.push({...action.payload.newLine})}
            }
            if(action.payload.childLevel === 1){
                if(createLine){
                    newUserList = newUserList.filter(line=> line.id !== 0)
                }else{
                    newUserList.push({...action.payload.newLine, parentId: action.payload.id})
                }
            }
            state.userList = newUserList
        }

    },
    extraReducers: (build)=>{
        build.addCase(getUserList.fulfilled, (state: Tstate, action: {payload: TuserList})=>{
            action.payload[0] && (state.userList = action.payload)
        }),
        build.addCase(setUserListLine.fulfilled, (state: Tstate, action)=>{
            state.userList = state.userList.map(line=>{
                if(line.id === action.payload.rId){
                    line = action.payload.body
                }
                return line
            })
        })
    }
})

export const {addUserListLine} = userRouter.actions

export default userRouter