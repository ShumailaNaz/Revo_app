
import styles from './Searchbar.module.css'
import { useAuthContext } from '../hooks/useAuthContext'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

export default function Searchbar() {
    const [term,setTerm]=useState('')
    const{ term1,setTerm1 } =useAuthContext()
    console.log(term1);
 
    const navigation=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        // 
        navigation(`/search?q=${term1}`)
    }



  return (
    <div className={styles['searchbar']}>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search:</label>
            <input type="text"
            id='search'
            required
            onChange={(e)=>setTerm1(e.target.value)}
            value={term1}
             />
        </form>
        
        </div>
  )
}

