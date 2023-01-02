import React from 'react'
import styles from './Signup.module.css'
import { useState } from 'react';
import {useSignup} from '../hooks/useSignup';
import { Link } from 'react-router-dom';


   export default function Signup() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [displayName,setdisplayName]=useState('')
    const { signup,error,ispending }=useSignup()
     
    const handlesubmit =(e)=>{
        e.preventDefault()
        signup(email,password,displayName);
      }
       
    return (
        <div className={styles['main-form']}>
         <form onSubmit={handlesubmit} className={styles['signup-form']}>
          <h2>Join to post your review.</h2>
          <label>
      <span>user name:</span>
      <input type="text" onChange={(e)=>setdisplayName(e.target.value)} value={displayName}/>
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

         <div className={styles['checkbox']}>
         <input type="checkbox" id="checkbox" />
						<label className="checkbox-label" htmlFor="checkbox">
							Accept T&Cs and Privacy Policy
						</label>
					</div>
         <p>Already a member? <Link to='/Login'>Login</Link></p>
        

        </form>
        </div>
      )
    }
    