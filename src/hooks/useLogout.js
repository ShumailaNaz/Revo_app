import { useState,useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";


export const useLogout = () => {
const[iscancelled,setiscancelled]=useState(null)
const[error,seterror]=useState(null)
const[ispending,setispending]=useState(false)   
const{ dispatch } =useAuthContext()
 
 const logout = async() =>{
    seterror(null)
    setispending(true)

    try{
         //logout user
         await projectAuth.signOut()     
         //dispatch login option
         dispatch({type: 'LOGOUT'})
       

         //update state
         if(!iscancelled){
            setispending(false)
            seterror(null)
         }

    }
    catch(err){
        if(!iscancelled){
        console.log(err.message)
        seterror(err.message)
        setispending(false)
        }       
    }

 }

 useEffect(() => {
 return () => setiscancelled(true)
        
    
 }, [])
 return { logout,error,ispending }
}


