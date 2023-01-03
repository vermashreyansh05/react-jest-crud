import { Button } from "bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions, RegisterUser } from "../../store/authSlice";
import authPageSet, { pageActions } from "../../store/loginSignupPage";


const SignUpPAge=()=>{
    // const{useState}=React;
    
    const[email,setemail]=useState("");
    const[name,setname]=useState("");
    const[password,setpassword]=useState("");
    const[confirmPassword, setConfirmPassword] = useState("")
    
    
    const[eye,seteye]=useState(true);
    const[inputtext,set_inputtext]=useState("password");
    const[warning,setwarning]=useState(false);
    
    
    const[warning_email,set_warningemail]=useState(false);
    const[warning_name,set_warningname]=useState(false);
    const[warning_password,set_warningpassword]=useState(false);

const dispatch = useDispatch()

const handleChange = () => {
    dispatch(pageActions.loginpage())
}
    
const input_email=(email_event)=>{
    setemail(email_event.target.value);
}
const input_name=(name_event)=>{
    setname(name_event.target.value);
}
const input_password=(password_event)=>{
    setpassword(password_event.target.value);
} 
const input_Confirm_password=(password_event)=>{
    setConfirmPassword(password_event.target.value);
} 
 

 
const Eye=()=>{
    if(inputtext=="password"){ 
        set_inputtext("text");
        seteye(false);
        setwarning(true);
    }
    else{
        set_inputtext("password");
        seteye(true);
        setwarning(false);
    }
}
    
const Started=(e)=>{
    e.preventDefault()
    set_warningemail(false);
    set_warningname(false);
    set_warningpassword(false);
    const signUpData = {
        full_name: name,
        email: email,
        password: password,
        confirm_password: confirmPassword}
        
    dispatch(pageActions.welcomePage())

    dispatch(RegisterUser(signUpData))

    if(email==""){
        set_warningemail(true);
    }
    else if(name==""){
        set_warningname(true);
    }
    else if(password==""){
        set_warningpassword(true); 
    }
    else{
    alert("form submitted"); 
    }

}    
    
    return(
        <>
          <div className="container">
              <div className="card">
                  <div className="top_div">
                      <div className="bric">
                        <span></span>
                        <h5>Bric</h5>
                      </div>
                      <p>Have an account?<button className="btn" onClick={handleChange}>Log in</button></p>
                  
                  </div>
                  <div className="text">
                       <h3>Manage your freelance buisness with us!</h3>
                       <h6>Take less than 10 minutes to fill out all the information needed to register your buisness.</h6>
                  </div>
                  <div className="input_text">
                      <input data-testid="fullName" type="text" className={`${warning_name ? "input_warning" : ""}`} value={name} onChange={input_name} required />
                      <label>Full name</label> 
                      <span>{warning_name}</span> 
                  </div>
                  <div className="input_text">
                      <input type="text" data-testid="email" className={`${warning_email ? "input_warning" : ""}`} value={email} onChange={input_email} required/>
                      <label>Email</label>
                      <span>{warning_email}</span>
                  </div>
                  
                  <div className="input_text">
                      <input type={inputtext} data-testid="password" className={`${warning ? "warning" : ""} ${warning_password ? "input_warning" : ""}`} value={password} onChange={input_password} required/>
                      <label>Password</label>
                      <span>{warning_password}</span>
                      <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </div>
                  <div className="input_text">
                      <input type={inputtext} data-testid="confirm-password" className={`${warning ? "warning" : ""} ${warning_password ? "input_warning" : ""}`} value={confirmPassword} onChange={input_Confirm_password} required/>
                      <label>Confirm Password</label>
                      <span>{warning_password}</span>
                      <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </div>
                  <div className="button">
                  <button onClick={Started} >Get Started</button>
                  <h6>By signing up you are agreeing to our</h6>
                  <a data-testid="link" href="#">Terms and Condition</a>
                  </div>
              </div>
          
          </div>
        </>
        );
}


export default SignUpPAge;