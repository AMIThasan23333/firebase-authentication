import React, { Children, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import App from './../../App';
import Apps from '../../Firebase/firebase.init';


export  const AuthContext = createContext();


const auth= getAuth(Apps)

const UserContext = ({children}) => {

    
    
const [user , setUser] = useState({displayNamr :'AMAN '})
const authInfo = {user : user }

const createUser = (email,password) => {

    return createUserWithEmailAndPassword(auth,email, password);
    
}


    return (
       
        <AuthContext.Provider value={authInfo}>
      
      {children}

        </AuthContext.Provider>
    );
};

export default UserContext;