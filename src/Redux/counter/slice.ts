import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "./counter.types";


export const counterSlice = createSlice({
    name: "counter",
    initialState: { 
        value: 0,
        value1: 1,
    } as CounterState,
    reducers: {
        inc1: (state, action: PayloadAction<number>) => {
            state.value = state.value + action.payload;
        },
        inc2: (state, action: PayloadAction<number>) => {
            state.value1 = state.value1 + action.payload;
        },
        update1: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        update2: (state, action: PayloadAction<number>) => {
            state.value1 = action.payload;
        }
    },
});

export const { inc1, inc2, update1, update2  } = counterSlice.actions;

export default counterSlice.reducer;
