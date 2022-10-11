import { configureStore, createSlice, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import thunk from "redux-thunk";

const authSlice = createSlice({
    name: "auth",
    initialState: { isAuthenticated: false },
    reducer: {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        },
        // increment(state) {
        //     alert('sasas')
        //     },
      
    },
});

export const { authActions } = authSlice.actions;

export const store = configureStore({
    reducer: authSlice.reducer,
        middleware: (getDefaultMiddleware)=>[
            ...getDefaultMiddleware(),
            logger
        ]

});