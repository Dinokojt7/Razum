import PropTypes from  'prop-types';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';


export default function Market ({ market }) {
        return  !market ? (
            <Skeleton count={1} height={30} />
            ) : (                 
            <div className="cointainer flex col-span-2 rid grid-cols-4 mr-1  mb-2 ">
            <div className=" flex-grow-none ml-5 mr-0 mt-2">
                <p className="font-medium uppercase text-sm pr-0 tracking-wide text-gray-900">
                    MARKET: 
                </p>
            </div>
            <div className="bg-gradient-to-b from-indigo-500 to-purple-600 ... mx-auto mt-1 ml-2 h-7 rounded ">                           
            <p className="font-semibold text-gray-50 mx-2 text-base tracking-wide px-1">{market}</p>
            </div>
            </div>
               
    )  
}

Market.propTypes = {
    market: PropTypes.string,
    };

// export default function Feed() {
//     return (
//         <div className="container col-span-2">
//         <p>Feed goes here</p>
//         </div>
//     );
// }