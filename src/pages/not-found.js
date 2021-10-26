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
            <header className="bg-gray-50 sticky top-0 z-50 w-full lg:bg-gradient-to-b from-purple-50 via-purple-100 to-purple-50 h-14 px-4 md:px-0 lg:px-0 mb-8 sm:px-0">
                <div className="container mx-auto max-w-screen-lg h-full">
                    <div className="flex justify-between h-full space-x-24">
                        <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
                            <h1 className="flex px-3 uppercase tracking-wider text-xl font-bold justify-center w-full">
                                <Link to={ROUTES.DASHBOARD}>
                                    Razum
                                </Link>   
                            </h1>
                        </div>
                        <div className="text-white flex justify-end items-center space-x-6">
                            <Link to={ROUTES.DASHBOARD}>
                                <button
                                    className="bg-gray-400 font-medium mr-2 rounded-xl text-sm tracking-wider text-white hover:text-white hover:bg-red-400 transition mt-1 px-2 py-1 lg:px-4"
                                    type="button"
                                >
                                    try again
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </header>
      
            <div className="mx-auto  ">            
                <p className="hidden lg:flex justify-center text-center text-4xl font-bold mb-3 tracking-wide text-gray-700">
                    OOPS... This ain't a fuckup right?
                </p>
                <p className="md:hidden lg:hidden text-center text-4xl font-bold mb-3 tracking-wide text-gray-700">
                    Ugh! It's a fuckup
                </p>
                <p className="hidden lg:flex justify-center text-center text-3xl font-bold mb-3 tracking-wide text-gray-600">
                    Ugh! It's a 404 Not Found Error
                </p>
                <p className="md:hidden lg:hidden text-center text-3xl font-bold mb-3 tracking-wide text-gray-600">
                   404 Not Found 
                </p>
                <p className="text-center text-xl lg:text-2xl font-bold mb-3 tracking-wide text-gray-500">
                    Only One Takeaway
                </p>
                <p className="text-center lg lg:text-xl font-bold mb-3 tracking-wide text-gray-400">
                    Double Check 
                </p>
                <p className="text-center base lg:text-lg font-bold tracking-wide text-gray-300">
                    Your{` `} 
                    <Link to={ROUTES.DASHBOARD} className="text-center text-base font-bold tracking-wide text-red-400">
                        URL
                    </Link>
                </p>
            </div>
            <div className="flex mx-auto justify-center">
                <FourOFour className="" style={{ width: "500px", height: "500px"}}  />
            </div>                   
        </div>
    );
}