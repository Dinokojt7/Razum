import PropTypes from  'prop-types';
import Skeleton from 'react-loading-skeleton';
import { useState, useEffect } from 'react';
import useUser from '../../hooks/use-user';
import ReactAvatarEditor from "react-avatar-editor";
import { Link } from 'react-router-dom';
import { isUserFollowingProfile, toggleFollow } from '../../services/firebase';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-jdenticon-sprites';

export default function Header({ 
    fuckupCount, 
    followerCount,
    setFollowerCount,
     profile: { 
         docId: profileDocId, 
         userId: profileUserId, 
         fullName,
         startupName, 
         following = [],
         followers = [],
        userName: profileUserName },
}) {
    
    const { user } = useUser();
    const [isFollowingProfile, setIsFollowingProfile] = useState(false);
    const activeBtnFollow = user.userName && user.userName !== profileUserName;

    const handleToggleFollow = async () => {
        setIsFollowingProfile(isFollowingProfile => !isFollowingProfile);
        setFollowerCount({
            followerCount: isFollowingProfile ? followerCount - 1 : followers.length + 1
        });
        await toggleFollow(isFollowingProfile, user.docId, profileDocId, profileUserId, user.userId);
    };

    //Dice bear avatar
    let svg = createAvatar(style, {
        src: ``,
        seed: 'custom-seed',
        color: ['indigo']
        // ... and other options
      });

    useEffect(() => {
        const isLoggedInUserFollowingProfile = async () => {
            const isFollowing = await isUserFollowingProfile(user.userName, profileUserId);
            setIsFollowingProfile(isFollowing);
        };      
        
        if (user.userName && profileUserId) {
            isLoggedInUserFollowingProfile();
        }

    }, [user.userName, profileUserId]
    
    );
 
    return ( !profileUserName || !fullName ? (
                <Skeleton count={1} height={100} width={280}/>
            ) : (
        <div className="max-w-screen-lg justify-between mx-auto grid border-b border-gray-200 grid-cols-3">
            <div className="container col-span-2">
                <div className="grid grid-cols-2">
                    <div className="container col-span-1 flex justify-start">                
                        <img 
                            className="h-20 w-20 border border-gray-200 flex mt-2 mr-4"                 
                            src={'https://avatars.dicebear.com/api/jdenticon/:seed.svg'}
                            alt={`${user.userName} profile picture`}
                        />
                        <div className="container col-span-1 pr-3 mt-0">
                            <p className="font-bold text-gray-800 text-lg">{fullName} </p>
                            <p className="font-bold text-gray-700 text-sm tracking-wide">Founder {startupName}</p>
                            <p className="font-bold text-gray-600 pt-2 text-xs tracking-wide">Fuckups passed</p>
                            <p className="font-bold text-gray-600 text-xs tracking-wide">{followerCount} found {profileUserName}'s fuckups useful</p>            
                        </div>
                    </div>                    
                </div>
            </div>
            <div className="flex justify-end">
                <div className="">
                    <div>                    
                        <button 
                            className="bg-gradient-to-r from-purple-100 to-purple-100 border border-purple-200 flex-grow-none mt-3 ml-0  h-6 rounded">
                            <p className="font-medium text-gray-800 text-sm tracking-wide px-5">{followerCount} {followerCount === 1 ? `Follower  ` : `Followers`}</p>                       
                        </button>
                    </div>
                    <div>
                        <button 
                            className="bg-gradient-to-r from-indigo-100 to-purple-100 border border-purple-200 mt-3 ml-0 h-6 rounded mx-auto">
                            <p className="font-medium text-gray-800 text-sm tracking-wide px-5">{following.length} Following</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="container col-span-3 mt-3 mr-4 mb-4">
                <div className="grid grid-cols-2">
                    <div className="flex-grow-none ml-0  mt-2">
                        <button className="bg-gradient-to-b from-indigo-500 to-purple-600 ... mx-auto mt-1 ml-2 h-6 rounded">
                            <p className="font-semibold text-gray-50 mx-0 text-sm tracking-wide px-1">My Takeaways</p>
                        </button>                    
                            {activeBtnFollow && (
                            <button 
                            className="bg-gradient-to-r from-purple-100 to-purple-100 border border-purple-200 flex-grow-none h-6 rounded
                            font-medium text-gray-800 text-sm tracking-wide px-5  mx-auto mt-1 ml-2"
                                type="button"
                                onClick={handleToggleFollow}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleToggleFollow();
                                    }
                                }}
                            >   
                                {isFollowingProfile ? 'Following' : 'Follow'}                        
                            </button>
                            )}
                            {!activeBtnFollow && (
                            <button 
                                className="bg-gradient-to-r from-purple-100 to-purple-100 border border-purple-200 flex-grow-none h-6 rounded
                                font-medium text-gray-800 text-sm tracking-wide px-5  mx-auto mt-1 ml-2"                        
                            >   
                                <p>Saved</p>                       
                            </button>
                            )}                    
                    </div>                    
                </div>            
            </div>
        </div>    
        ) 
)}


Header.propTypes = {
    fuckupCount: PropTypes.number.isRequired,
    followerCount: PropTypes.number.isRequired,
    setFollowerCount: PropTypes.func.isRequired,
    profile: PropTypes.shape({
        docId: PropTypes.string,
        userId: PropTypes.string,
        fullName: PropTypes.string,
        startupName: PropTypes.string,
        userName: PropTypes.string,
        following: PropTypes.array,
        followers  : PropTypes.array
    }).isRequired
};


