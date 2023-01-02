// import logo from '../assets/navbar/logo1.png'
// CSS
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

import Searchbar from './Searchbar'

export default function Navbar() {
  return (
  
    <div className={styles['navbar']}>
        {/* <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder='Search' />
          <Link to='/Signup'> Post a Review
          </Link>
         
        </div> */}
        <nav>
          <Link to="/" className={styles['brand']}><h1>REVO</h1></Link>
          <Searchbar/>
          <Link to="/login">Post a Review</Link>
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