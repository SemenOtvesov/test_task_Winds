import { apiUrl, eId } from "@js/snipets/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import getUserList from "./getUserList";
import deleteFetch from "@js/snipets/deleteFetch";

export default createAsyncThunk('deleteUserList-line', async (rId: number, {dispatch})=>{
    await deleteFetch(apiUrl + `/v1/outlay-rows/entity/${eId}/row/${rId}/delete`)
    return dispatch(getUserList())
})