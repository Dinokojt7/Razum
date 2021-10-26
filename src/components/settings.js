import { useContext, useState } from 'react';
import FirebaseContext  from '../context/firebase';

export default function Settings() {

    const { firebase } = useContext(FirebaseContext);
    const [dropdownPopoverShow, setDropdownPopoverShow] =useState(false);

    return (
        <div className={
            (dropdownPopoverShow ? "block " : "hidden ")  +
            "bg-white text-base z-50 fixed float-left mt-40 lg:mt-40 pb-2 list-none text-left shadow-lg"
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
    )
}