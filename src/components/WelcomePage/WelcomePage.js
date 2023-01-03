import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pageActions } from '../../store/loginSignupPage'
import Logout from '../Login/Logout'

function WelcomePage(props) {
  const dispatch = useDispatch()
  const userData = useSelector((state)=>state.auth.userData)
  const data = userData.data.data
  const handleEvent = () => {
    dispatch(pageActions.counterPage())
  } 
  debugger
  return (
    <div>

      <div ><Logout/></div>
      <p><h1>Welcome {userData.data.data.full_name}</h1></p>
      <ul>
        <li> Name : {data.full_name}</li>
        <li> Email : {data.email}</li>
        <li> Uid : {data.uid}</li>
      </ul>
      <button onClick={handleEvent}>Go to Counter Page</button>
    </div>
  )
}

export default WelcomePage