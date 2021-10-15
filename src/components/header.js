import { useContext } from "react";
import { Link } from "react-router-dom";
import FirebaseContext  from '../context/firebase';
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes"

export default function Header() {
    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(UserContext); 
        
    return (
        <header className="sticky top-0 z-50 w-full border-b border-indigo-300 h-14 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-300 ...  mb-8 px-2 sm:px-0">
            <div className="container mx-auto max-w-screen-lg h-full">
                <div className="flex justify-between h-full">
                    <div className="text-indigo-50 text-center border-r border-indigo-300 flex items-center align-items cursor-pointer">
                        <h1 className="flex px-3 uppercase tracking-wider text-xl font-bold justify-center w-full">
                            <Link to={ROUTES.DASHBOARD}>
                                Razum
                            </Link>   
                        </h1>
                    </div>
                    <div className="text-white text-center flex items-center space-x-6 align-items">
                        { user ? (
                            <>
                                <Link to={ROUTES.DASHBOARD} aria-label="dashboard">
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    class="h-6 w-6" viewBox="0 0 20 20" fill="#eef2ff">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                </Link>
                                <button
                                    type="button"
                                    className="text-lg text-white h-8 mr-1 px-1 border-solid inline-flex space-x-3 w-auto font-medium tracking-wide"
                                    onClick={() => firebase.auth().signOut()}
                                >  
                                    {/* <span>post</span> */}
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="21" height="30" viewBox="0 0 24 24" 
                                        fill="none" stroke="#e0e7ff" stroke-width="2.5" 
                                        stroke-linecap="butt" stroke-linejoin="arcs">
                                        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34">
                                        </path>
                                        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2">
                                        </polygon>
                                    </svg>
                                </button>
                                <div className="flex items-center cursor-pointer">
                                    <Link to={`./p/${user.displayName}`}>
                                        <img 
                                            className={"rounded-full bg-black-200 h-7 w-7 flex"}
                                            src={`/images/avatars/${user.displayName}.jpg`}
                                            alt={`${user.displayName} profile`}
                                        />
                                    </Link>
                                </div>                         
                                <button
                                    type="button"
                                    className="bg-none"
                                    //Sign out
                                    onClick={() => firebase.auth().signOut()}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            firebase.auth().signOut();
                                        } //
                                    }}
                                >   
                                    <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    class="h-5 w-5" viewBox="0 0 20 20" fill="#e0e7ff">
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                                    </svg> 
                                </button>
                            </>
                        ) : (
                                <p>
                                    <Link to={ROUTES.LOGIN}>
                                        <button
                                            type="button"
                                        >
                                            Sign In
                                        </button>
                                    </Link>
                                    <Link to={ROUTES.SIGN_UP}>
                                        <button
                                            type="button"
                                        >
                                            Sign Up
                                        </button>
                                    </Link>
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>

        </header>
    );
}