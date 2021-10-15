import React from 'react';
import useUser from "../../hooks/use-user"; 
import Market from '../Home/feed';

export default function Home() {
    const { 
        user: {market}
    } = useUser();
     
    return (        
            <div className="container col-span-2">                
                <Market market={market} />
            </div>        
    );
}