import React from 'react'
import styles from './Navbarpost.module.css'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';


export default function Navbarpost() {
const{user} =useAuthContext()
const  { login,error,ispending }=useLogin()
const{logout}=useLogout()    


return (
    <div className={styles['navbar']}>
        <nav>
          <ul>
          <li className={styles.title}>My Posts</li>
         {user && (
         <>
         <li>hello,{user.displayName}</li>
         <li><Link to='/'><button className={styles['button']}
         onClick={logout}>Logout</button></Link></li>
         </>
         )}
         
        </ul>
        {/* {!user && (<>
      <Link to='/'><button className={styles['button']}
       onClick={logout}>Logout</button></Link></>)} */}
       
       
       
        </nav>
    </div>
  )
}




   