import { configureStore, createSlice } from "@reduxjs/toolkit";


const LoginDataSlice = createSlice({
    name:"LOGINDATA",
    initialState:"",
    reducers:{
        saveLoginData (state,props) {
            debugger
            const loginData = props.payload
        },

    }
})

export const loginDataSlice = LoginDataSlice.actions
export default LoginDataSlice;