import React from 'react';
import useUser from "../../hooks/use-user";
import Search from './search'; 

export default function Sidebar() {
    const { 
        user: {keyword, setKeyword}
    } = useUser();
     
    return (        
            <div className="container col-span-1 flex justify-end">                
                <Search keyword= {keyword} setKeyword={setKeyword} />
            </div>        
    );
}
