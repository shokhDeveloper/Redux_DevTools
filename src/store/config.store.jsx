import { configureStore } from "@reduxjs/toolkit";
import { RootReducers } from "./Redecers/RootReducers";
export const store = configureStore({
    reducer: RootReducers,
    devTools: process.env.NODE_ENV ==="development"? true: false
})