import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {authActions}  from '../../store/authSlice'


const Counter = () => {
    const [count, setCount] = useState(0)
    const [amount, setamount] = useState(0)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(authActions.logout())
    },[])
  return (
    <>
    <h2>{count}</h2>
    <input 
      type="number"
      name='amount'
      value={amount}
      onChange={(e)=>setamount(parseInt(e.target.value))}
    />
    <button onClick={()=>{setCount(count+amount)}}>Set Count</button>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </>
  )
}

export default Counter