import React from "react";
import { useDispatch } from "react-redux";
import {  LoginCheck2 } from "../../store/authSlice";
import { pageActions } from "../../store/loginSignupPage";

const Login=()=>{

    const{useState}=React;

    const[warnemail,setwarnemail]=useState("");
    const[warnpass,setwarnpass]=useState("");
    const[danger,setdanger]=useState(true);
    const[eye,seteye]=useState(true);
    const[pass,setpass]=useState("password");
    

   
    
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(pageActions.signUpPage())
    }

    const loginData = {"email":warnemail,"password":warnpass}

    const SubmitForm=(e)=>{
    e.preventDefault();
    setwarnemail(false);
    setwarnpass(false);
    dispatch(LoginCheck2(loginData))
    dispatch(pageActions.welcomePage())
   
    if(warnemail.length<1){ setdanger(false); } if(warnemail=="" ){ setwarnemail(true); } else if(warnpass=="" ){ setwarnpass(true); } else{ alert("Logged in Successfully"); } }; const Eye=()=>{
        if(pass=="password"){
        setpass("text");
        seteye(false);
        }else{
        setpass("password");
        seteye(true);
        }
    }; 

    
        return(
        <>
            <div className="container" data-testid="Login-Container" title="containerDiv">
                <div className="card">
                    <div className="form">
                        <div className="left-side">
                            <img src="https://imgur.com/XaTWxJX.jpg" alt="Girl Sitting on Floor"/>
                        </div>
    
                        <div className="right-side">
                            <div className="register">
                                <p>Not a member? <button className="btn btn-sm" onClick={handleChange}>Register Now</button></p>
                            </div>
    
                            <div className="hello">
                                <h2>Hello Again!</h2>
                                <h4>Welcome back you have been missed! </h4>
                            </div>
    
                            <form onSubmit={SubmitForm}>
    
                                <div className="input_text">
                                    <input className={` ${warnemail ? "warning" : "" }`} type="text" placeholder="Enter Email" name="email"   value={warnemail} onChange={(e)=>{setwarnemail(e.target.value)}} />
                                    <p className={` ${danger ? "danger" : "" }`}><i className="fa fa-warning"></i>Please enter a valid email address.</p>
                                </div>
                                <div className="input_text">
                                    <input className={` ${warnpass ? "warning" : "" }`} type={pass} placeholder="Enter Password" name="password" value={warnpass} onChange={(e)=>setwarnpass(e.target.value)} />
                                    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                                </div>
                                <div className="recovery">
                                    <p>Recovery Password</p>
                                </div>
                                <div className="btn">
                                    <button type="submit">Sign in</button>
                                </div>
    
                            </form>
    
                            <hr />
                            <div className="or">
                                <p>or signin with</p>
                            </div>
                            <div className="boxes">
                                <span><img src="https://imgur.com/XnY9cKl.png" alt="google logo"/></span>
                                <span><img src="https://imgur.com/ODlSChL.png" alt="apple logo"/></span>
                                <span><img src="https://imgur.com/mPBRdQt.png" alt="fb logo"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    
    
        </>
        );
        }

export default Login;