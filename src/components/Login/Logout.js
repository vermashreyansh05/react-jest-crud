import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageActions } from '../../store/loginSignupPage'
import axios from "axios";
import { authActions } from '../../store/authSlice';

function Logout() {
    const logoutData = useSelector(state=>state.auth.userData)
    const dispatch = useDispatch()

    const handleChange = async(e) => {
      const data = {"client":logoutData.headers.client, "uid": logoutData.headers.uid, "access-token": logoutData.headers["access-token"]}   
      debugger  
      e.preventDefault()
      dispatch(pageActions.loginpage())
      dispatch(authActions.logout())
      localStorage.clear('headers')
      const resp = await axios.delete('http://localhost:8080/auth/sign_out/',data)
      console.log(resp)
      debugger
    }
  return (
    <div>
        <button className='btn btn-danger logout' onClick={handleChange}>LogOut</button>
    </div>
  )
}

export default Logout