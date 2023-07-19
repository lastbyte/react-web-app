import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        step: 1
    },
    reducers: {
        increment: (state) => {
            state.value += state.step;
        },
        decrement: (state) => {
            state.value -= state.step;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        setStep: (state, action) => {
            state.step = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount, setStep} = counterSlice.actions

export default counterSlice.reducer