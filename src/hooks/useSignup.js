import { useState,useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";


export const useSignup = () => {
const[iscancelled,setiscancelled]=useState(null)
const[error,seterror]=useState(null)
 const[ispending,setispending]=useState(false)   
 const{ dispatch } =useAuthContext()
 
 
 const signup = async(email,password,displayName) =>{
    seterror(null)
    setispending(true)


    try{
         //signup user
        const res = await projectAuth.createUserWithEmailAndPassword(email,password)
        

         if(!res){
            throw new Error('Could not complete sigunup')
         }

         //add display name

         await res.user.updateProfile( {displayName} )
           
         //dispatch login option
         dispatch({type: 'LOGIN' , payload : res.user})
      
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
 return { signup,error,ispending }
}


