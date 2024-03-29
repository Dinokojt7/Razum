import { createRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import FirebaseContext  from '../context/firebase';
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import Circles from '../components/circles';
import { createPopper } from "@popperjs/core";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-jdenticon-sprites';

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [newFuckup, setNewFuckup] = useState('');
    const [takeAway, setTakeAway] = useState('');
    const [fullStory, setFullStory] = useState(''); 
    
    const [error, setError] = useState('');
    const isInvalid = newFuckup === '' || takeAway === '' || fullStory === '';

    const { firebase } = useContext(FirebaseContext);
    const { user } = useContext(UserContext);
    
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] =useState(false);
    const btnDropdownRef = createRef();
    const popoverDropdownRef = createRef();

    const [loading, setLoading] = useState(false);

    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };

    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    
    //Dice bear avatar
    let svg = createAvatar(style, {
        seed: 'custom-seed',
        // ... and other options
      });

    //Post new fuckup
    const handleNewFuckup = async (event) => {
        event.preventDefault();
        setLoading(true);
        
        // firebase fuckup collection (create a document)
        await firebase
        .firestore()
        .collection('fuckups') 
        .add({
            // fuckupId: createdUserResult.user.uid, 
            body: newFuckup,
            takeAway: takeAway,
            fullStory: fullStory,
            dateCreated: Date.now(),
            comments: [],
            foundHelpful: [],
            beenThere: [],
            userId: user.uid,
            userHandle: user.displayName 
        })
            .catch(err => {
            setError(error.message);
        });
        setShowModal(false);
        setLoading(false);
        setNewFuckup('');
        setTakeAway('');
        setFullStory('');        
    };
        
    return (
        <header className="sticky top-0 z-50 w-full border-indigo-500 h-14 bg-purple-800 px-4 md:px-0 lg:px-0 mb-8 sm:px-0">
                <div className="container sticky top-0 mx-auto max-w-screen-lg h-full">
                    <div className="flex justify-between h-full space-x-24">
                        <div className="text-gray-100 lg:text-indigo-50 text-center lg:border-r border-indigo-300 flex items-center align-items cursor-pointer">
                            <h1 className="flex px-3 uppercase tracking-wider text-xl font-bold justify-center w-full">
                                <Link to={ROUTES.DASHBOARD}>
                                    Razum
                                </Link>   
                            </h1>
                        </div>
                        <div className="text-white  flex justify-end items-center space-x-6">
                            { user ? (
                                <>
                                    <Link to={ROUTES.DASHBOARD} 
                                        aria-label="dashboard"
                                        className="hidden lg:flex"
                                    >
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
                                        <div className="flex justify-center items-center">
                                            <div className="justify-end items-top pt-8 min-w-full flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                            >
                                                <div className="relative my-6 mx-0 min-w-3/4 ml-0" style={{ minWidth: "42rem"}}>
                                                {/*content*/}
                                                    <div className="bg-opacity-95 bg-gray-100  rounded shadow-lg relative ml-0 flex flex-col full border border-gray-400 outline-none focus:outline-none">
                                                        {/*header*/}
                                                        <div className="flex items-end justify-end py-1 px-8 border-b border-solid border-blueGray-200 rounded">
                                                            <button
                                                                className="border-b border-puple-400 text-indigo-400"
                                                                onClick={() => setShowModal(false)}                                                        
                                                            >
                                                                <span className="text-gray-500 border border-solid rounded-2xl border-gray-300 text-sm block outline-none focus:outline-none pt-0">
                                                                ×
                                                                </span>
                                                            </button>
                                                        </div>
                                                        {/*body*/}
                                                                        
                                                        <form onSubmit={handleNewFuckup} method="POST">
                                                            <div className="relative absolute bg-opacity-90 bg-gray-100  flex space-x-12 pt-3 my-0 mr-4 pl-3">
                                                                <p className="bg-gradient-to-b from-purple-500 via-purple-700 to-purple-600 to-purple-500 flex justify-center rounded font-medium text-white text-sm h-7 w-20 pt-1 py-2 "
                                                                    style={{ minWidth: "6rem" }}
                                                                >
                                                                    Fuckup
                                                                </p>                                                        
                                                                <textarea
                                                                    className="bg-opacity-60 bg-gray-300 rounded pl-2 pt-1 w-full text-black text-sm resize-none outline-none"
                                                                    placeholder=""
                                                                    autoComplete="off"
                                                                    aria-label="Post a new fuckup"
                                                                    rows="2"
                                                                    onChange={({ target }) => setNewFuckup(target.value)} 
                                                                    value={newFuckup}
                                                                ></textarea>                                                    
                                                            </div>
                                                            <div className="relative absolute flex space-x-12 pt-1 my-4 mr-4 pl-3">
                                                                <p className="bg-gradient-to-b from-purple-500 via-purple-700 to-purple-600 flex justify-center rounded font-medium text-white text-sm h-7 w-20 pt-1 py-2 "
                                                                    style={{ minWidth: "6rem" }}
                                                                >
                                                                    Takeaway
                                                                </p>                                                        
                                                                <textarea
                                                                    className="bg-opacity-60 bg-gray-300 rounded pl-2 pt-2 w-full text-black text-sm outline-none"
                                                                    placeholder=""
                                                                    autoComplete="off"
                                                                    aria-label="Takeaway"
                                                                    rows="3"
                                                                    onChange={({ target }) => setTakeAway(target.value)} 
                                                                    value={takeAway}
                                                                ></textarea>                                                    
                                                            </div>
                                                            <div className="relative absolute flex space-x-12 pt-1 my-4 mr-4 pl-3">
                                                                <p className="bg-gradient-to-b from-purple-500 via-purple-700 to-purple-600 flex justify-center rounded font-medium text-white text-sm h-7 w-20 pt-1 py-2 "
                                                                    style={{ minWidth: "6rem" }}
                                                                >
                                                                    Full story
                                                                </p>                                                        
                                                                <textarea
                                                                    className="bg-opacity-60 bg-gray-300 rounded pl-2 pt-2 w-full text-black text-sm outline-none"
                                                                    placeholder=""
                                                                    autoComplete="off"
                                                                    aria-label="Full story"
                                                                    rows="3"
                                                                    onChange={({ target }) => setFullStory(target.value)} 
                                                                    value={fullStory}
                                                                ></textarea>                                                    
                                                            </div>
                                                            {/*footer*/}
                                                            <div className="grid bg-opacity-90 bg-gray-100 flex pt-2 pb-4 grid-cols-2">
                                                                <div className="col-span-1 card bordered pl-4 pt-1 flex justify-center">
                                                                    <div className="form-control mr-4">
                                                                        <label class="cursor-pointer label">      
                                                                            <span class="label-text text-purple-900 antialiased tracking-wide text-sm font-semibold px-2"> Share with others </span> 
                                                                            <input type="checkbox" class="border-purple-500 checked:bg-purple-600 checked:border-purple-500 " value=""></input>
                                                                        </label>
                                                                    </div>
                                                                    <div className="form-control ">
                                                                        <label class="cursor-pointer label">      
                                                                            <span class="label-text text-purple-900 tracking-wide antialiased text-sm font-semibold px-2"> Show my name </span> 
                                                                            <input type="checkbox" class="border-gray-300 checked:bg-purple-600 checked:border-purple-500" value=""></input>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-span-1">
                                                                    <div className="flex items-center justify-end py-1 px-6 rounded-b">
                                                                        <button
                                                                            className="bg-gray-100 text-gray-900 border border-gray-300 rounded font-medium px-6 py-auto h-6 text-sm outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                                                                            type="button"
                                                                            onClick={() => setShowModal(false)}
                                                                        >
                                                                            Save
                                                                        </button>
                                                                        <button
                                                                            disabled={isInvalid}
                                                                            className={`bg-gradient-to-b from-indigo-500 via-purple-700 to-purple-600 antialiased text-white border-solid border-purple-200 font-normal text-sm px-6 py-auto h-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 
                                                                            ${isInvalid && 'opacity-80'} ease-linear transition-all duration-150 tracking-wider`}
                                                                            type="submit"
                                                                            onClick={handleNewFuckup}
                                                                        > 
                                                                            {loading ? (<Circles />) : (<span>Post</span>)}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>    
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                    
                                    <div className="flex items-center hidden lg:flex cursor-pointer">
                                        <Link to={`./p/${user.displayName}`}>
                                            <img 
                                                className={"rounded-full bg-black-200 h-7 w-7 flex"}
                                                src={`https://avatars.dicebear.com/api/jdenticon/:seed.svg`}
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
                                                "bg-white text-base z-50 fixed float-left mt-40 lg:mt-40 pb-2 list-none text-left rounded shadow-lg"
                                            }
                                            style={{ minWidth: "25rem" }}
                                        > 
                                            <button
                                                    type="button"
                                                    className={
                                                        "flex text-sm py-1 hover:bg-indigo-400 hover:text-white w-full px-1 text-gray-600 font-normal " }
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
                                                    <p className="px-3 h-8 pt-2">Logout</p>   
                                                    <svg
                                                        className="pt-3" 
                                                        xmlns="http://www.w3.org/2000/svg" width="18" 
                                                        height="25" viewBox="0 0 24 24" fill="none" 
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
                                                className="bg-indigo-50 font-medium mr-2 rounded-xl text-sm bg-white tracking-wider text-purple-900 hover:bg-indigo-100 transition mt-1 py-1 px-4"
                                                type="button"
                                            >
                                                Sign In
                                            </button>
                                        </Link>
                                        <Link to={ROUTES.SIGN_UP}>
                                            <button
                                                className="bg-gray-400 font-medium mr-2 rounded-xl text-sm bg-white tracking-wider text-white hover:bg-indigo-100 hover:text-purple-900 transition mt-1 py-1 px-4"
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

