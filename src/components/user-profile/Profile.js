import PropTypes from  'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Profile = ({ userName, fullName }) =>
    !userName || !fullName ? (
        <Skeleton count={1} height={50} />
    ) : ( 
    <div className="">
        <Link to={`/p/${userName}`} className="grid grid-cols-4 gap-4 mb-2 items-center">
            <div className="flex items-center pt-8 justify-between col-span-1">                
                <img 
                className=" w-22 border border-indigo-300 flex justify-end mr-3"
                src={`/images/avatars/${userName}.png`}
                alt=""
            />
            </div>
            <div className="col-span-3 mt-0">
                <p className="font-medium text-sm tracking-wide">{fullName} - ({userName})</p>
                <p className="font-medium text-gray-400 text-sm">Founder - Izinto</p>            
            </div>
        </Link>
        <div className="cointainer col-span-2 mb-4 mr-4">
            <button className="bg-indigo-500 border border-indigo-300 flex-grow-none  mr-0 h-6 rounded">
                <p className="font-normal text-white text-sm tracking-wide px-1">My Takeaways</p>
            </button>
            <button className="bg-gray-400 border border-gray-400  mx-auto mt-1 ml-0 h-6 rounded mx-auto ml-2">
                <p className="font-normal text-white text-sm tracking-wide px-1">Saved</p>
            </button>            
        </div>
    </div>    
    );

export default Profile;     

Profile.propTypes = {
    userName: PropTypes.string,
    fullName: PropTypes.string,
};