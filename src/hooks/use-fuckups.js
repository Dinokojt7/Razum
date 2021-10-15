import { useState, useEffect, useContext } from "react"
import UserContext from "../context/user"
import { getFuckups, getUserByUserId } from "../services/firebase";

export default function useFuckups() {
    const[fuckups, setFuckups] = useState(null);
    const {
        user: { uid: userId = ''}
    } = useContext(UserContext);

    useEffect(() => {
        async function getTimeLineFuckups() {
            const [{following}] = await getUserByUserId(userId);
            let followedUserFuckups = [];
            
            if (following.length > 0) {
                followedUserFuckups = await getFuckups(userId, following);
            }

            //re-arrange fuckups to be newest fuckups first by 
            followedUserFuckups.sort((a, b) => b.dateCreated - a.dateCreated);
            setFuckups(followedUserFuckups);
        }

    getTimeLineFuckups()
    }, [userId]);    

    return { fuckups };
}