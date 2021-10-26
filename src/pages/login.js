import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from "../context/firebase";
import * as ROUTES from '../constants/routes';
import Circles from '../components/circles';

export default function Login() {     
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [showModal, setShowModal] = useState(false);
    
    // journal modal props
    const [journalModalShow, setJournalModalShow] =useState(false);

    const [emailAddress, setEmailAddress] = useState ('');
    const [password, setPassword] = useState(''); 

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const [animateTrue, setAnimateTrue] = useState(false);
    
    const showJournalModal = () => {        
        setJournalModalShow(true);
    }    
    
    const hideJournalModal = () => {        
        setJournalModalShow(false);
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        setAnimateTrue(true);
    
        try {
          await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
          history.push(ROUTES.DASHBOARD);
        } catch (error) {
          setEmailAddress('');
          setPassword('');
          setAnimateTrue(false);
          setError(error.message);          
        }
      };

    useEffect(() => {
        document.title = 'Razum';
    }, []);
                                   
    
   return (
        <div class="w-full h-screen px-4 md:px-0 lg:px-0 mb-8 sm:px-0">
            <nav class="sticky top-0 w-full bg-white px-2 md:px-0 lg:px-0 sm:px-0">
                        <div class="container flex justify-between space-x-4 py-1 mx-auto">
                            <label class="flex px-3 uppercase text-xl font-bold tracking-wider text-purple-900">
                                razum
                            </label>
                            <button
                            disabled={isInvalid}
                            type="submit" 
                            className="flex justify-end bg-indigo-50 font-medium mr-2 rounded-xl text-sm bg-white tracking-wider text-indigo-900 hover:bg-indigo-100 transition mt-1 py-1">
                                <Link to={ROUTES.SIGN_UP} class='block px-4 '>
                                    Sign Up
                                </Link>
                            </button>
                        </div>
            </nav>
                    <div className="container bg-gray-70 mx-auto w-full items-center h-screen"> 
                        <div className=" flex justify-center w-full pt-14 mx-auto lg:px-8 md:w-4/5 md:pt-20  lg:w-4/5 lg:pt-20 ">
                            <p className="hidden lg:block text-gray-800 text-center w-full flex font-bold lg:font-semibold text-3xl lg:text-5xl flex items-center">
                                Use obstacles to your advantage
                            </p>
                            <p className="lg:hidden text-gray-500 text-center w-full justify-center flex font-semibold text-4xl flex items-center">
                                Welcome back.
                            </p>
                        </div>
                        <div className=" flex justify-center w-4/5 pt-5 mx-auto px-10">
                            <p className="hidden flex md:flex lg:flex text-gray-600 text-center font-normal text-base items-center mx-auto">
                                Learn From Fuckups With Other Founders
                            </p>
                        </div>

                        <div className=" container flex justify-center mx-auto w-full flex-col md:flex-row lg:flex-row rounded-full">
                            
                            <div className="hidden lg:flex flex-col w-2/5 bg-white mx-auto my-10  py-2  items-center shadow-2xl rounded-b-lg">
                                
                                <div class="h-40 flex items-center flex-wrap mb-0 space-x-2 ml-3 p-0 items-stretch content-start ...">
                                    <div class="w-auto h-auto">                                
                                        <div class="flex-1  h-full">
                                            <buttton 
                                                class="flex flex-1 h-full p-2 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-yellow shadow-xl rounded-full"                                
                                                type="button"
                                                onClick={() => {
                                                    !journalModalShow
                                                    ? showJournalModal()
                                                    : hideJournalModal();
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 hover:text-red transition duration-100 cursor-pointer" viewBox="0 0 24 24" color="vilet" fill="violet" currentColor stroke="violet">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>                               
                                            
                                            </buttton>                                
                                        </div>
                                    </div>
                                    <div class="w-auto h-auto">                                
                                        <div class="flex-1 h-full">
                                            <div class="flex  justify-center flex-1 h-full p-2 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-sm text-purple-600 shadow-xl rounded-full">                               
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  text-red-600 hover:text-red-600 transition duration-100 cursor-pointer" viewBox="-1 -1 22 24"  fill="currentColor">
                                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                                                    </svg>                            
                                            </div>
                                        </div>
                                    </div>                
                                    <div class="w-auto h-auto">                                 
                                        <div class="flex-1 h-full">
                                            <div class="flex  justify-center flex-1 h-full p-2 bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-purple-600 shadow-xl rounded-full">                              
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" color="green" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>                                               
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-auto h-auto">                                
                                        <div class="flex-1 h-full">
                                            <div class="flex  justify-center flex-1 h-full p-2 bg-white text-purple-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-xl rounded-full">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6 hover:text-red transition duration-100 cursor-pointer" viewBox="0 0 21 22" color="orange" fill="orange" currentColor stroke="orange">
                                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                </svg>                                                               
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-auto h-auto">                                
                                        <div class="flex-1 h-full">
                                            <div class="flex  justify-center flex-1 h-full p-2 bg-white text-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-xl rounded-full">
                                            
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-auto h-auto">                                
                                        <div class="flex-1 h-full">
                                            <div class="flex  justify-center flex-1 h-full p-2 bg-white text-gold-900 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-xl rounded-full">
                                                <div class="relative"></div>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="1" stroke-linecap="round" color="red" stroke-linejoin="round">
                                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                                                </svg>                                                               
                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    {journalModalShow ? ( 
                                        <div>
                                            <div class="flex items-center rounded-full h-1 w-full h-0 pt-0 justify-center mt-0 pb-10">
                                                <img class="w-20 py-0  rounded-full" src="https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884_960_720.png" alt="FS" />
                                            </div>
                                            <div className="items-center justify-center flex flex-wrap pt-4 pb-5 h-1">
                                                <h2 class="text-gray-600 flex text-center font-bold text-xl cursor-pointer">Keep a journal of your startup lessons </h2>                            
                                            </div>                                              
                                        </div>
                                    ) : (
                                        <div>
                                            <div class="flex items-center rounded-full h-1 w-full h-0 pt-0 justify-center py-10">
                                                <img class="w-20 py-0  rounded-full" src="https://freesvg.org/storage/img/thumb/1577291583facemask-asianman.png" alt="FS" />
                                            </div>
                                            <div className="items-center justify-center flex flex-wrap h-1">
                                                <h2 class="text-black font-medium text-xl cursor-pointer">Felipe Satō</h2>                            
                                            </div>
                                            <div className="items-center justify-center pt-8 flex flex-wrap py-0 h-1">                            
                                                <p className="text-xs text-gray-400 ">Founder - Natural Space</p>
                                            </div>
                                        </div>
                                    )} 
                                     
                                    <div class="flex px-3 mb-4 mt-1 pt-20 pb-0">
                                        <div class="flex space-x-1 p-0 items-center">                                
                                            <button
                                                disabled={isInvalid}
                                                type="submit"
                                                className={`bg-indigo-500 pl-3 inline-flex space-x-12 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 items-center text-white border border-indigo-500  rounded-full text-sm font-medium py-3 px-4
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
                                                className={`bg-none pl-3 inline-flex space-x-12 items-center text-sm text-gray border border-gray-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full  font-medium py-3 px-4
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
                            
                            <div class="hidden  rounded-full  h-10 my-10 py-1  lg:flex flex-col lg:w-2/5 lg:mx-1 lg:px-4   ">            
                                <img class="w-full cursor-pointer rounded-t-lg" src="https://cdn.pixabay.com/photo/2018/10/25/17/19/photographer-3772889__340.jpg" alt="" />
                                <div class="space-y-12">
                                    <div class="flex p-4 bg-white rounded-b-lg justify-between shadow-2xl">
                                        <div class="flex items-center space-x-2">
                                            <img class="w-7 rounded-full" src="https://freesvg.org/storage/img/thumb/1577291583facemask-asianman.png" alt="FS" />
                                            <h2 class="text-black font-medium text-sm cursor-pointer">Felipe Satō</h2>
                                        </div>
                                        <div class="flex space-x-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"> 
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
                                            <div class="flex space-x-1 items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
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
                                    
                            <div className="bg-white flex justify-center mx-auto flex-col px-4 my-auto w-5/5 h-auto my-0  py-6 md:py-12 lg:py-12 md:flex 
                                md:w-3/5 md:mx-2 md:px-4 lg:flex lg:w-2/5 lg:mx-2 lg:px-4 rounded-lg md:shadow-2xl lg:shadow-2xl">
                                <div class="text-center pb-13">
                                    <h6 class="text-gray-500 font-medium text-xl">Login into your account</h6>
                                    <p className="text-xs text-gray-400 pb-8 pt-3">
                                        Don't have an account yet?{` `}
                                        <Link to={ROUTES.SIGN_UP} className="font-bold text-indigo-500">
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
                                        className="text-sm text-gray-base w-full mr-3 h2 py-3 lg:py-2 p-1 pl-3 font-base border border-gray-primary rounded-full mb-2 focus:outline-none focus:ring-0.5 focus:border-purple-500"
                                        onChange={({ target }) => setEmailAddress(target.value)}
                                        value={emailAddress}
                                    />
                                    <input
                                        aria-label="Enter your password"
                                        type="password"
                                        placeholder="Password"
                                        className="text-sm text-gray-base w-full mb-2 mr-3 py-3 lg:py-2 mt-3 lg:mt-0 p-1 pl-3 font-base border border-gray-primary rounded-full mb-2 focus:outline-none focus:ring-0.5 focus:border-purple-500"
                                        style={{ focus: "ring-2 focus:ring-purple-600"}}
                                        onChange={({ target }) => setPassword(target.value)}
                                        value={password}
                                    />
                                    <div class="flex justify-end pb-10">
                                        <Link to={`https://razum-3a1e6.firebaseapp.com/__/auth/action?mode=action&oobCode=code`} className="font-medium text-xs text-indigo-500 hover:text-indigo-700 mb-6">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <button
                                        disabled={isInvalid}
                                        type="submit"
                                        onClick={handleLogin}
                                        className={`bg-gradient-to-r from-purple-700 to-indigo-600 text-white w-full rounded-full text-sm  p-4 h-12 font-medium py-2
                                        ${isInvalid && 'opacity-80'}`}
                                    >   {animateTrue ? (
                                            <Circles />
                                            ) : (
                                                <span>Login</span>
                                            )
                                        }
                                    </button>
                                </form>                
                            </div>
                        </div>        
                    </div>   
        </div>    
    );
};
