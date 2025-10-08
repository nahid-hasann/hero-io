import React from 'react';

const InstallApps = () => {
    return (
        <div>
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
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Uninstall
                </button>
              </div>
        </div>
    );
};

export default InstallApps;