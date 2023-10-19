import { createContext, useContext, useState } from "react";
import { addDoc, collection,  doc, setDoc, getDoc } from "firebase/firestore";
import Login from "../pages/login-page";
import App from "../App";
import { auth, db } from "../firebase";
import { UserAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

 const IdContext = createContext()



 const IdContextProvider = ({children}) => {
  
    //const sudoId = useContext(IdContext)
    const {user} = UserAuth();
    console.log(user)
    
    const [sudoId, setSudoId] = useState('')

    const userMe = 'Vicck';
    const navigate = useNavigate()
  
  const addSudoId =  (sudoUid) => {

   /* console.log(user.uid)
    console.log(sudoUid)
  const docRef = addDoc(collection(db, "users"), {sudoUid,

  userId: `${user.uid}`})
  */
 const userUid = user.uid
console.log(userUid)
  const ref = doc(db, "userInfo", userUid)
  const docRef = setDoc(ref, sudoUid)
  
  }

  /* const getUserData = () => {
    const docRef = doc(db, "userInfo", user.uid);
const docSnap = getDoc(docRef);
if (docSnap) {
  console.log(docSnap);
  setSudoId(docRef)
  navigate('/dashboard')
  
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
  navigate('/profile-form')
}
  } */

      
    return (
      <IdContext.Provider value={{userMe, addSudoId, sudoId}}>
       {children}
        </IdContext.Provider>
    );
  };


  export default IdContextProvider;
  export const UserId = () => {
    return useContext(IdContext);
  };
  
