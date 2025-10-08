import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom';
import { FaDownload, FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chart from './Chart';
import { Oval } from "react-loader-spinner";

const AppDetails = () => {
    const allapps = useLoaderData();
    const { id } = useParams();
    const idNumber = parseInt
    const app = allapps.find(item => item.id === parseInt(id));

    const [install, setinstall] = useState(false);

    const buttonHandler = () => {
        setinstall(true);
        toast.success("App installed", {
            position: "top-center",
            autoClose: 2000
        });
    }


    const [loading, setLoading] = useState(true);
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

    if (!app) {
        return (
            <div className="flex flex-col justify-center items-center h-screen text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">App Not Found 😢</h1>
                <p className="text-gray-500 text-lg mb-6">
                    The app you are looking for does not exist or has been removed.
                </p>
                <Link
                    to="/apps"
                    className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                    Go Back to All Apps
                </Link>
            </div>
        );
    }


    return (

        <div className="min-h-screen py-16 px-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-[100px] bg-white p-8 rounded-2xl ">

                <div className="w-48 h-48 flex-shrink-0 bg-gray-100 rounded-2xl overflow-hidden">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-contain"
                    />
                </div>


                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{app.title}</h1>
                    <p className="text-gray-500 mb-2">
                        Developed by {" "}
                        <span className="text-[#8e54ee] font-medium">{app.companyName}</span>
                    </p>
                    <div className="border-b-2 border-purple-600 w-full mb-6"></div>


                    <div className="flex flex-wrap gap-8 mb-6 text-gray-700">
                        <div className="flex items-center gap-2">
                            <FaDownload className="text-[#28a672] text-lg" />
                            <div>
                                <p className="text-xl font-semibold">
                                    {app.downloads}
                                </p>
                                <p className="text-sm text-gray-500">Downloads</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaStar className="text-[#ff8811] text-lg" />
                            <div>
                                <p className="text-xl font-semibold">{app.ratingAvg}</p>
                                <p className="text-sm text-gray-500">Average Rating</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaStar className="text-[#8e54ee] text-lg" />
                            <div>
                                <p className="text-xl font-semibold">{app.reviews}</p>
                                <p className="text-sm text-gray-500">Total Reviews</p>
                            </div>
                        </div>
                    </div>

                    <button onClick={buttonHandler} className="bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold px-6 py-3 rounded-lg text-lg shadow"> {install ? "Installed" : `Install Now (${app.size}MB)`} </button>
                </div>
            </div>
            <ToastContainer />

            <div>
                <Chart app={app} ></Chart>
            </div>

            <div className='my-[60px]' >
                <h1 className='text-[48px] font-bold'>Description</h1>
                <p> {app.description} </p>
            </div>

        </div>
    );
};

export default AppDetails;