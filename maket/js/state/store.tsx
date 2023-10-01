import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userRouter from "./userRouter/userRouter";

const rootReduser = combineReducers({
    [userRouter.name]: userRouter.reducer
})

export const store = configureStore({
    reducer: rootReduser
})

export type AppDispatch = typeof store.dispatch