
import React from "react";
import styles from "./ReviewList.module.css";
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

export default function ReviewList({ reviews }) {
  console.log(reviews);


  return (
    <div className={styles["container"]}>
      <section>
        <div className={styles["review-list"]}>
          {reviews.map((review) => (
            <div key={review.id} className={styles["card"]}>
              <div className={styles["user"]}>
                
              </div>

              <div className={styles["restaurant"]}>
                <h3> {review.restaurant}</h3>
                <p> {review.location}</p>
              </div>
              <div className={styles["comment"]}>
                <label htmlFor="" className={styles.comm}>
                  Comment:
                </label>{" "}
                <p>{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
