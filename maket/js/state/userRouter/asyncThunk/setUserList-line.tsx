import { apiUrl, eId } from "@js/snipets/constants";
import postFetch from "@js/snipets/postFetch";
import { TLine } from "@js/types/state/userRouter";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Tprops = {
    body: TLine,
    rId: number
}


export default createAsyncThunk('setUserList-line', async ({body, rId}: Tprops)=>{
    await postFetch(apiUrl + `/v1/outlay-rows/entity/${eId}/row/${rId}/update`, body)
    return {body, rId}
})