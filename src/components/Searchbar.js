
import React from 'react'
import styles from './Searchbar.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Searchbar() {
const [term, setterm] = useState('')
const navigate = useNavigate()

const handlesubmit = (e) => {
e.preventDefault()
navigate(`/search?q=${term}`)
        //q=?
}
    return (
        <div className={styles['searchbar']}>
            <form onSubmit={handlesubmit}>
                <label htmlFor='search'>Search:</label>
                <input type="text"
                       id="search"
                       onChange={(e) => setterm(e.target.value)}
                       required
                />
            </form>
        </div>

    )

}

  

