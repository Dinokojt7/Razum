import { useEffect } from "react";
import Fuckups from "../components/fuckup-feed/fuckups";
import Header from "../components/header";
import Home from "../components/Home";
import FilterTable from "../components/Home/filter-table";
import Sidebar from "../components/sidebar";
import Stage from "../components/stage";


export default function Dashboard() {
    useEffect(() => {
        document.title = 'Razum';
    }, []);

    return(
        <div className="bg-gray-50">
            <Header />
            <div className=" mx-auto max-w-screen-lg lg:divide-y-2 divide-gray-400">
                <div className="hidden md:flex lg:flex pb-3 grid grid-cols-3 gap-10 justify-between mx-auto max-w-screen-lg px-4 md:px-0 lg:px-0">
                    <Home />
                    <Sidebar />
                </div>
                <div className="hidden md:block lg:block overflow-y-auto  gap-10 h-12 justify-center mx-auto max-w-screen-lg">
                    <Stage />
                </div>
                <div className="md:hidden lg:hidden">
                    <FilterTable />
                </div>
                <div className="container col-span-3 mx-auto max-w-screen-lg p-4">                
                    <Fuckups />
                </div>
            </div>
        </div>
        
    )
}