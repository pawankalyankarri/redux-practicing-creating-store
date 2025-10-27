import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";


export const store = configureStore({
    reducer : {
        counter : counterSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
