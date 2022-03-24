import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();



export function UserContextProvider(props) {
    const [modal, setmodal] = useState({
        signUpModal: false,
        signInModal: false
    })
    return (
        <UserContext.Provider>
            {props.children}
        </UserContext.Provider>
    )
}