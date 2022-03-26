import { createContext, useEffect, useState } from "react";

import {
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    onAuthStateChanged} 
    from "firebase/auth"
import {auth} from "../firebase.config"




export const UserContext = createContext();

export function UserContextProvider(props) {
// The user state variable
    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);
// The useEffect hook is called after the component is rendered
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setCurrentUser(currentUser);
            setLoadingData(false);
        }
        );
        // Clean up the listener when the component is unmounted it returns the methode unsubscribe when the component is unmounte (destroyed)
        return unsubscribe;
    }, []);

    const signUp = (email, psw)=> createUserWithEmailAndPassword(auth, email, psw)
    const signIn = (email, psw)=> signInWithEmailAndPassword(auth, email, psw);
    const signOut = ()=> auth.signOut();

    return (
        <UserContext.Provider value={{signUp, signOut, signIn, currentUser}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}