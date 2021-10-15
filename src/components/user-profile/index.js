import React from 'react';
import useUser from '../../hooks/use-user';
import Suggestions from './gauge-chart';
import Profile from './Profile';

export default function BottomSidebar() {
    const { 
        user: {docId = '', userName, fullName, userId, following}
    } = useUser();
    
    return (        
        <div className="container col-span-1">
            <Profile userName= {userName} fullName={fullName}/>                
            <Suggestions userId= {userId} following={following} loggedInUserDocId={docId} />
        </div>        
    );
}