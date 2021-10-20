import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header({ userName, body }) {
    return (
        <div className="flex h-4 mt-0 pt-6 py-8">
            <div className="flex items-center mt-0">
                <Link to={`/p/${userName}`} className="flex p-0 mt-0 items-center">
                    <img
                        className="h-9 w-9 flex mr-3 mt-0 pt-0"
                        src={`/images/avatars/Tiisetso.jpg`}
                    />
                </Link>
                    <div className="col-span-3 mt-0">
                    <Link to={`/p/${userName}`} className="flex p-0 mt-0 items-center">
                        <p className="font-bold tracking-wide pt-0 mt-0 text-base text-black-500 flex items-center">{userName}</p>
                    </Link>    
                    <p className="font-medium text-black-400 text-sm">{body}</p>           
                    </div>                 
            </div>
        </div>
    );
}

Header.propTypes = {
    userName: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}