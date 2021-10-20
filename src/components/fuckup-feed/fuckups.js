import Skeleton from "react-loading-skeleton"
import useFuckups from "../../hooks/use-fuckups";
import Post from "./index";

export default function Fuckups () {
    const { fuckups } = useFuckups();

    return (
        <div className="container col-span-2">
            {!fuckups ? (
                <>                    
                    <Skeleton count={10} width={640} height={120} className="mb-5 col-span-2 pb-2 max-w-screen-lg justify-between mx-auto pt-2 mt-0 px-3" />                  
                </>
            ) : fuckups?.length > 0 ? (
                fuckups.map((content) => <Post className="font-bold text-sm tracking-wide" key={content.docId} content={content} />)
            ) : (
                <p className="text-center text-2xl">Follow more people to see fuckups!</p>
            )}
        </div>
    );
}

