import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { PROFILE } from '../../constants/routes';

export default function Fuckups({fuckups}) {
      
    return (
        <div className="container col-span-2">
            { !fuckups ? (
                    <>
                        <Skeleton count={1} height={35} width={680} className="mb-7" />
                    </>
                ) : fuckups.length > 0 ? (
                    fuckups.map((fuckup) => 
                    <div key={fuckup.docId} className="grid grid-cols-2 py-2 mb-0">
                        <div className="container bg-gray-200 col-span-2 flex p-2 rounded justify-start">
                            <p className="font-medium ml-0 text-sm border-gray-200 tracking-wide mx-auto">{fuckup.body}</p>
                            <p className="font-medium mr-0 text-sm border-gray-200 tracking-wider mx-auto">{format(fuckup.dateCreated, "dd.MM.yy")}</p>    
                        </div>
                        <div className="container col-span-2 flex justify-end pt-1 pb-2 pr-0">
                        <Link to={PROFILE}>
                            <p className="font-medium text-xs flex tracking-wide">
                                Full story
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" 
                                    viewBox="0 0 20 16" fill="currentColor">
                                    <path fill-rule="evenodd" 
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                                        clip-rule="evenodd" 
                                    />
                                </svg>
                            </p>
                        </Link>
                        </div>
                    </div>                                                            
                    )
                ) :     
                <div className="justify-between flex mt-10 border">
                    <p className="text-gray-600 font-semibold pb-20 pt-2 pl-2 text-lg">
                        You have'nt posted any fuckups. 
                    </p>
                </div>
            }   
        </div>
    );        
}

Fuckups.propTypes = {
    fuckups: PropTypes.array.isRequired
};