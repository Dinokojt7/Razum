import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserByUserName } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import Header from "../components/header";
import Profile from "../components/profile";

export default function ProfilePage() {
    const { userName } = useParams();
    const [user, setUser] = useState(null);
    const [ userExists ] =  useState(false);
    const history = useHistory();

    useEffect(() => {
        async function checkUserExists() {
            const user = await getUserByUserName(userName);
            if (user.length > 0) {
                setUser(user[0]);
            }   else {                
                history.push(ROUTES.NOT_FOUND);
            }
        }

    checkUserExists();
    }, [userName, history]);

        return user?.userName ? (
            <div className="bg-gray-50 h-screen">
                <Header />
                <div className="mx-auto max-w-screen-lg divide-y-2 divide-gray-400">
                    <div className="gap-10 justify-between ">
                        <Profile user={user} />
                    </div>
                </div>
            </div>
        ) : null;
}