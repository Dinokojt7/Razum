export default function FilterTable() {
    
    return (
        <div class="antialiased">
            <div class="container flex justify-center mr-0  px-auto">
                <div class="pb-4">
                    <div class="my-2 flex w-4/5 sm:flex-row">
                        <div class=" flex w-4/5 flex-col mb-1 sm:mb-0">
                            <div class="relative">
                                <select
                                    class="appearance-none text-sm h-full rounded-l border block appearance-none bg-white border-gray-400 text-gray-700 py-2 px-1 pr-6 focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>Pre-MVP</option>
                                    <option>First sales</option>
                                    <option>Validation</option>
                                    <option>Scaling</option>
                                    <option>Profit maximization</option>
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>                            
                        </div>
                        <div class=" flex w-4/5 flex-col mb-1 sm:mb-0">
                            <div class="relative">
                                <select
                                    class="appearance-none text-sm h-full rounded-l border block appearance-none bg-white border-gray-400 text-gray-700 py-2 px-1 pr-6 focus:outline-none focus:bg-white focus:border-gray-500">
                                    <option>SaaS</option>
                                    <option>VR and Gaming</option>
                                    <option>Dev-Ops</option>
                                    <option>ML and Data Science</option>
                                    <option>Robotics</option>
                                    <option>Fintech</option>
                                    <option>Marketplace and Retail</option>
                                    <option>Healthcare</option>
                                </select>
                                <div
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>                            
                        </div>

                        {/* <div class="block relative">
                            <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                                    <path
                                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                            </span>
                            <input placeholder="Search"
                                class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-28 py-2 w-4/5 bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                        </div>                         */}
                    </div>
                    <div className="container flex justify-end">
                        <button
                            className=" bg-indigo-500 text-xs text-white p-1 border border-gray-100 rounded"
                        >
                            GO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}