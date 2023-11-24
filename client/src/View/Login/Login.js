import React,{useState} from 'react'
import"./Login.css"
import axios from 'axios'

function Login(){

    const[email,setEmail]=useState('')
    
    const[password,setPassword]=useState('')

    const login=async ()=>{
        const response=await axios.post("/login",{
            email:email,
            password:password
        });
        alert(response.data.message);

        if(response.data.success){
            localStorage.setItem("user",JSON.stringify(response.data.data));


            window.location.href="/";
        }
    }

    return(
        <div className='login-container'>
            <h1>Login</h1>
            <div className='input-container'>
                    <label className='input-lable'>Email</label>
                    <input type='email' 
                    placeholder='Enter Your Email' className='input-field'
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
            <div className='input-container'>
                    <label className='input-lable'>Password</label>
                    <input type='password' 
                    placeholder='Enter Your Password' className='input-field'
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                
           <button className='login-btn'onClick={login}>Login</button> 
        </div>
    )
}
export default Login