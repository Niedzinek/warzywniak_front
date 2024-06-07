import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null
    },
    reducers:{
        doLogin: (state, action) => {
            const {user, accessToken} = action.payload
            state.user = user
            state.token = accessToken
            console.log("User logged in, token set:", state.token); // Dodaj logowanie tutaj

        },
        doLogOut: (state, action) => {
            state.user = null
            state.token = null
        }
    },
})
export const {doLogin, doLogOut} = userSlice.actions

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentToken = (state) => state.auth && state.auth.token