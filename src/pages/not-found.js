import { useEffect } from 'react';
import Header from '../components/header';
import * as ROUTES from '../constants/routes';

export default function NotFound() {
    useEffect(() => {
        document.title = 'Razum'
    }, []);

    return (
        <div className="bg-gray-background">       
            <Header />     
            <div className="mx-auto max-w-screen-lg ">            
                <p className="text-center text-2xl font-bold tracking-wide text-purple-900">
                    Oops! Page not Found.
                </p>
            </div>
            <img
                className="self-center mx-auto"
                height="150"
                width="800" 
                src="../images/avatars/404.jpg"
            />         
        </div>
    );
}