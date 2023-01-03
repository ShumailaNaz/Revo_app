import React from 'react'
import styles from './ReviewList.module.css'

export default function ReviewList({ reviews }) {
  return (
    <div className={styles['review-list']}>
      {/* <div className={styles['review1-list']}> */}
           {reviews.map((review)=>(
           <div key={review.id} className={styles['card']}>
           <h3> {review.restaurant}</h3>
           <p >{review.comment}</p>
           </div> 
        ))}
        {/* </div> */}
    </div>
  )
}
