import React from 'react'
// CSS
import styles from './Home.module.css';
import { useFetch } from '../../hooks/useFetch'
// import Component
import ReviewList from '../../components/ReviewList';

export default function Home() {
    const { data, isPending, error}=useFetch()
  return (
    <div className={styles['home']}>
        {<ReviewList />}
        
        </div>
  )
}
