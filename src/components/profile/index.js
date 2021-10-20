import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Fuckups from './fuckups';
import { getUserFuckupsByUserName } from '../../services/firebase';

export default function Profile({user}) {
    const reducer = (state, newState) => ({ ...state, ...newState});
    const initialState = {
        profile: {},
        fuckupsCollection: [],
        followerCount: 0
    }; 

    const [{ profile, fuckupsCollection, followerCount }, dispatch] =
    useReducer(
        reducer, 
        initialState     
    );

    useEffect(() => {
        async function getProfileInfoAndFuckups() {
            const fuckups = await getUserFuckupsByUserName(user.userName);

            dispatch({ profile: user, fuckupsCollection: fuckups, followerCount: user
            .followers.length});
        }
        getProfileInfoAndFuckups();       
    }, [user.userName]);

    return ( 
        <>
            <>
                <Header 
                    fuckupCount={fuckupsCollection ? fuckupsCollection.length : 0}
                    profile={profile}
                    followerCount={followerCount}
                    setFollowerCount={dispatch}
                />
            </>
            <div className="mx-auto max-w-screen-lg divide-y-2 divide-gray-400">
                <div className="grid grid-cols-3 gap-10 justify-between mx-auto max-w-screen-lg">
                    <Fuckups 
                        fuckups={fuckupsCollection}
                        profile={profile} 
                    />
                </div>
                    
            </div>
        </>
    );
}

Profile.propTypes = {
    user: PropTypes.shape({
        dateCreacted: PropTypes.number,
        emailAddress: PropTypes.string.isRequired,
        followers: PropTypes.array.isRequired,
        following: PropTypes.array.isRequired,
        fullName: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        userName: PropTypes.string.isRequired
    }).isRequired
};