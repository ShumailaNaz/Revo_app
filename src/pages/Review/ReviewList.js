import React from "react";
import styles from "./ReviewList.module.css";
import { Rating } from "react-simple-star-rating";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useState } from "react";

export default function ReviewList({ reviews }) {
  console.log("list", reviews);
  const [rating, setRating] = useState(0);

  return (
    <div className={styles["container"]}>
      <section>
        <div className={styles["review-list"]}>
          {reviews.map((review) => (
            <div key={review.id} className={styles["card"]}>
              <div className={styles["user"]}>
                <h3> {review.name}</h3>
              </div>

              <div className={styles["restaurant"]}>
                <h3> {review.restaurant}</h3>
                <p> {review.location}</p>
              </div>
              <div className={styles.rating}>
                <Rating
                  readonly={true}
                  size={20}
                  label
                  transition
                  fillColor="orange"
                  emptyColor="gray"
                  initialValue={review.rating}
                />
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
