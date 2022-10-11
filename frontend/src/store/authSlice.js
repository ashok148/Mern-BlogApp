const {createSlice} = require('@reduxjs/toolkit');

const authSlice = createSlice({
    name: "auth",
    initialState: { isAuthenticated: false },
    reducer: {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            localStorage.removeItem("userId");
            state.isAuthenticated = false
        }, 
    },
});
export const {authActions} = authSlice.actions;
export default authSlice.reducer;