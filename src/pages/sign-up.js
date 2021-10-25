import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from "../context/firebase";
import * as ROUTES from '../constants/routes';
import { doesUserNameExist } from '../services/firebase';
import {ReactComponent as Business1} from './business1.svg';

// TODO: Add anonymous SignUp 

export default function SignUp() {      
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    
    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState ('');
    const [password, setPassword] = useState('');
    const [market, setMarket] = useState('');
    const [company, setcompany] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleSignUp = async (event) => {
        event.preventDefault();

        const userNameExists = await doesUserNameExist(userName);
        if (userNameExists.length) {
            setError('That username is already taken please try another.');
        } else {
            try {
                const createdUserResult = await firebase
                .auth()
                .createUserWithEmailAndPassword(emailAddress, password);

                // firebase authentication
                await createdUserResult.user.updateProfile({
                    displayName: userName
                });

                // firebase user collecton (create a document)
             await firebase
             .firestore()
             .collection('users')
             .add({
                 userId: createdUserResult.user.uid, 
                 userName: userName,
                 fullName,
                 emailAddress: emailAddress.toLowerCase(),
                 following: [],
                 dateCreated: Date.now(),
                 startupName: company,
                 market: market,
                 followers: [], 
             });

             history.push(ROUTES.DASHBOARD);
            }catch (error) {
                setFullName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            }
        }
    };

    useEffect(() => {
        document.title = 'Razum';
    }, []);                                  

    return (
    <div class="w-full lg:bg-gradient-to-r from-purple-500 via-indigo-400 to-indigo-500 space-y-0 h-screen">   
    <nav class="sticky w-full h-auto px-2 sm:px-0">
        <div class="container flex justify-between py-1 mx-auto">
        <label class="uppercase text-xl text-purple-900 font-bold tracking-wider pl-0 lg:text-gray-100">
            razum
        </label> 
            <button
            disabled={isInvalid}
            type="submit" 
            className="bg-indigo-50 font-medium mr-2 rounded-xl text-sm bg-white tracking-wider text-indigo-900 hover:bg-indigo-100 transition mt-1 py-1"
            >
                <Link to={ROUTES.LOGIN} class='block px-4 '>
                    Sign In
                </Link>
            </button>
        </div>
    </nav>        
        <div className="container bg-gray-70 mx-auto w-full items-center h-screen"> 
             <div className=" lg:hidden flex justify-center md:min-w-full md:px-10 md:flex lg:min-w-full pt-10 mx-1 px-6 md:w-4/5 md:pt-20 lg:w-4/5 lg:px-10 lg:pt-10 ">
                <p className="text-gray-900 text-center flex font-semibold text-4xl md:text-5xl lg:text-5xl flex items-center mx-auto">
                    Welcome to Razum
                </p>
            </div>
            <div className="pt-8">
                <p className="hidden lg:flex text-white text-center flex font-semibold text-5xl md:text-5xl lg:text-5xl flex items-center mx-auto">
                    Join the experience.
                </p>
                <p className="hidden lg:flex text-white text-left flex font-semibold text-base md:text-base lg:text-base flex items-center w-3/5 pt-3 pr-18">
                We're a community, that's creating, exploring and sharing our encounters with 
                one another as founders. Join us and find relevant stories in seconds 
                by filtering market and stage. See where founders are heading and what they 
                wouldn't do next time. Reflect on fuckups and get advice 
                from people in your niche.
                </p>
            </div>
            <div className="container pt-0 mx-auto px-2 lg:px-auto lg:pt-5 flex lg:space-x-12 lg:justify-start">
                <div className="hidden lg:flex"><Business1 className="pr-12" style={{ width: "400px", height: "400px"}}  /></div>                
                
                <div className="lg:bg-gray-50 container flex items-center justify-center mx-auto flex-col 
                    px-4 my-auto w-5/5 h-auto px-1 pb-4 md:w-2/5 md:mx-2 md:px-4 md:shadow-2xl md:flex md:justify-center lg:flex lg:w-2/5 lg:mx-2 lg:px-4 rounded-lg lg:shadow-2xl"> 
                    <div class="text-center pb-3 lg:pb-3">  
                        <h4 class="text-gray-800 font-medium text-xl pt-2">Create your account</h4>
                        <p className="text-xs text-gray-400 pt-3">
                            Have an account?{` `}
                            <Link to={ROUTES.LOGIN} className="font-bold tracking-wider text-indigo-500">
                                Login
                            </Link>
                        </p>
                    </div>

                    {error && <p className="flex-none mb-3 text-xs text-red-400">{error}</p>}
                        
                    <form onSubmit={handleSignUp} method="POST">
                        <div className="flex pt-2 items-center">
                            <input
                                aria-label="Enter your full name"          
                                type="text"
                                placeholder="Full Name"
                                className="text-sm text-gray-base border-gray-400 lg:bg-gray-50  border lg:border-gray-400 h-8 py-2 pl-2 font-base rounded-full mb-5 lg:h-8 lg:py-2 lg:pl-3 lg:mb-5 focus:outline-none focus:ring-0.5 focus:border-purple-500" 
                                onChange={({ target }) => setFullName(target.value)}
                                value={fullName}
                            /> <span className="px-1"></span> 
                            <input
                                aria-label="Enter your username"          
                                type="text"
                                placeholder="Username"
                                className="text-sm hidden lg:bg-gray-50 border-gray-400 border lg:border-gray-400 lg:flex text-gray-base h-8 py-2 pl-3 font-base rounded-full mb-5 
                                focus:outline-none focus:ring-0.5 focus:border-purple-500"
                                onChange={({ target }) => setUserName(target.value)}
                                value={userName}
                            />
                        </div>
                        <input
                                aria-label="Enter your username"          
                                type="text"
                                placeholder="Username"
                                className="text-sm lg:hidden lg:bg-gray-50 border-gray-400 border lg:border-gray-400 text-gray-base h-8 py-2 pl-3 font-base rounded-full mb-5 
                                focus:outline-none focus:ring-0.5 focus:border-purple-500"
                                onChange={({ target }) => setUserName(target.value)}
                                value={userName}
                            />
                        <input
                            aria-label="Enter your email address"          
                            type="text"
                            placeholder="Email address"
                            className="text-sm text-gray-base lg:bg-gray-50 border-gray-400 border lg:border-gray-400 pr-4 h-8 py-2  pl-3 font-base rounded-full mb-5
                            focus:outline-none focus:ring-0.5 focus:border-purple-500"
                            onChange={({ target }) => setEmailAddress(target.value)}
                            value={emailAddress}
                        />                        
                        <input
                            aria-label="Enter your password"
                            type="password"
                            placeholder="Password"
                            className="focus:border-blue-600 lg:bg-gray-50 border-gray-400 border lg:border-gray-400 text-sm text-gray-base pr-10 mr-3 h-8 py-2  pl-3 font-base rounded-full mb-7
                            focus:outline-none focus:ring-0.5 focus:border-purple-500"
                            onChange={({ target }) => setPassword(target.value)}
                            value={password}
                        />
                        <label className="text-sm text-gray-500 tracking-wider w-full mr-4 bg-white py-1 pt-2 p-1 pl-3 font-medium border border-gray-400 px-3 rounded-full mb-7">
                                <select className="active:ring-2 active:ring-white" onChange={({ target }) => setMarket(target.value)}>
                                <option value="" className="bg-gray-200 text-black uppercase font-medium">Select Your Market</option>
                                <option value="SaaS" className="text-black">SaaS</option>
                                <option value="DevOps and Cloud" className="text-black">DevOps and Cloud</option>
                                <option value="Graphics and Design" className="text-black">Graphics and Design</option>
                                <option value="Machine Learning" className="text-black">Machine Learning</option>
                                <option value="Healthcare" className="text-black">Healthcare</option>
                                <option value="Videography and Consumer Media" className="text-black">Videography and Consumer Media</option>
                                <option value="Data Science" className="text-black">Data Science</option>
                                <option value="Mining, Oil and Gas" className="text-black">Mining and Oil</option>
                                <option value="Automotive" className="text-black">Automotive</option>
                                <option value="Drones and Aviation" className="text-black">Drones and Aviation</option>
                                <option value="Green Technology" className="text-black">Green Technology</option>
                                <option value="Robotics and AI" className="text-black">Robotics and AI</option>
                                <option value="Blockchain" className="text-black">Blockchain</option>
                                <option value="Botany, Geology, and Wildlife" className="text-black">Botany, Geology, and Wildlife</option>
                                <option value="VR and Gaming" className="text-black">VR and Gaming</option>
                                <option value="Fintech" className="text-black">Fintech</option>
                                <option value="Ads and Marketing" className="text-black">Education</option>
                                <option value="Heavy Metal and Engineering" className="text-black">Heavy Metal and Engineering</option>
                                <option value="Ads and Marketing" className="text-black">Ads and Marketing</option>
                                <option value="Consumer Goods and Services" className="text-black">Consumer Goods and Services</option>
                                <option value="Beauty, Fashion, and Jewellery" className="text-black">Beauty, Fashion, and Jewellery</option>
                                <option value="Other" className="text-black">Other</option>
                            </select>
                        </label>
                        <input
                            aria-label="Company Name"
                            type="text"
                            placeholder="Company Name"
                            className="focus:border-blue-600 border-gray-400 lg:bg-gray-50 border lg:border-gray-400 text-sm text-gray-base 
                            pr-10 mr-auto w-full h-8 py-2  pl-3 mt-6 font-base rounded-full mb-0 focus:outline-none focus:ring-0.5 focus:border-purple-500"
                            onChange={({ target }) => setcompany(target.value)}
                            value={company}
                        />                                
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-gradient-to-r from-purple-500 to-indigo-500 text-white w-full rounded-full text-sm  mx-auto mt-6 px-12 font-medium h-9 py-2 
                            ${isInvalid && 'opacity-80'}`}
                        >
                            <span>Sign Up</span>
                        </button>
                        <div class="flex justify-center pt-8">
                            <Link to={ROUTES.DASHBOARD} className="font-medium text-sm text-indigo-500 hover:text-purple-500 mb-6">
                                Terms and Conditions
                            </Link>
                        </div>
                    </form>                                      
                </div>
            </div>        
        </div>
    </div>    
    );
};

