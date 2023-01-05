import { createContext,useReducer,useEffect ,useState } from "react";
import { projectAuth } from "../firebase/config";


 export const AuthContext = createContext()

 export const authReducer =(state,action)=>{
  switch(action.type){
  case 'LOGIN' :
    return {...state,user:action.payload } 
  case 'LOGOUT' :
    return {...state,user:null}  
  case 'AUTH_IS_READY':
    return {...state,user:action.payload,authIsReady:true}
    default:
        return state
  }
} 

export const AuthContextProvider =({children})=>{
  const [term1,setTerm1]=useState('')
    const [state, dispatch]=useReducer(authReducer,{
        user:null,
        authIsReady :false
    })
  //when there is some type of changes in authentication 
 useEffect(() => {
  const unsub=projectAuth.onAuthStateChanged ((user) => {
   dispatch({type:'AUTH_IS_READY' , payload: user})
    unsub()
  })
 }, [])

   
    return (
        <AuthContext.Provider value={{...state, dispatch ,term1,setTerm1}}>
         {children}
        </AuthContext.Provider>
    )
}