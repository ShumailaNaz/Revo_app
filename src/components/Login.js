import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';



export default function Login() {
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const  { login,error,isPending }=useLogin()


const handlesubmit =(e)=>{
 e.preventDefault()
 login(email,password)
}

    return (
    <div className={styles['main-form']}>
     <form onSubmit={ handlesubmit } className={styles['login-form']}>
      <h2>Welcome back</h2>
      <label>
        <span>Email address:</span>
        <input type="email" 
        onChange={(e)=>setemail(e.target.value)} 
        value={email}
        required />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" 
        required
        onChange={(e)=>setpassword(e.target.value)} 
        value={password}/>
      </label>
      {error && <p>{ error }</p>}
      {!isPending &&<button className={styles['button']}>Login</button>}
      {isPending && <button className='btn' disabled >Loading...</button>}
   
     <p>Not a member? <Link to='/Signup' className={styles.member}>Signup</Link></p>
    </form>
    </div>
  )
}
