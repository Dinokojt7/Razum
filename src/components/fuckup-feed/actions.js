import { useState, useContext } from  'react';
import PropTypes from 'prop-types';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

export default function Options({docId, totalBeenTheres,fuckupBeenThere, fuckupFoundHelpful, totalFoundHelpfuls, comments, handleFocus}) {
    const {
        user: { uid: userId = '' }
    } = useContext(UserContext);
    const [toggleFoundHelpful, setToggleFoundHelpful] = useState(fuckupFoundHelpful);
    const [foundHelpful, setFoundHelpful] = useState(totalFoundHelpfuls);
    const [toggleBeenThere, setToggleBeenThere] = useState(fuckupBeenThere);
    const [beenThere, setBeenThere] = useState(totalBeenTheres);
    const { firebase, FieldValue } = useContext(FirebaseContext);

    const handleToggleFoundHelpful = async () => {
        setToggleFoundHelpful((toggleFoundHelpful) => !toggleFoundHelpful);

        await firebase
            .firestore()
            .collection('fuckups')
            .doc(docId)
            .update({
                foundHelpful: toggleFoundHelpful ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId)
            });
            
        setFoundHelpful((foundHelpful) => (toggleFoundHelpful ? foundHelpful - 1 : foundHelpful + 1));
        };

    const handleToggleBeenThere = async () => {
        setToggleBeenThere((toggleBeenThere) => !toggleBeenThere);
    
        await firebase
            .firestore()
            .collection('fuckups')
            .doc(docId)
            .update({
                beenThere: toggleBeenThere ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId)
            });
                
        setBeenThere((beenThere) => (toggleBeenThere ? beenThere - 1 : beenThere + 1));
        };

    return (
        <>
            <div className="hidden lg:flex flex column justify-between pt-6">
                <div className="flex  space-x-10">
                    <button
                        className="flex column space-x-1 text-xs font-medium mr-1 select-none cursor-pointer"                        
                    >
                        <svg
                            onClick={handleFocus}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleFocus();
                                }
                            }} 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="h-4 w-4" fill="none" viewBox="0 0 24 14" 
                            fill="none" stroke="#111827" stroke-width="1.5" 
                            stroke-linecap="butt" stroke-linejoin="arcs"
                        >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <div>{foundHelpful === 1 ? `${foundHelpful} comment` : `${foundHelpful} comments`}</div>
                    </button>                 
                    <button
                        type="button"
                        onClick={handleToggleFoundHelpful}
                        onKeyDown ={(e) => {
                            if (e.key === 'Enter') {
                                handleToggleFoundHelpful();
                            }
                        }}
                        className={`text-xs font-medium mr-1 select-none cursor-pointer 
                            ${toggleFoundHelpful ? 'text-indigo-500' : 'text-black-400'}`}
                    >
                            {foundHelpful === 0 ? `found helpful` : `${foundHelpful} found helpful`}
                    </button>             
                    <button
                        type="button"
                        onClick={handleToggleBeenThere}
                        onKeyDown ={(e) => {
                            if (e.key === 'Enter') {
                                handleToggleBeenThere();
                            }
                        }}
                        className={`text-xs font-medium select-none cursor-pointer justify-between
                            ${toggleBeenThere ? 'text-indigo-500' : 'text-black-400'}`}
                    >
                            {foundHelpful === 0 ? `been there` : `${foundHelpful} been there`}
                    </button>
                    <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={handleToggleBeenThere}
                        onKeyDown ={(e) => {
                            if (e.key === 'Enter') {
                                handleToggleBeenThere();
                            }
                        }}
                        className="flex column space-x-1 text-xs font-medium select-none cursor-pointer flex justify-end"
                    >
                        <p>full story</p>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" 
                            viewBox="0 0 20 16" fill="currentColor">
                            <path fill-rule="evenodd" 
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                                clip-rule="evenodd" 
                            />
                        </svg>
                        </button> 
                        </div>                   
                </div>
            </div>
        </>
    )
}

Options.propTypes = {
    docId: PropTypes.string.isRequired,
    totalFoundHelpfuls: PropTypes.number.isRequired,
    fuckupFoundHelpful: PropTypes.bool.isRequired,
    handleFocus: PropTypes.func.isRequired,
    beenThere: PropTypes.array.isRequired
}

