import React from 'react'
import styles from './Review.module.css'

export default function ReviewList({ reviews }) {
  return (
    <div>
        {reviews.map((review)=>(
            <div key={review.id}>
           <h3> {review.restaurant}</h3>
           <p>{review.location}</p>
           <p >{review.comment}</p>
           </div> 
        ))}

    </div>
  )
}
