import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar } from "react-icons/fa";
import { Oval } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstallPage = () => {

    const [installedApps, setInstalledApps] = useState([]);
     const [loading, setLoading] = useState(true);
     const [sortType, setSortType] = useState("");

    // console.log(installedApps);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("installApps")) || [];
        setInstalledApps(saved);
    }, [])

    const handleuninstallapp = (id) => {
        const updated = installedApps.filter(app => app.id !== id);
        setInstalledApps(updated);
        localStorage.setItem("installApps", JSON.stringify(updated));

        toast.success("App uninstalled", {
            position: "top-center",
            autoClose: 2000
        });
    };


    //

   
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

    //

    //

    

    const handleSort = (type) => {
  setSortType(type);
  let sorted = [...installedApps];

  if (type === "low to high") {
    sorted = [...installedApps].sort((a, b) => parseInt(a.size) - parseInt(b.size));
  } 
  else if (type === "high to low") {
    sorted = [...installedApps].sort((a, b) => parseInt(b.size) - parseInt(a.downloads));
  }

  setInstalledApps(sorted);
};

    //

    return (
        <div className="max-w-[1440px] mx-auto py-10">
            <h1 className="text-[45px] font-bold text-center mb-4">Your Installed Apps</h1>
            <p className="text-center text-gray-500 mb-10"> Explore All Trending Apps on the Market developed by us</p>

            <ToastContainer />

            {installedApps.length === 0 ? (<p className="text-center text-xl text-gray-500">No apps</p>) : (
                <div>
                    <div className='flex justify-between my-[20px]'>
                        <h2 className="text-lg font-semibold mb-6">{installedApps.length} Apps Found</h2>
                        <div>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn m-1">Sort</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a onClick={() => handleSort("low to high")} >Low to High</a></li>
                                    <li><a onClick={() => handleSort("high to low")}>High to Low</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {installedApps.map((app) => (
                            <div key={app.id} className="flex items-center justify-between bg-white shadow p-4 rounded-lg">
                                <div className="flex items-center gap-4">
                                    <img src={app.image} className="w-16 h-16 rounded-md object-cover" />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">{app.title}</h3>
                                        <div className="flex items-center gap-3 text-sm text-gray-600">
                                            <span className="flex items-center gap-1 text-emerald-600">
                                                <FaDownload /> {app.downloads}
                                            </span>
                                            <span className="flex items-center gap-1 text-yellow-500">
                                                <FaStar /> {app.ratingAvg}
                                            </span>
                                            <span>{app.size} MB</span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => handleuninstallapp(app.id)} className="bg-[#00d390] cursor-pointer text-white px-4 py-2 rounded-lg font-medium" >Uninstall </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default InstallPage;