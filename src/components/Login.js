import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { useAuthContext } from '../hooks/useAuthContext';


export default function Login() {
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const  { login,error,ispending }=useLogin()
const {user}=useAuthContext()

const handlesubmit =(e)=>{
 e.preventDefault()
 login(email,password)
}

    return (
    <div className={styles['main-form']}>
     <form onSubmit={handlesubmit} className={styles['login-form']}>
      <h2>Welcome back</h2>
      <label>
        <span>email address:</span>
        <input type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
      </label>
      <label>
        <span>password:</span>
        <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
      </label>
     <button className={styles['button']}>Login</button>    
     <p>Not a member? <Link to='/Signup'>Signup</Link></p>
    </form>
    </div>
  )
}
