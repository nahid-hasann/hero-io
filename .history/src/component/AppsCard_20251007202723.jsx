import React from 'react';

const AppsCard = ({ data }) => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-xl font-bold mb-6 text-gray-800">
                Total Apps: {data.length}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((app) => (
                    <div
                        key={app.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3"
                    >
                        {/* Image */}
                        <div className="w-full h-56 bg-gray-100 rounded-xl overflow-hidden mb-3">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-center font-semibold text-gray-800 text-sm mb-3">
                            {app.title}
                        </h3>

                        {/* Info Row */}
                        <div className="flex justify-between px-2">
                            <div className="flex items-center gap-1 text-sm text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full">
                                <FaDownload className="text-emerald-600" />
                                {(app.downloads / 1000000).toFixed(1)}M
                            </div>

                            <div className="flex items-center gap-1 text-sm text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-full">
                                <FaStar className="text-purple-600" />
                                {app.ratingAvg.toFixed(1)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppsCard;