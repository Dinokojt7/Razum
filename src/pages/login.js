import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from "../context/firebase";
import * as ROUTES from '../constants/routes';

export default function Login() {     
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState ('');
    const [password, setPassword] = useState(''); 

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
          await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
          history.push(ROUTES.DASHBOARD);
        } catch (error) {
          setEmailAddress('');
          setPassword('');
          setError(error.message);
        }
      };

    useEffect(() => {
        document.title = 'Razum';
    }, []);
                                   
    
   return (
    <div class="w-full space-y-0 h-screen">   
    <nav class="sticky w-full h-auto bg-gradient-to-r from-white via-purple-500 to-indigo-700 ... px-2 sm:px-0">
        <div class="container flex justify-between py-1 mx-auto">
            <label class="uppercase text-lg font-bold tracking-wider text-purple-900">
                razum
            </label>
            <button
            disabled={isInvalid}
            type="submit" 
            className="font-medium mr-6 rounded-xl text-sm bg-white tracking-wider text-indigo-700 hover:text-indigo-800 hover:bg-white transition">
                 <Link to={ROUTES.SIGN_UP} class='block px-4 '>
                    Sign Up
                 </Link>
            </button>
        </div>
    </nav>
        <div className=" bg-gray-70 flex mx-auto w-full items-center h-screen">                   
            <div className=" container rounded-full flex  mx-auto w-full">
            <div className="bg-white mx-6 m-0 md:p-0 my-20 w-full py-10 p-0  items-center shadow-2xl rounded-b-lg">
                    <div class="h-40 flex items-center flex-wrap mb-0 space-x-3 ml-3 p-0 items-stretch content-start ...">
                        <div class="w-auto h-auto">                                
                            <div class="flex-1  h-full">
                                <div class="flex  flex-1 h-full p-2 bg-white text-yellow shadow-xl rounded-full">                                
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 hover:text-red transition duration-100 cursor-pointer" viewBox="0 0 24 24" color="vilet" fill="violet" currentColor stroke="violet">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>                               
                                
                                </div>
                            </div>
                        </div>
                        <div class="w-auto h-auto">                                
                            <div class="flex-1 h-full">
                                <div class="flex  justify-center flex-1 h-full p-2 bg-white text-sm text-purple-600 shadow-xl rounded-full">                               
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  text-red-600 hover:text-red-600 transition duration-100 cursor-pointer" viewBox="-1 -1 22 24"  fill="currentColor">
                                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                        </svg>                            
                                </div>
                            </div>
                        </div>                
                        <div class="w-auto h-auto">                                 
                            <div class="flex-1 h-full">
                                <div class="flex  justify-center flex-1 h-full p-2 bg-white text-purple-600 shadow-xl rounded-full">                              
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" color="green" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>                                               
                                
                                </div>
                            </div>
                        </div>
                        <div class="w-auto h-auto">                                
                            <div class="flex-1 h-full">
                                <div class="flex  justify-center flex-1 h-full p-2 bg-white text-purple-600 shadow-xl rounded-full">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 hover:text-red transition duration-100 cursor-pointer" viewBox="0 0 21 22" color="orange" fill="orange" currentColor stroke="orange">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>                                                               
                                
                                </div>
                            </div>
                        </div>
                        <div class="w-auto h-auto">                                
                            <div class="flex-1 h-full">
                                <div class="flex  justify-center flex-1 h-full p-2 bg-white text-blue-500 shadow-xl rounded-full">
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                
                                </div>
                            </div>
                        </div>
                        <div class="w-auto h-auto">                                
                            <div class="flex-1 h-full">
                                <div class="flex  justify-center flex-1 h-full p-2 bg-white text-gold-900 shadow-xl rounded-full">
                                    <div class="relative"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="1" stroke-linecap="round" color="red" stroke-linejoin="round">
                                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                    </svg>                                                               
                            
                                </div>
                            </div>
                        </div>
                    </div>
                    
                        <div class="flex items-center rounded-full h-1 w-full h-0 pt-0 justify-center py-10">
                            <img class="w-20 py-0  rounded-full" src="https://freesvg.org/storage/img/thumb/1577291583facemask-asianman.png" alt="FS" />
                        </div>
                        <div className="items-center justify-center flex flex-wrap py-0 h-1">
                            <h2 class="text-black font-medium text-xl cursor-pointer">Felipe Satō</h2>                            
                        </div>
                        <div className="items-center justify-center pt-8 flex flex-wrap py-0 h-1">                            
                            <p className="text-xs text-gray-400 ">Founder - Natural Space</p>
                        </div> 
                        <div class="flex py-20 px-3 pt-20  pb-0">
                            <div class="flex space-x-1 p-0 items-center">                                
                                <button
                                    disabled={isInvalid}
                                    type="submit"
                                    className={`bg-indigo-500 pl-3 inline-flex space-x-12 items-center text-white border border-indigo-500  rounded-full text-sm font-medium py-3 px-4
                                    ${isInvalid && 'opacity-80'}`}
                                    >
                                    <span>Follow</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                </button>
                                <div class="flex space-x-1 items-center"></div>
                                <div class="flex space-x-1 items-center"></div>
                                <div class="flex space-x-1 items-center"></div>
                                <button
                                    disabled={isInvalid}
                                    type="submit"
                                    className={`bg-none pl-3 inline-flex space-x-12 items-center text-sm text-gray border border-gray-400 rounded-full  font-medium py-3 px-4
                                    ${isInvalid && 'opacity-80'}`}
                                    >
                                    <span>Message</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#101010" stroke-width="1" stroke-linecap="butt" stroke-linejoin="arcs">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </button>
                            </div>                
                        </div> 
                </div>            
                <div class="bg-white rounded-full  h-20 my-20  w-full   shadow-2xl">            
                    <img class="w-full cursor-pointer rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/10/25/17/19/photographer-3772889__340.jpg" alt="" />
                    <div class="space-y-12">
                        <div class="flex p-4 bg-white rounded-b-lg justify-between shadow-2xl">
                            <div class="flex items-center space-x-2">
                                <img class="w-7 rounded-full" src="https://freesvg.org/storage/img/thumb/1577291583facemask-asianman.png" alt="FS" />
                                <h2 class="text-black font-medium text-sm cursor-pointer">Felipe Satō</h2>
                            </div>
                            <div class="flex space-x-3"> 
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400 hover:text-red-600 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>                            
                        </div>                
                        <div class="flex p-4 bg-white rounded-lg justify-between shadow-2xl">
                            <div class="flex items-center pt-2 space-x-0">
                                <img class="w-10 rounded-full" src="https://fraternitysororitysvg.com/assets/images/products/Afro-Black-Goddess-Portrait-Profile-Bamboo-Hoop-Earrings-Glasses-Sexy-Lips-Woman-png.png" alt="sara" />
                                <div>
                                    <h2 class="text-black font-medium text-sm cursor-pointer">Vera Brezhneva</h2>
                                    <p className="text-xs text-gray-500 pt-1">Cofounder - X-Block</p>
                                </div>
                            </div>
                            <div class="flex space-x-2">
                                <div class="flex space-x-1 items-center">
                                </div>
                                <div class="flex space-x-1 items-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  transition duration-100 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>            
                <div className="bg-white max-w-lg mx-6 md:p-6 my-20 w-full py-1 rounded-lg shadow-2xl">
                    <div class="p-1 text-center pb-14">
                        <h6 class="font-medium text-black text-xl">Login into your account</h6>
                        <p className="text-xs text-gray-400 pt-3">
                            Don't have an account yet?{` `}
                            <Link to={ROUTES.SIGN_UP} className="font-bold  text-purple-700">
                                Create New
                            </Link>
                        </p>
                    </div>

                    {error && <p className="mb-5 text-xs text-red-400">{error}</p>}
                    
                    <form onSubmit={handleLogin} method="POST">
                        <input
                            aria-label="Enter your email address"          
                            type="text"
                            placeholder="Email address"
                            className="text-sm text-gray-base w-full mr-3 h2 py-2 p-1 pl-3 font-base border border-gray-primary rounded-full mb-2"
                            onChange={({ target }) => setEmailAddress(target.value)}
                            value={emailAddress}
                        />
                        <input
                            aria-label="Enter your password"
                            type="password"
                            placeholder="Password"
                            className="text-sm text-gray-base w-full mb-2 mr-3 py-2 p-1 pl-3 font-base border border-gray-primary rounded-full mb-2"
                            onChange={({ target }) => setPassword(target.value)}
                            value={password}
                        />
                        <div class="flex justify-end pb-10">
                            <Link to={ROUTES.SIGN_UP} className="font-medium text-sm text-purple-700 hover:text-indigo-700 mb-6">
                                Forgot your password?
                            </Link>
                        </div>
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-gradient-to-r from-purple-700 to-indigo-600 text-white w-full rounded-full text-sm  p-4  font-medium py-2
                            ${isInvalid && 'opacity-80'}`}
                        >Login
                        </button>
                    </form>                
                </div>          
                
            </div>        
        </div>
    </div>    
    );
};

