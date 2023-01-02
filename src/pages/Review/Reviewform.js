import { useState ,useEffect } from 'react'
import { useFirestore } from '../../hooks/useFirestore';
import { useDocuments } from '../../hooks/useDocuments';


export default function Reviewform({ uid }) {
  const { documents,error }=useDocuments('restaurants')
  
  const [username,setUserName] =useState('');
  const [comment , setComment]=useState('');
  const [restaurant,setRestaurant]=useState('');
  const { addDocument,response }=useFirestore('reviews') 
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    addDocument({
        uid,
       comment,
       restaurant
    } );
    }

  useEffect((e)=>{
    if(!response.success){
        setComment('')
         
     }
  },[response.success])
  
  
  return (
    <>
    <h3>Add review</h3>
    <form onSubmit={handleSubmit}>
        <label><span>Select restaurant:</span>
       <select name="" id=""
       onChange={(e)=>setRestaurant(e.target.value)}
       value={restaurant}
       >
      {documents.map((doc)=>(
        <option value={doc.name} key={doc.id}>{doc.name}</option>
      ))}
       </select>
        </label>
        <label><span>Comment</span>
      <textarea name="" id=""
       cols="20" rows="10"
       required
       onChange={(e)=>setComment(e.target.value)}
        value={comment}
        >
     </textarea>
        </label>
        <button>Add Review</button>
    </form>
    </>
  )
}
