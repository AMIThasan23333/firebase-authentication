import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser } from 'firebase/auth';
import App from './../../App';
import Apps from '../../Firebase/firebase.init';


export  const AuthContext = createContext();


const auth= getAuth(Apps)

const UserContext = ({children}) => {

    


const googleProvider = new GoogleAuthProvider();


    
const [user , setUser] = useState({displayNamr :'AMAN '})
const createUser = (email,password) => {

    return createUserWithEmailAndPassword(auth,email, password);

}

const signIn = (email,password) => {

    return signInWithEmailAndPassword(auth,email,password)
}


   const   logOut = () => {
          return signOut(auth);
   }


   const signInWithGoogle = () => {

    return signInWithPopup(auth, googleProvider);

   }


useEffect(() => {

    onAuthStateChanged(auth, currentUser => {

        setUser(currentUser)
    })
    
  })



const authInfo = {user : user, createUser, signIn,  logOut, signInWithGoogle  }



    return (
       
        <AuthContext.Provider value={authInfo}>
      
      {children}

        </AuthContext.Provider>
    );
};

export default UserContext;