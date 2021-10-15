import { useEffect } from 'react';
import * as ROUTES from '../constants/routes';

export default function NotFound() {
    useEffect(() => {
        document.title = 'Not Found - Razum'
    }, []);

    return (
        <nav class="sticky w-full h-auto bg-gradient-to-r from-indigo-700 ... px-2 sm:px-0">            
            <div className="mx-auto max-w-screen-lg">
                <p className="text-center text-2xl text-black">Not Found</p>
            </div>     
        </nav>
    );
}