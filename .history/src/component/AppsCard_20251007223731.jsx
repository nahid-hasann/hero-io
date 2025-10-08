import React from 'react';
import { FaDownload, FaStar } from "react-icons/fa";

const AppsCard = ({ data }) => {
    return (
       <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 w-64 my-[30px]">
     
      <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden mb-3">
        <img
          src={data.image}
          alt="Forest: Focus for Productivity"
          className="w-full h-full object-cover"
        />
      </div>

   
      <h3 className="text-center font-semibold text-gray-800 text-sm mb-3">
        {data.title}
      </h3>

      <div className="flex justify-between px-2">
        <div className="flex items-center gap-1 text-sm text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-full">
          <FaDownload className="text-emerald-600" /> {data.downloads}
        </div>

        <div className="flex items-center gap-1 text-sm text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded-full">
          <FaStar className="text-purple-600" /> {data.ratingAvg}
        </div>
      </div>
    </div>
    );
};

export default AppsCard;