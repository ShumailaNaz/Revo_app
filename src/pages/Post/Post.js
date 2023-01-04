import React from 'react'
import styles from './Post.module.css'
import Login from '../../components/Login'
import Navbarpost from '../../components/Navbarpost'
import ReviewList from '../../components/ReviewList'
import Reviews from '../../components/Reviews'
import { useAuthContext } from '../../hooks/useAuthContext'
// import Signup from '../../components/SignuP

 export default function Post() {
  const {user}= useAuthContext()
  // console.log(user.uid)
  
  return (
    <div>
      <Navbarpost/>
      <div className={styles['main-post']}>
      <div className={styles['review-form']}>
        <Reviews uid={user.uid}/>
      </div>
      <div className={styles['review-list']}>
         Reviews List
      </div>

      </div>

    </div>
  )
}
