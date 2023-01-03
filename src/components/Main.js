import React from 'react'
import { useSelector } from 'react-redux'
import Counter from './count/Counter'
import Login from './Login/Login'
import SignUpPAge from './Login/SignUpPAge'
import WelcomePage from './WelcomePage/WelcomePage'

function Main() {
    const isLoggedIn = useSelector(state=> state.auth.isLoggedIn)
    const loginPage = useSelector(state=> state.authpage.loginPage)
    console.log("LoginPage",loginPage)
  return (
    <div>
    {loginPage === "LOGINPAGE" ?  <Login/> : null}
    {loginPage === 'SIGNUPPAGE' ?  <SignUpPAge/> : null}
    {loginPage === 'COUNTERPAGE' ? <Counter/> : null}
    {isLoggedIn && <WelcomePage/>}
    </div>
  )
}

export default Main