
import styles from './Searchbar.module.css'
import { useAuthContext } from '../hooks/useAuthContext'
import { useState } from 'react'


export default function Searchbar() {
    const [term,setTerm]=useState('')
    const{ term1,setTerm1 } =useAuthContext()
   

    const handleSubmit=(e)=>{
        e.preventDefault();
     
    }



  return (
    <div className={styles['searchbar']}>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search" ></label>
            <input type="text"
            id='search'
            placeholder='Search here....'
            required
            onChange={(e)=>setTerm1(e.target.value)}
            value={term1}
             />
        </form>
        
        </div>
  )
}

