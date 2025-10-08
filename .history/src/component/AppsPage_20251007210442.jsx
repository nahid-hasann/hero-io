import React from 'react';
import { Link } from 'react-router-dom';

const AppsPage = () => {
    return (

        <div className='my-[70px]' >
            <div>
                <h1 className='text-center font-bold text-[48px]' >Our All Applications</h1>
                <p className='text-center text-[18px] text-gray-500' >Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div>
                <h1>(132) Apps Found</h1>
                <div>
                    <div className="flex items-center w-full max-w-md mx-auto border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="search Apps"
                            className="w-full focus:outline-none text-gray-700 placeholder-gray-400"
                        />
                    </div>

                </div>
            </div>
        </div>

    );
};

export default AppsPage;