import { configureStore } from "@reduxjs/toolkit";
import { countersSlice } from "./CounterSlice";

export default configureStore({
    reducer: {
        counter: countersSlice.reducer,
    },
});
