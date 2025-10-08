import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar } from "react-icons/fa";
import InstallApps from './InstallApps';

const InstallPage = () => {

    const [installApps, setInstalleApps] = useState([]);
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("installApps") || []);
        setInstalleApps(saved);
    }, [])

    

    return (
         <div className="max-w-[1000px] mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Your Installed Apps</h1>
      <p className="text-center text-gray-500 mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>

      {installApps.length === 0 ? (
        <p className="text-center text-xl text-gray-500">No apps installed yet 😢</p>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-6">{installApps.length} Apps Found</h2>
          <div className="space-y-4">
            {installApps.map((app) => (
             <InstallApps app={app} ></InstallApps>
            ))}
          </div>
        </div>
      )}
    </div>
    );
};

export default InstallPage;