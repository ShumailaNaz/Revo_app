import React from 'react'
import styles from './Login.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Login() {
const [email,setemail]=useState('');
const [password,setpassword]=useState('');

const handlesubmit =(e)=>{
 e.preventDefault()
}

    return (
    <div className={styles['main-form']}>
     <form onSubmit={handlesubmit} className={styles['login-form']}>
      <h2>Welcome back.</h2>
      <label>
        <span>email address:</span>
        <input type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
      </label>
      <label>
        <span>password:</span>
        <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
      </label>
      <button className={styles['button']}>Login</button>
      {/* {!isPending && <button className='btn'>Login</button>}
     {isPending && <button className='btn'disabled>loading</button>} */}
     {/* {error && <p>{error}</p>} */}
     <p>Not a member? <Link to='/Signup'>Signup</Link></p>
    </form>
    </div>
  )
}
