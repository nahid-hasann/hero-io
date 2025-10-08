import React, { useState } from 'react';
import { data, Link, useLoaderData } from 'react-router-dom';
import AppsCard from './AppsCard';

const AppsPage = () => {
    const datas = useLoaderData();
    // console.log(datas);
    const [searchBar, setSearchBar] = useState("");
    const handlerSearch = (e) => {
      setSearchBar(e.target.value);
    }
    const dataFilter = datas.filter(items => items.title.toLowerCase().includes(searchBar.toLowerCase()))
    return (

        <div className='my-[70px] max-w-[1440px] mx-auto' >
            <div>
                <h1 className='text-center font-bold text-[48px]' >Our All Applications</h1>
                <p className='text-center text-[18px] text-gray-500' >Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div  className='flex justify-between my-[60px]' >
                <h1> ({datas.length}) Apps Found</h1>
                <div>
                    <div className="flex items-center border rounded-lg px-3 py-2 w-[300px]">
                        <span className="text-gray-400 mr-2">🔍</span>
                        <input
                         onChange={handlerSearch}
                            type="text"
                            placeholder="search Apps"
                            className="outline-none text-gray-600 placeholder-gray-400 w-full"
                        />
                    </div>


                </div>
            </div>
            <div className='grid grid-cols-4 gap-[40px]' >dataFi
                {
                   dataFilter > 0 ?  lter.map(data => <AppsCard key={data.id} data={data} ></AppsCard> )
                }
            </div>
        </div>

    );
};

export default AppsPage;