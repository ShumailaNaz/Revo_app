import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";


export const useLogout = () => {
const[isCancelled,setIsCancelled]=useState(false)
const[error,setError]=useState(null)
const[isPending,setIsPending]=useState(false)   
const{ dispatch } =useAuthContext()
const navigation =useNavigate()
 
 const logout = async() =>{
    setError(null)
    setIsPending(true)

    try{
         //logout user
         await projectAuth.signOut()     
         //dispatch login option
         dispatch({type: 'LOGOUT'})
       navigation('/')

         //update state
         if(!isCancelled){
            setIsPending(false)
            setError(null)
         }

    }
    catch(err){
        if(!isCancelled){
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
        }       
    }

 }

 useEffect(() => {
 return () => setIsCancelled(true)
 }, [])
 return { logout,error,isPending }
}


