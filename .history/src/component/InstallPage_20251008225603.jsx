import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar } from "react-icons/fa";

const InstallPage = () => {

    const [installApps, setInstalleApps] = useState([]);
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("installApps") || []);
        setInstalleApps(saved);
    }, [])

    const handleuninstallapp = (id) => {
    const updated = installApps.filter(app => app.id !== id);
    setInstalleApps(updated);
    localStorage.setItem("installApps", JSON.stringify(updated));
  };

    return (
         <div className="max-w-[1000px] mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">Your Installed Apps</h1>
      <p className="text-center text-gray-500 mb-10"> Explore All Trending Apps on the Market developed by us</p>

      {installApps.length === 0 ? (<p className="text-center text-xl text-gray-500">No apps</p>) : (
        <div>
          <h2 className="text-lg font-semibold mb-6">{installApps.length} Apps Found</h2>
          <div className="space-y-4">
            {installApps.map((app) => (
              <div key={app.id} className="flex items-center justify-between bg-white shadow p-4 rounded-lg">
                <div className="flex items-center gap-4">
                  <img src={app.image} alt={app.title} className="w-16 h-16 rounded-md object-cover" />
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
                <button onClick={() => handleuninstallapp(app.id)} className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium" >Uninstall </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    );
};

export default InstallPage;