export default function Stage() {
    return (
        <div className="mx-auto max-w-screen-lg flex justify-center">
            <div className="mx-auto px-40 w-full flex justify-center grid divide-x-2 divide-gray-200 grid-cols-6">
                <button className="group focus:bg-purple-700 focus:text-white mb-0 h-11 text-gray-600 container col-span-1">
                    <p className="flex justify-center text-xs font-medium tracking-wider">
                        PRE-MVP
                    </p>
                </button>
                <button className="group focus:bg-purple-700 focus:text-white mb-0 h-11 text-gray-600 container col-span-1">
                    <p className="flex justify-center text-xs font-medium tracking-wider">
                        FIRST SALES
                    </p>
                </button>
                <button className="group focus:bg-purple-700 focus:text-white mb-0 h-11 text-gray-600 container col-span-1">
                    <p className="flex justify-center text-xs font-medium tracking-wider">
                        VALIDATION
                    </p>
                </button>
                <button className="group focus:bg-purple-700 focus:text-white mb-0 h-11 text-gray-600 container col-span-1">
                    <p className="flex justify-center text-xs font-medium tracking-wider">
                        SCALING
                    </p>
                </button>
                <button className="group focus:bg-purple-700 focus:text-white mb-0 mr-2 h-11 text-gray-600 container ml-0 col-span-2">
                <p className="flex justify-start text-xs pl-6 font-medium tracking-wider">
                        PROFIT MAXIMIZATION
                    </p>
                </button>
                <div></div>

            </div>
        </div>
    )
}