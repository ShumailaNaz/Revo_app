
import { useState ,useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore';
import { useDocuments } from '../../hooks/useDocuments';
import styles from './Reviewform.module.css'
import { Rating } from 'react-simple-star-rating'
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Reviewform({ uid }) {
  const { documents, error } = useDocuments("restaurants");

  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [location, setLocation] = useState("");
  const { addDocument, response } = useFirestore("reviews");
  const { user }=useAuthContext();

  const [rating, setRating] = useState(0) 



  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      comment,
      restaurant,
      location,
      name:user.displayName,
      rating
    });
  };

  useEffect(
    (e) => {
      if (!response.success) {
        setComment("");
      }

      if (documents) {
        documents.map((doc) => {
          if (restaurant.includes(doc.name)) {
            setLocation(doc.location);
          }
        });
      }
    },
    [response.success, location, restaurant]
  );

  return (

    <div className={styles['review-form']}>
   
    <form onSubmit={handleSubmit}>
    <h3>Add review</h3>
      {documents &&(
        <div>
        <label><span>Select restaurant:</span>
       <select name="" id=""
       onChange={(e)=>setRestaurant(e.target.value)}
       value={restaurant}
       >
      {documents.map((doc)=>(
        <option value={doc.name} key={doc.id}>{doc.name}</option>
      ))}
      
       </select>
        </label>
       <div>
        <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='foo' // Will remove the inline style if applied
       />
       {/* Use rating value */}
       {rating}
        </div>
      <label>
      <span>Comment</span>
      <textarea name="" id=""
       cols="20" rows="5"
       required
       onChange={(e)=>setComment(e.target.value)}
        value={comment}
        >
     </textarea>
        </label>
        <button>Add Review</button>
        </div>
        )}
    </form>
    </div>
  )
}