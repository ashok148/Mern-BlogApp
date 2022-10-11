import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./authSlice";

const store = configureStore({
    reducer: customReducer
});
export default store;