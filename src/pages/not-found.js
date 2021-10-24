import { useEffect } from 'react';
import Header from '../components/header';
import {ReactComponent as FourOFour} from './not_found.svg';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function NotFound() {
    useEffect(() => {
        document.title = 'Razum'
    }, []);

    return (
        <div className="bg-gray-background">       
            <Header />    
            <div className="mx-auto  ">            
                <p className="text-center text-2xl font-bold tracking-wide text-purple-900">
                    Oops! Page not Found.
                </p>
            </div>
            <div className="flex mx-auto justify-center">
                <FourOFour className="" style={{ width: "700px", height: "800px"}}  />
            </div>
            <div className="mt-0"></div>       
        </div>
    );
}