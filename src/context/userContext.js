import { createContext, useEffect, useState } from "react";

import {
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    onAuthStateChanged} 
    from "firebase/auth"
import {auth} from "../firebase.config"




export const UserContext = createContext();

export function UserContextProvider(props) {

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    const signUp = (email, psw)=> createUserWithEmailAndPassword(auth, email, psw)
    const signIn = (email, psw)=> signInWithEmailAndPassword(auth, email, psw);
    const signOut = ()=> auth.signOut();

    return (
        <UserContext.Provider value={{signUp, signOut, signIn}}>
            {props.children}
        </UserContext.Provider>
    )
}