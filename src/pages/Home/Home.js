import React from 'react'
// CSS
import styles from './Home.module.css';
import { useFetch } from '../../hooks/useFetch';
// import Component
import RestaurantList from '../../components/RestaurantList';
import Navbar from '../../components/Navbar';

export default function Home() {
 
  const{ data, isPending, error }=useFetch(' http://localhost:3000/restaurants')

  return (
    <div className={styles['home']}>
      <Navbar/>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading....</p>}
      {data && <RestaurantList restaurants={data}/>}           
    </div>
  )
}

