import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from "../context/firebase";
import * as ROUTES from '../constants/routes';
import { doesUserNameExist } from '../services/firebase';

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
    <div class="w-full space-y-0 h-screen">   
    <nav class="sticky w-full h-auto bg-gradient-to-r via-indigo-500 from-purple-700 ... px-2 sm:px-0">
        <div class="container flex justify-between py-1 mx-auto">
            <label class="uppercase text-lg font-bold tracking-wider text-white">
                razum
            </label>
            <button
            disabled={isInvalid}
            type="submit" 
            className="font-medium mr-6 rounded-xl text-sm bg-purple-500 tracking-wider text-white hover:text-white hover:bg-indigo-400 transition">
                 <Link to={ROUTES.LOGIN} class='block px-4 '>
                    Sign In
                 </Link>
            </button>
        </div>
    </nav>
        <div className=" bg-gray-70 flex mx-auto w-full items-center h-screen">                   
            <div className=" container rounded-full flex  mx-auto w-full">
                <div className="bg-white max-w-sm mx-auto md:p-6 my-20 w-full py-1 rounded-lg shadow-2xl">
                    <div class="p-1 text-center pb-6">
                        <h4 class="font-medium text-black text-2xl">Create your account</h4>
                        <p className="text-xs text-gray-400 pt-3">
                            Have an account?{` `}
                            <Link to={ROUTES.LOGIN} className="font-bold tracking-wider text-purple-700">
                                Login
                            </Link>
                        </p>
                    </div>

                    {error && <p className="flex-none mb-4 pt-0 text-xs text-red-400">{error}</p>}
                    
                    <form onSubmit={handleSignUp} method="POST">
                        <div className="flex space-x-1 p-0 items-center">
                            <input
                                aria-label="Enter your full name"          
                                type="text"
                                placeholder="Full Name"
                                className="text-sm text-gray-base h-8 py-2 pl-3 font-base border border-gray-300 rounded-full mb-5"
                                onChange={({ target }) => setFullName(target.value)}
                                value={fullName}
                            />  
                            <input
                                aria-label="Enter your username"          
                                type="text"
                                placeholder="Username"
                                className="text-sm text-gray-base h-8 py-2 pl-3 font-base border border-gray-300 rounded-full mb-5"
                                onChange={({ target }) => setUserName(target.value)}
                                value={userName}
                            />
                        </div>
                        <input
                            aria-label="Enter your email address"          
                            type="text"
                            placeholder="Email address"
                            className="text-sm text-gray-base pr-10 mr-3 h-8 py-2  pl-3 font-base border border-gray-300 rounded-full mb-5"
                            onChange={({ target }) => setEmailAddress(target.value)}
                            value={emailAddress}
                        />                        
                        <input
                            aria-label="Enter your password"
                            type="password"
                            placeholder="Password"
                            className="focus:border-blue-600  text-sm text-gray-base pr-10 mr-3 h-8 py-2  pl-3 font-base border border-gray-300 rounded-full mb-7"
                            onChange={({ target }) => setPassword(target.value)}
                            value={password}
                        />
                        <label className=" text-sm text-purple-900 tracking-wider w-full mr-4 bg-white py-1 pt-2 p-1 pl-3 font-medium border border-purple-800 px-3 rounded-full mb-7">
                            <select className="active:ring-2 active:ring-white" onChange={({ target }) => setMarket(target.value)}>
                                <option value="" className="bg-gray-300 text-black uppercase font-medium">Select Your Market</option>
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
                            className="focus:border-blue-600  text-sm text-gray-base pr-10 mr-auto w-full h-8 py-2  pl-3 mt-6 font-base border border-gray-300 rounded-full mb-0"
                            onChange={({ target }) => setcompany(target.value)}
                            value={company}
                        />                                
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-gradient-to-r from-purple-700 to-indigo-600 text-white w-full rounded-full text-sm  mx-auto mt-6 px-12 font-medium h-9 py-2 
                            ${isInvalid && 'opacity-80'}`}
                        >
                            <span>Sign Up</span>
                        </button>
                        <div class="flex justify-center pt-10">
                            <Link to={ROUTES.DASHBOARD} className="font-medium text-sm text-purple-700 hover:text-purple-500 mb-6">
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

