import React from 'react'
import styles from './ReviewList.module.css'

export default function ReviewList({ reviews }) {
  return (

    <div className={styles['container']}>
      <section>
      <div className={styles['review-list']}>
           {reviews.map((review)=>(
           <div key={review.id} className={styles['card']}>
           <h1> {review.restaurant}</h1>
           <p>{review.location}</p>
           <p >{review.comment}</p>
           </div> 
        ))}
        </div>
        </section>
    </div>
  )
}
