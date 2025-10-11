import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICounterState {
    counter: number
}

const initialState: ICounterState = {
    counter: 0
}


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.counter += action.payload
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.counter -= action.payload
        },
        reset: (state) => {
            state.counter = 0;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter += action.payload
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;