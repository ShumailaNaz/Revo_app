// import logo from '../assets/navbar/logo1.png'
// CSS
import styles from './Navbar.module.css'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

import menu from '../assets/menu.png'
import Searchbar from './Searchbar'
import { useState } from 'react'


export default function Navbar() {
  const { logout } = useLogout();;
  const { user } = useAuthContext();

  const [open, setopen] = useState(false);
  const handleclick = () => setopen(!open);
  const closemenu = () => setopen(false);
  return (
    <div className={styles['navbar']}>
      <nav>
        <Link to="/" className={styles['brand']}><h1>REVO</h1></Link>
         <Searchbar/>
        <div onClick={handleclick} className={styles['icon']}>
          {open ? <p>close</p> : <img src={menu} />}

        </div>


        {!user && (
          <div className={open ? styles['navbar-links-active'] : styles['navbar-links']}>
        {/* <div className={styles['navbar-links']}> */}
                     
              <Link onClick={closemenu} to="/login" className={styles['btn']}>Login</Link>
              <Link onClick={closemenu} to="/signup" className={styles['btn']}>Signup</Link>
            </div>
           )}
            {user && 
            (<div className={open ? styles['navbar-links-active'] : styles['navbar-links']}>
               <h5>Hey! {user.displayName}</h5>
          

      
            {user && (<div className={styles['navbar-links']}>
              <h5>Hey! {user.displayName}</h5>
              <Link to="/postreview" className={styles['btn']}>Post a Review</Link>
              <Link to="/yourreview" className={styles['btn']}>View Review</Link>
              <button className={styles['btn btn-logout']} onClick={logout}>Logout</button>
            </div>
            )
            }
          </nav>
    </div>

  )
}
