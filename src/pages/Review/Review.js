import React from 'react'
import { useAsyncValue } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import styles from './Review.module.css'
import { useCollection } from '../../hooks/useCollection'

import Reviewform from './Reviewform'
import ReviewList from './ReviewList'


export default function Review() {
  const { user } = useAuthContext()
  const{ documents, error } =useCollection(
    'reviews',
    ['uid','==',user.uid],
    ["createdAt","desc"]
  )
  return (
    <div className={styles.container}>
    <div className={styles.content}>
      {error && <p>{error}</p>}
      {documents && <ReviewList reviews={documents} />}
      </div>
    <div className={styles.sidebar}>
      <Reviewform uid={user.uid}/>
      </div>
    </div>
  )
}
