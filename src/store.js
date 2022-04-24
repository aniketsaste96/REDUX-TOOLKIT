import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";


const store = configureStore({
    reducer: {
        //custom is reduicewr which initial value is 0
        custom: customReducer,
    }
})

export default store;