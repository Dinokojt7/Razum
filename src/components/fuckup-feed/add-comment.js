import { useState, useContext } from "react";
import PropTypes from "prop-types";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import Comments from "./comments";

export default function AddComment({docId, comments, setComments, commentInput }) {
    const [comment, setComment] = useState('');
    const { firebase, FieldValue } = useContext(FirebaseContext);
    const {
        user: { displayName }
    } = useContext(UserContext);

    const handleSubmitComment = (e) => {
        e.prenventDefault();

        setComments([{ displayName, comment }, ...comments]);
        setComment('');

        
        return firebase
            .firestore()
            .collection('fuckups')
            .doc(docId)
            .update({
                comments: FieldValue.arrayUnion({ displayName, comment })
            });
    };

    return <div className="border-t border-purple-100">
                <form
                    className="flex justify-between pl-0 pr-5"
                    method="POST"
                    onSubmit={(e) => comment.length >= 1 ? handleSubmitComment(e) : e.preventDefault()
                    }
                >
                    <input 
                    aria-label="Add comment"
                    autoComplete="off"
                    className="text-sm text-black-400 w-full mr-3 py-1 px-4 bg-gray-200"
                    type="text"
                    name="add-comment"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={({ target })  => setComment(target.value)}
                    ref={commentInput}
                    />
                    <button 
                        type="submit"
                        disabled={comment.length < 1}
                        onClick={handleSubmitComment}
                        className="bg-gradient-to-r from-indigo-600 via-indigo-800 to-purple-900 flex-grow-none mr-0 h-6 rounded"
                    >
                        <p className="font-medium text-white text-sm tracking-wider px-1">Post</p>
                    </button>
                </form>
            </div>
    
} 

AddComment.propTypes = {
    docId: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    setComment: PropTypes.func.isRequired,
    commentInput: PropTypes.object
};