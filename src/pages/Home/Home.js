import { useState , useEffect  } from 'react'
// CSS
import styles from './Home.module.css';

// hooks
import { useDocuments } from '../../hooks/useDocuments';
import { useAuthContext } from '../../hooks/useAuthContext'

// import Component

import ReviewList from '../Review/ReviewList';
import Search from '../Search/Search';

export default function Home() {
 const { documents,error }=useDocuments('reviews')
 const{ term1,setTerm1 } =useAuthContext()
 const [card ,setCard]= useState([])
 const [notfound,setNotfound]=useState(false)
// console.log("home term",term1);
 useEffect(() => {
  if(documents)
  {
  setCard(documents)
  
  
  }
 }, [card])
 let a=1;
 card.map((c)=>{
 
  //   console.log(c.restaurant.includes('KFC'))
  // console.log(c.restaurant);
  if(c.restaurant.includes(term1)){
    console.log("Hell",a++);
    console.log(c);
  }
  
  })





  return (
    <div className={styles['home']}>
      {(term1!="") &&documents && (card.map((c)=>((c.restaurant.includes(term1))) ? <ReviewList reviews={ [c] } />:""))}
      {/* {notfound && <div>Not Found</div>} */}
      {(term1=="") && documents && <ReviewList reviews={documents} /> }
        </div>
  )
}

