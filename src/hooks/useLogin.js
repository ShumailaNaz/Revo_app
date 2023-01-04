import { useState,useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
const[isCancelled,setIsCancelled]=useState(false)
const[error,setError]=useState(null)
const[isPending,setIsPending]=useState(false)   
const{ dispatch } =useAuthContext();
const navigation =useNavigate();

 const login = async(email,password) =>{
    setError(null)
    setIsPending(true)

    try{
         //logout user
        const res= await projectAuth.signInWithEmailAndPassword(email,password)     
         //dispatch login option
         dispatch({type: 'LOGIN',payload:res.user})
       navigation('/review')

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
 return { login,error,isPending }
}


