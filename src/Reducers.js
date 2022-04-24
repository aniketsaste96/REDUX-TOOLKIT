import { createReducer } from "@reduxjs/toolkit";


const initialState = {
    c: 0
}


export const customReducer = createReducer(initialState, {
    increment: (state, action) => {
        state.c += 1;
        //here increment by1 so no need of action
    },
    incrementByValue: (state, action) => {

        state.c += action.payload
        //take value from user and incremenet acccording to it.
    },
    decrement: (state, action) => {
        state.c -= 1;
    },
})