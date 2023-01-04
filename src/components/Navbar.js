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
              <Link to="/login" className={styles['btn']}>Post a Review</Link>
              <button className={styles['btn btn-logout']} onClick={logout}>Logout</button>
            </div>
            )
            }
          </nav>
    </div>

  )
}
// const Container=styled.div`
// max-width:100vw;
// background-color:#f2f2f2;
// box-shadow:1px 1px 1px 1px ;rgba(0,0,0,0.5);
// padding:20px;
// .navbar{
//   display:flex;
//   justify-content:space-around;
// }
// .search{

// }
// img{
//   width:200px;
// }
// input,button{
//   margin-right:20px;
//   padding:10px;
//   background:none;
//   border:none;
//   box-shadow:0px 0px  1px 2px rgba(0,0,0,0.5);
//   border-radius:10px;
//   font-size:16px;
// }
// input:focus{
//   border:none;
//   outline:0;
// }

// `