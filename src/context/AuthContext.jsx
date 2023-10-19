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
const [sudoId, setSudoId] = useState({})
  //const sudoId = UserId()

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
    
/*const docRef = doc(db, "userInfo", user.uid);
    const docSnap = await getDoc(docRef);
    console.log(user.uid)
    if (docSnap) {
      console.log(docSnap.data());
  
     
      
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      navigate('/profile-form')
    }

     */

   signInWithEmailAndPassword(auth, email, password).then(async (userCred) => {
    const loggedUser = userCred.user
    navigate('/dashboard')
    setUser(userCred.user)
const userUid = userCred.user.uid
    const docRef = doc(db, "userInfo", userUid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      setSudoId(docSnap.data())
  
      
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      navigate('/profile-form')
    }

   }
  
   )

  }

  const logout = () => {
    return signOut(auth)
  }

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log(currentUser)
    setUser(currentUser)
  })
  return () => {
    unsubscribe();
  }

}, [])

  return (
    <UserContext.Provider value={{createUser, user, logout, login, updateUser, sudoId}}>{children}</UserContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(UserContext);
};
