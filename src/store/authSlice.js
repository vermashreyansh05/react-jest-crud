import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const RegisterUser = createAsyncThunk('userSignUp', async(props) => {
    const data = {
        full_name: props.full_name,
        email: props.email,
        password: props.password,
        confirm_password: props.confirm_password
        }
    const resp = await axios.post('http://localhost:8080/auth/',data)
    console.log('signUp Data',resp)
    return resp
})

export const LoginCheck2 = createAsyncThunk ('userLogin',async(props) =>
 {
    const data = {"email":props.email,"password":props.password}
    const resp = await axios.post('http://localhost:8080/auth/sign_in/',data)
    return resp
})

const authSlice = createSlice({
    name:'auth',
    initialState:{isLoggedIn:false},
    userData: [],
    reducers:{
        login (state,props) { 
            const loginArry = props.payload
            state.isLoggedIn = true
            LoginCheck2(loginArry)
    
         },
        logout(state) {
            state.isLoggedIn = false
        },
        signUp (state,props) {
            const signupData = props.payload
            state.isLoggedIn = true
            RegisterUser(signupData)
        },
    },
    extraReducers:{
        [LoginCheck2.fulfilled]:(state,action)=>{
            state.isLoggedIn = true
            state.userData = action.payload
        
          
        },
        [LoginCheck2.rejected]:(state,action)=>{
            state.isLoggedIn = false
          
            alert("Wrong Credentials")
          
        },
        [RegisterUser.fulfilled]:(state,action)=>{
          
            state.isLoggedIn = true
            state.userData = action.payload
        }
    }
})


export const authActions = authSlice.actions

export default authSlice;