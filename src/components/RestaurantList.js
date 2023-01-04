import React from 'react'
import styles from './RestaurantList.module.css'
// import img1 from '../assets/navbar/img1.jpg'
import { Link } from 'react-router-dom'
export default function RestaurantList({restaurants}) {

 console.log(restaurants.image)

    return (
    <div className={styles['restaurant-list']}>
    {restaurants.map(restaurant =>(
  <div key={restaurant.id} className={styles['card']}>
   <img src={restaurant.image}/> 
   {/* <img src={img1}/> */}
    <h3>{restaurant.name}</h3>
    <p>{restaurant.location}</p>
    <Link to="/login">Post a Review</Link>
    {/* <div>{recipe.method.substring(0,100)}...</div>
    <Link to={`/recipe/${recipe.id}`}>Post a Review</Link> */}

  {/* onClick={() => handleclick(recipe.id)} */}
   

    </div>
  ))}
</div>
  )
}
