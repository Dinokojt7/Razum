import { useRef } from 'react';
import PropTypes from 'prop-types'
import Header from './header'
import Full from './takeaway'
import Options from './actions';
import Comments from './comments';

export default function Post({content}) {
    const commentInput = useRef(null);

    const handleFocus = () => commentInput.current.focus();

        return(
            <div className=" rounded-lg col-span-2 pb-2 max-w-screen-md lg:border mx-auto pt-2 mt-0 px-3 bg-gray-80 lg:bg-gray-100 border-gray-200 mb-5">
                <Header
                    userName={content.userHandle} 
                    body={content.body} 
                />
                <Full 
                    takeAway={content.takeAway} 
                />
                <Options 
                    docId={content.docId}
                    totalFoundHelpfuls={content.foundHelpful.length}
                    fuckupFoundHelpful={content.foundHelpful}
                    handleFocus={handleFocus}                    
                />
                <Comments
                    docId={content.docId}
                    comments={content.comments}
                    posted={content.dateCreated}
                    commentInput={commentInput} 
                />
            </div>
        )
}

Post.propTypes = {
    content: PropTypes.shape({
        userName: PropTypes.string.isRequired, 
        body: PropTypes.string.isRequired, 
        takeAway: PropTypes.string.isRequired, 
        imageSrc: PropTypes.string.isRequired, 
        docId: PropTypes.string.isRequired, 
        foundHelpful: PropTypes.array.isRequired, 
        comments: PropTypes.array.isRequired, 
        dateCreated: PropTypes.number.isRequired, 
        userHandle: PropTypes.string.isRequired,
        beenThere: PropTypes.array.isRequired
    })
};
 