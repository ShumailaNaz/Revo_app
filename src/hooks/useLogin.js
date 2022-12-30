import { useState,useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";


export const useLogin = () => {
const[iscancelled,setiscancelled]=useState(null)
const[error,seterror]=useState(null)
const[ispending,setispending]=useState(false)   
const{ dispatch } =useAuthContext()
 
 const login = async(email,password) =>{
    seterror(null)
    setispending(true)

    try{
         //logout user
         const res = await projectAuth.signInWithEmailAndPassword(email,password)     


         //dispatch login option
         dispatch({type: 'LOGIN' ,payload:res.user})
       

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
 return { login,error,ispending }
}


