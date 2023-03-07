import React, { createContext } from 'react';


const AuthContext = createContext();

const authInfo = {}

const UserContext = () => {
    return (
       
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    );
};

export default UserContext;