import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaDownload, FaStar } from "react-icons/fa";

const AppDetails = () => {
    const allapps = useLoaderData();
    const {id} = useParams();
    const app = allapps.find( item => item.id === parseInt(id) );

    return (

       <div className="max-w-[1440px] mx-auto  min-h-screen py-16 px-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-white p-8 rounded-2xl ">
       
        <div className="w-48 h-48 flex-shrink-0 bg-gray-100 rounded-2xl overflow-hidden">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-contain"
          />
        </div>

     
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            {app.title}
          </h1>
          <p className="text-gray-500 mb-2">
            Developed by{" "}
            <span className="text-purple-600 font-medium">
              {app.companyName}
            </span>
          </p>
          <div className="border-b-2 border-purple-600 w-full mb-6"></div>

    
          <div className="flex flex-wrap gap-8 mb-6 text-gray-700">
            <div className="flex items-center gap-2">
              <FaDownload className="text-purple-600 text-lg" />
              <div>
                <p className="text-xl font-semibold">
                  {(app.downloads / 1000000).toFixed(1)}M
                </p>
                <p className="text-sm text-gray-500">Downloads</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaStar className="text-purple-600 text-lg" />
              <div>
                <p className="text-xl font-semibold">{app.ratingAvg}</p>
                <p className="text-sm text-gray-500">Average Rating</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <FaStar className="text-purple-600 text-lg" />
              <div>
                <p className="text-xl font-semibold">
                  {(app.reviews / 1000).toFixed(0)}K
                </p>
                <p className="text-sm text-gray-500">Total Reviews</p>
              </div>
            </div>
          </div>

          <button className="bg-emerald-500 hover:bg-emerald-600 transition text-white font-semibold px-6 py-3 rounded-lg text-lg shadow">
            Install Now ({app.size}MB)
          </button>
        </div>
      </div>
    </div>
    );
};

export default AppDetails;