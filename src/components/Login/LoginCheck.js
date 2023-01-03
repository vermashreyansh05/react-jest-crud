import axios from 'axios'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const LoginCheck = createAsyncThunk("LoginData/getLoginData",async (props) => {
    const data = {"email":props.email,"password":props.password}
    debugger
    return await axios.post("http://localhost:8080/auth/sign_in/",data).then((res)=>
        res
    );
})


const PostSlice = createSlice((
    {
    name:"loginData",
    initialState:{
        LoginData: [],
        loading: false
    },
    reducers:{
        [LoginCheck.pending]: (state,action) =>{
            state.loading = true
        },
        [LoginCheck.fulfilled]: (state,action) => {
            state.loading = false
            state.LoginData = action.payload
        },
        [LoginCheck.rejected]: (state,action) =>{
            state.loading = false
        }
    }
}))

export default PostSlice.reducer