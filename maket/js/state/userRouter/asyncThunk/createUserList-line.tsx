import { apiUrl, eId } from "@js/snipets/constants";
import postFetch from "@js/snipets/postFetch";
import { TLinePost } from "@js/types/state/userRouter";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getUserList from "./getUserList";


export default createAsyncThunk('createUserList-line', async (body: TLinePost, {dispatch})=>{
    console.log(body)
    await postFetch(apiUrl + `/v1/outlay-rows/entity/${eId}/row/create`, body)
    return dispatch(getUserList())
})