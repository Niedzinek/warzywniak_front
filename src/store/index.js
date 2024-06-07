import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import authReducer from './UserSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer
    }
});

export default store;