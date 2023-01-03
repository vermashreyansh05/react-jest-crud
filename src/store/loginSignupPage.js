import { configureStore, createSlice } from "@reduxjs/toolkit";

const authPageSet = createSlice({
    name:"authPage",
    initialState:{loginPage:"LOGINPAGE"},
    reducers:{
        loginpage(state){
            state.loginPage = 'LOGINPAGE'
        },
        signUpPage(state) {
            state.loginPage = 'SIGNUPPAGE'
        },
        welcomePage(state) {
            state.loginPage = ''
        },
        getLogout(state){
            state.loginPage = 'LOGINPAGE'
        },
        counterPage(state){
            state.loginPage = 'COUNTERPAGE'
        }
    }
})

export const pageActions = authPageSet.actions

export default authPageSet;