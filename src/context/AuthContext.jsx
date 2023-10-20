import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,

} from "firebase/auth";
import { auth } from "../firebase";

import { addDoc, collection,  doc, setDoc, getDoc } from "firebase/firestore";
import { UserId } from "./Context";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
const navigate = useNavigate()
const [sudoId, setSudoId] = useState(localStorage.getItem('sudoId') || {})
const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '')
  //const sudoId = UserId() 
  const [isPending, setIsPending] = useState()

 const createUser = (email, password) => {

  return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = async (userObj) => {
    const loggedUser = userObj
    console.log(userObj)
    navigate('/dashboard')
    setUser(userObj)
const userUid = userObj.uid
    const docRef = doc(db, "userInfo", userUid);
    const docSnap = await getDoc(docRef);
    console.log(userUid)
    if (docSnap.exists()) {
      setSudoId(docSnap.data())
      
    }} 




  const login = async (email, password) => {
    

   signInWithEmailAndPassword(auth, email, password).then(async (userCred) => {
    const loggedUser = userCred.user
  
    setUser(userCred.user)
const userUid = userCred.user.uid
    const docRef = doc(db, "userInfo", userUid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setSudoId(docSnap.data());
      localStorage.setItem('userSudoId', docSnap.data().sudoUid);
      const userSudoId = docSnap.data().sudoUid
      const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZWYwOTRhNzU0YTY1YTM3MGQ0YWUiLCJlbWFpbEFkZHJlc3MiOiJ5b3VuZ3N0aW1keUB5YWhvby5jb20iLCJqdGkiOiI2NTJhOWNjYWJmY2NiOGQ2OTA2ZTFlZGUiLCJtZW1iZXJzaGlwIjp7Il9pZCI6IjY0ZjFkOGQ3YWVkOTFmOTMwMmNhZDdmYyIsImJ1c2luZXNzIjp7Il9pZCI6IjY0ZjFkOGQ3YWVkOTFmOTMwMmNhZDdmOSIsIm5hbWUiOiJLTlMgQ0FSRCBTT0xVVElPTiBMVEQiLCJpc0FwcHJvdmVkIjp0cnVlfSwidXNlciI6IjY0Y2NlZjA5NGE3NTRhNjVhMzcwZDRhZSIsInJvbGUiOiJBUElLZXkifSwiaWF0IjoxNjk3MjkxNDY2LCJleHAiOjE3Mjg4NDkwNjZ9.6dDwuzw6T3YmvbvrpnFFDRAqa1vpYd5Bbn2ySadVkU8'
          }
        };
        
       
          fetch(`https://api.sandbox.sudo.cards/customers/${userSudoId}`, options)
          .then((response) => {
              return response.json()})
          .then((response) => {
              setIsPending(false)
              console.log(response.data);
              localStorage.setItem('firstName', response.data.individual.firstName);
              setFirstName(response.data.individual.firstName)
           
          .catch(err => console.error(err));
          setIsPending(false)}
          )
      
      navigate('/dashboard')
      
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      navigate('/profile-form')
    }

   }
  
   )

  }



  const logout = () => {
    localStorage.removeItem('userSudoId');
    localStorage.removeItem('firstName');
    setFirstName('')
    setUser({})
     signOut(auth)
  }

useEffect(() => {

  const storedSudoId = localStorage.getItem('sudoId');
  const storedFirstName = localStorage.getItem('firstName');

  if (storedFirstName) setFirstName(storedFirstName);

  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser)
    setUser(currentUser)
  })
  return () => {
    unsubscribe();
  }

}, [])

  return (
    <UserContext.Provider value={{createUser, user, logout, login, updateUser, sudoId, firstName}}>{children}</UserContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(UserContext);
};
