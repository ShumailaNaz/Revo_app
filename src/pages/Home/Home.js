import React from 'react'
// CSS
import styles from './Home.module.css';
// hooks
import { useDocuments } from '../../hooks/useDocuments';
// import Component

import ReviewList from '../Review/ReviewList';

export default function Home() {
 const { documents,error }=useDocuments('reviews')
  return (
    <div className={styles['home']}>
      {documents && <ReviewList reviews={documents} /> }
        </div>
  )
}

