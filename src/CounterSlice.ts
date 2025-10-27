import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterType {
  value: number;
}
const initialState: CounterType = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increasecnt: (state) => {
      state.value += 1;
    },
    decreasecnt: (state) => {
      state.value -= 1;
    },
    resetcnt: (state) => {
      state.value = 0;
    },
    addvalue : (state,action:PayloadAction<number>) =>{
        state.value+=action.payload
    }
  },
});

export default counterSlice.reducer;
export const { increasecnt, decreasecnt, resetcnt,addvalue } = counterSlice.actions;
