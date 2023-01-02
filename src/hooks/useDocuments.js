import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocuments = (collection) => {
  const [documents,setDocuments]=useState(null)
  const [ error, setError]=useState(null)


  
  useEffect(()=>{
    let ref =projectFirestore.collection(collection)
   
    const unsubscribe=ref.onSnapshot((snapshot)=>{
        let result =[]
        snapshot.docs.forEach(doc=>{
            result.push({ ...doc.data(),id:doc.id})
        })
        // update state
        setDocuments(result)
        setError(null)
    }, (error)=>{
        console.log(error);
        setError("Could not fetch Data")
    })
return()=> unsubscribe()

  },[collection])
    return { documents , error }
};
