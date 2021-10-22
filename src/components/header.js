import { createRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import FirebaseContext  from '../context/firebase';
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import { createPopper } from "@popperjs/core";


export default function Header() {
    const [showModal, setShowModal] = useState(false);  

    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(UserContext);
    
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] =useState(false);
    const btnDropdownRef = createRef();
    const popoverDropdownRef = createRef();

    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };

    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    //bg colors
        
    return (
        <header className="sticky top-0 z-50 w-full border-b border-indigo-500 h-14 bg-gradient-to-r from-indigo-800 via-purple-500 to-purple-800 ...  mb-8 px-2 sm:px-0">
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
                                    className="text-lg  h-8  border-solid inline-flex space-x-3 font-medium"
                                    onClick={() => setShowModal(true)}
                                >                                     
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
                                                                
                                {showModal ? (
                                    <div className="flex h-screen justify-center items-center">
                                        <div className="justify-end items-top pt-8 min-w-full flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                        >
                                            <div className="relative my-6 mx-0 min-w-3/4 ml-0" style={{ minWidth: "35rem" }}>
                                            {/*content*/}
                                                <div className="border-0 rounded shadow-lg relative ml-0 flex flex-col full bg-white outline-none focus:outline-none">
                                                    {/*header*/}
                                                    <div className="flex items-start justify-end py-3 px-8 border-b border-solid border-blueGray-200 rounded">                                                        
                                                        <img
                                                            src={`/images/avatars/Tiisetso.jpg`}
                                                            className="absolute top-0 left-0 ml-4 w-9 h-9 mt-1 rounded-full"
                                                        />
                                                        <button
                                                            className="border-b border-puple-400 text-indigo-400"
                                                            onClick={() => setShowModal(false)}                                                        >
                                                            <span className="text-gray-500 border border-solid rounded-2xl border-Gray-400 text-sm block outline-none focus:outline-none pt-0">
                                                            ×
                                                            </span>
                                                        </button>
                                                    </div>
                                                    {/*body*/}
                                                    <div className="relative absolute pt-3 pl-5">                                                        
                                                        <textarea
                                                            className="bg-transparent border-b border-indigo-200 pt-0 w-full text-black text-base outline-none"
                                                            placeholder="Post a new fuckup"
                                                            rows="2"
                                                        ></textarea>                                                    
                                                    </div>
                                                    <div className="relative absolute pt-3 pl-5">                                                        
                                                        <textarea
                                                            className="bg-transparent border-b border-indigo-200 pt-3 w-full text-black text-base outline-none"
                                                            placeholder="Takeaway"
                                                            rows="3"
                                                        ></textarea>                                                    
                                                    </div>
                                                    <div className="relative absolute pt-3 pl-5">                                                        
                                                        <textarea
                                                            className="bg-transparent border-b border-indigo-200 pt-3 w-full text-black text-base outline-none"
                                                            placeholder="Full story"
                                                            rows="3"
                                                        ></textarea>                                                    
                                                    </div>
                                                    {/*footer*/}
                                                    <div className="flex items-center justify-end py-1 px-6 border-t border-solid border-gray-200 rounded-b">
                                                    <button
                                                        className="text-gray-500 background-transparent font-medium uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Save
                                                    </button>
                                                    <button
                                                        className="transform rotate-90 bg-gradient-to-r from-indigo-200 to-purple-200 text-gray-600 border-solid border-purple-200 active:bg-emerald-600 font-medium uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 tracking-wider"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        <svg 
                                                            xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" 
                                                            viewBox="0 0 24 21" stroke="currentColor">
                                                            <path 
                                                                stroke-linecap="round" stroke-linejoin="round" 
                                                                stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                                                            />
                                                        </svg>
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </div>
                                ) : null}
                                
                                <div className="flex items-center cursor-pointer">
                                    <Link to={`./p/${user.displayName}`}>
                                        <img 
                                            className={"rounded-full bg-black-200 h-7 w-7 flex"}
                                            src={`/images/avatars/Tiisetso.jpg`}
                                            alt={`${user.displayName} profile`}
                                        />
                                    </Link>
                                </div>                         
                                <button
                                    type="button"
                                    className="text-lg border-solid space-x-3 font-medium"
                                    ref={btnDropdownRef}
                                    onClick={() => {
                                        dropdownPopoverShow
                                        ? closeDropdownPopover()
                                        : openDropdownPopover();
                                    }}
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        class="h-5 w-5" viewBox="0 0 20 20" fill="#e0e7ff">
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                                    </svg> 
                                </button> 
                                <div className="flex h-screen justify-center items-center">
                                    <div className={
                                            (dropdownPopoverShow ? "block " : "hidden ")  +
                                            "bg-white text-base z-50 fixed float-left mt-40 pb-2 list-none text-left rounded shadow-lg"
                                        }
                                        style={{ minWidth: "25rem" }}
                                    >
                                        <button
                                                type="button"
                                                className={
                                                    "flex text-sm py-2 hover:bg-indigo-400 hover:text-white w-full px-1 text-gray-600 font-normal " }
                                                //Sign out
                                                onClick={e => e.preventDefault()}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        firebase.auth().signOut();
                                                    } 
                                                }}
                                            >
                                                <svg
                                                    className="pt-1" 
                                                    xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
                                                    viewBox="0 0 24 24" fill="none" stroke="#4B5563" 
                                                    stroke-width="2.0" stroke-linecap="round" 
                                                    stroke-linejoin="round">
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                                </svg>
                                                <p className="px-1">Settings</p>                                        
                                            </button>
                                        <a
                                            href="#pablo"
                                            className={
                                            "flex text-sm text-gray-600 py-2 hover:bg-indigo-400 hover:text-white w-full px-7 font-normal bg-transparent border border-solid border-t-0 border-blueGray-800"                   
                                            }
                                            onClick={e => e.preventDefault()}
                                        >
                                            Media
                                        </a>
                                        <div className="my-0">
                                            <button
                                                type="button"
                                                className={
                                                    "flex text-sm py-0 hover:bg-indigo-400 hover:text-white w-full px-4 text-gray-600 font-normal " }
                                                //Sign out
                                                onClick={() => firebase.auth().signOut()}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        firebase.auth().signOut();
                                                    } 
                                                }}
                                            >
                                                <p className="px-3">Logout</p>   
                                                <svg
                                                    className="pt-1" 
                                                    xmlns="http://www.w3.org/2000/svg" width="18" 
                                                    height="18" viewBox="0 0 24 24" fill="none" 
                                                    stroke="#4B5563" stroke-width="2.5" stroke-linecap="round" 
                                                    stroke-linejoin="round"><path d="M16 17l5-5-5-5M19.8 12H9M10 3H4v18h6"/>
                                                </svg>                                        
                                            </button>
                                        </div>
                                    </div>
                                </div>
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

