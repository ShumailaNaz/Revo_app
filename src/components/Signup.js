import React from 'react'
import styles from './Signup.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Signup() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [name,setName]=useState('')
    
    const handlesubmit =(e)=>{
        e.preventDefault()
       }
       
    return (
        <div className={styles['main-form']}>
         <form onSubmit={handlesubmit} className={styles['signup-form']}>
          <h2>Join to post your review.</h2>
          <label>
      <span>user name:</span>
      <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
         </label>
          <label>
            <span>email address:</span>
            <input type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
          </label>
          <label>
            <span>password:</span>
            <input type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
          </label>
          <button className={styles['button']}>Signup</button>
          {/* {!isPending && <button className='btn'>Login</button>}
         {isPending && <button className='btn'disabled>loading</button>} */}
         {/* {error && <p>{error}</p>} */}
         <p>Already a member? <Link to='/login'>Login</Link></p>
        </form>
        </div>
      )
    }
    