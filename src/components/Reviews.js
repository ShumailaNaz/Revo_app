import React from 'react'
import Navbar from './Navbar'
// import pic from '../assets/navbar/logo1.png'
import styles from './Review.module.css'
import { useState,useEffect } from 'react'
import { useFirestore } from '../hooks/useFirestore'

export default function Reviews({uid}) {
  const [name,setname]=useState('')
  const [review,setreview]=useState('')
  const [restaurant,setrestaurant]=useState('')
  const {addDocument,response}=useFirestore('review1')
  const handlesubmit =(e)=>{
    e.preventDefault()
    addDocument({
      uid,
      name,
      review
    })
    // console.log({uid,name,review,restaurant})
    // console.log(addDocument)
  }

//  console.log(addDocument)
  
  // reset form
  useEffect(() => {
    if (response.success) {
        setrestaurant('')
        setname('')
        setreview('')
    }
}, [response.success])


return (
    <div className={styles['review-form']}>
      <form onSubmit={handlesubmit}>
        <label>Review Regarding:</label>
        <input
         type="text"
         required
         placeholder="Experience.."
         onChange={(e)=>setname(e.target.value)}
         value={name}
         ></input>
        {/* <label>Choose Restaurant:</label>
        <select 
        id="restaurant"
        name="restaurant"
        required
        onChange={(e)=>setrestaurant(e.target.value)}
        value={restaurant}
        >
        <option value="KFC">KFC</option>
        <option value="GINSOY">GINSOY</option>
        <option value="DOMINO">DOMINO</option>
        </select> */}
        <br/> 
        <labal>write a review:</labal>
       
        <textarea
        required
        placeholder="......"
        onChange={(e)=>setreview(e.target.value)}
        value={review}

        />

        <input type="submit"  value="Submit"/>
      </form>
          {/* <form>
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>
  
    <input type="submit" value="Submit">
  </form> */}
   </div>
          
    
  )

  }