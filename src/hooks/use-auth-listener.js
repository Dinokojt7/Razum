import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";


export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {            
            if (authUser) {
                //we have user.. we can store the user in Locastorage
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
        } else {
            // we clear ls because we don't have authUser
            localStorage.removeItem('authUser');
            setUser(null);
        }
        });

        return () => listener(); 
    },      [firebase]);    

    return { user };
}