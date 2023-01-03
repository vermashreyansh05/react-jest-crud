import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import authPageSet from "./loginSignupPage";



const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        authpage: authPageSet.reducer,
    }
})


export default store;