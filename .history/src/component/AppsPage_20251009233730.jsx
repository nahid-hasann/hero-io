import React, { useEffect, useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AppsCard from './AppsCard';
import { Oval } from "react-loader-spinner";


const AppsPage = () => {
    const datas = useLoaderData();
    // console.log(datas);
    const [searchBar, setSearchBar] = useState("");
    const [loading, setLoading] = useState(true);

    // 4
    const [searching, setsearching] = useState(false);
    const searchingSpinner = useRef(null);
    // 4

    const handlerSearch = (e) => {
        setSearchBar(e.target.value);
        setsearching(true);
        clearTimeout(searchingSpinner.current);
        searchingSpinner.current = setTimeout(() => {
            setsearching(false);
        }, 500);
    }
    const dataFilter = datas.filter(items => items.title.toLowerCase().includes(searchBar.toLowerCase()))

    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timmer = setTimeout(() => {
            setLoading(false)
        }, 800);
        return () => clearTimeout(timmer);
    }, [])



    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Oval
                    visible={true}
                    height={60}
                    width={60}
                    color="#8b5cf6"
                    secondaryColor="#c4b5fd"
                    ariaLabel="loading"
                />
            </div>
        );
    }

    return (

        <div className="my-[50px] max-w-[1440px] mx-auto px-4 md:px-8">
           
            <div>
                <h1 className="text-center font-bold text-3xl md:text-5xl mb-2">
                    Our All Applications
                </h1>
                <p className="text-center text-base md:text-lg text-gray-500">
                    Explore All Apps on the Market developed by us. We code for Millions.
                </p>
            </div>

           
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-10">
                <h1 className="text-lg font-semibold text-gray-700">
                    ({datas.length}) Apps Found
                </h1>

                <div className="w-full md:w-[300px]">
                    <div className="flex items-center border rounded-lg px-3 py-2">
                        <span className="text-gray-400 mr-2">🔍</span>
                        <input
                            onChange={handlerSearch}
                            type="text"
                            placeholder="Search Apps..."
                            className="outline-none text-gray-600 placeholder-gray-400 w-full"
                        />
                    </div>
                </div>
            </div>

            {/* --- Apps Grid --- */}
            <div>
                {searching ? (
                    <div className="flex justify-center items-center h-64">
                        <Oval
                            visible={true}
                            height={60}
                            width={60}
                            color="#8b5cf6"
                            secondaryColor="#c4b5fd"
                            ariaLabel="loading"
                        />
                    </div>
                ) : dataFilter.length > 0 ? (
                    <div
                        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center"
                    >
                        {dataFilter.map((data) => (
                            <AppsCard key={data.id} data={data} />
                        ))}
                    </div>
                ) : (
                    <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-500 mt-10">
                        No Apps Found
                    </h1>
                )}
            </div>
        </div>
    );
};

export default AppsPage;