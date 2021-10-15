import Skeleton from "react-loading-skeleton"
import useFuckups from "../../hooks/use-fuckups";
import Post from "./index";

export default function Fuckups () {
    const { fuckups } = useFuckups();

    console.log('fuckups', fuckups);

    return (
        <div className="container col-span-2">
            {!fuckups ? (
                <>                    
                    <Skeleton count={1} width={640} height={120} className="mb-10" />                  
                </>
            ) : fuckups?.length > 0 ? (
                fuckups.map((content) => <Post className="font-bold text-sm tracking-wide" key={content.docId} content={content} />)
            ) : (
                <p className="text-center text-2xl">Follow more people to see fuckups!</p>
            )}
        </div>
    );
}

