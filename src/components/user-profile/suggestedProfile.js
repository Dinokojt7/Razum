import { useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {updateFollowedUserFollowers, updateLoggedInUserFollowing} from '../../services/firebase';

export default function SuggestedProfile({ 
        profileDocId, 
        userName, 
        profileId, 
        userId,
        loggedInUserDocId 
        }) {
    const [followed, setFollowedUser] = useState(false);

    async function handleFollowUser() {
        setFollowedUser(true);
        await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
        await updateFollowedUserFollowers(profileDocId, userId, false);
    }

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <img
                    className="rounded-full w-8 flex mx-3"
                    src={`/images/avatars/${userName}.png`}
                    alt=""
                />
                <Link to={`/p/${userName}`}>
                    <p className="font-bold text-sm">{userName}</p>

                </Link>
            </div>
            <button
                className="text-sm font-medium"
                type="button"
                onClick={handleFollowUser}
            >
                Follow 
            </button>
        </div>
    ) : null; 
}

SuggestedProfile.propTypes = {
    profileDocId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    profileId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired, 
    loggedInUserDocId: PropTypes.string.isRequired
};