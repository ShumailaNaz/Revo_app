import { useReducer,useEffect,useState } from "react";
import { projectFirestore,timestamp } from "../firebase/config";

let initialState ={
  document:null,
  isPending:false,
  error:null,
  success:null


}

const firestoreReducer = (state, action) => {
  switch (action.type) {
      case 'IS_PENDING':
          return {error: null, document: null, success: null, isPending:true}
      case 'ADDED_DOCUMENT':
          return {error: null, document: action.payload, success: true, isPending: false}
      case 'DELETED_DOCUMENT':
          return {error: null, document: null, success: true, isPending: false}
      case 'ERROR':
          return {error: action.payload, document: null, success: false, isPending:false}
  default:
    return state;
}
};


export const useFirestore = (collection) => {
    const [response,dispatch] = useReducer(firestoreReducer,initialState)
    const[isCancelled,setIscancelled]=useState(false)

   //collection ref 
   const res = projectFirestore.collection(collection)
  
//    ref.add()


//only dispatch if not cancelled

const dispatchisnotcancelled = (action)=>{
  if (!isCancelled) dispatch(action);
};
const createdAt = timestamp.fromDate(new Date())



// add a document 
 const addDocument = async(doc) => {
  dispatch({ type: 'IS_PENDING' })
  try {
      const addedDocument = await res.add({...doc, createdAt})
    
      dispatchisnotcancelled({type: 'ADDED_DOCUMENT', payload: addedDocument})
      console.log(addedDocument)
    } catch (error) {
      dispatchisnotcancelled({type:'ERROR', payload:error.message})
      console.log(error)
  }
};
  // delete a document
	const deleteDocument = async(id) => {
		dispatch({ type: 'IS_PENDING' })
		try {
			await res.doc(id).delete()
			dispatchisnotcancelled({ type: 'DELETED_DOCUMENT' })
			
		} catch (error) {
			console.log(error)
			dispatchisnotcancelled({type:'ERROR', payload: 'Could not delete'})
		}
	};


// cleanup function
useEffect(() => {
  return () => setIscancelled(true);
}, []);

return { response, addDocument, deleteDocument };
};

