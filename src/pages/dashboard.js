import { useEffect } from "react";
import Fuckups from "../components/fuckup-feed/fuckups";
import Header from "../components/header";
import Home from "../components/Home";
import Sidebar from "../components/sidebar";
import Stage from "../components/stage";


export default function Dashboard() {
    useEffect(() => {
        document.title = 'Razum';
    }, []);

    return(
        <div className="bg-gray-50 h-screen">
            <Header />
            <div className=" mx-auto max-w-screen-lg divide-y-2 divide-gray-400">
                <div className="grid grid-cols-3 gap-10 justify-between mx-auto max-w-screen-lg px-4 md:px-0 lg:px-0">
                    <Home />
                    <Sidebar />
                </div>
                <div className="flex-1 overflow-y-auto  gap-10 h-12 justify-center mx-auto max-w-screen-lg">
                    <Stage />
                </div>
                <div className="container col-span-3 mx-auto max-w-screen-lg p-4">                
                    <Fuckups />
                </div>
            </div>
        </div>
        
    )
}