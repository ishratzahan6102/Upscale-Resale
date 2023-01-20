import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();


const Context = ({children}) => {

 // login er por user j logged in eta dekhanor jonno
 const [user, setUser] = useState(null)
 const [loading, setLoading] = useState(true)

 // signup er first kaj
 const createUser = (email, password) => {
     setLoading(true)
     return createUserWithEmailAndPassword( auth, email, password)
 }
 
 // login er first kaj
 const loginUser = (email, password) => {
     setLoading(true)
     return signInWithEmailAndPassword( auth, email, password)
 }


// login with google 
 const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

   // user k logged in rakhar jonno
   const updateUser = (userInfo) =>{
     setLoading(true)
     return updateProfile(auth.currentUser, userInfo)
 }



 // logout korar jonno
 const logOut = () => {
     return signOut(auth)
 }


 useEffect(() => {
     const unsubscrib = onAuthStateChanged(auth, currentUser => {
         console.log("User logged in")
         setUser(currentUser)
         setLoading(false)
     })
         return () => unsubscrib()
 },[])


 const authInfo = {
     createUser,
     loginUser,
     logOut,
     user,
     updateUser,
     googleSignIn,
     loading,
     

 }



    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default Context;