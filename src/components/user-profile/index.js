import React from 'react';
import useUser from '../../hooks/use-user';
import Suggestions from '../user-profile/gauge-chart';

export default function BottomSidebar() {
    const { 
        user: {docId = '', userId, following}
    } = useUser();
    
    return (        
        <div className="container col-span-1">               
            <Suggestions userId= {userId} following={following} loggedInUserDocId={docId} />
        </div>        
    );
}