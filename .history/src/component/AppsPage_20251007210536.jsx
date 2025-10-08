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
                    <div className="flex items-center border rounded-lg px-3 py-2 w-[300px]">
  <span className="text-gray-400 mr-2">🔍</span>
  <input
    type="text"
    placeholder="search Apps"
    className="outline-none text-gray-600 placeholder-gray-400 w-full"
  />
</div>


                </div>
            </div>
        </div>

    );
};

export default AppsPage;