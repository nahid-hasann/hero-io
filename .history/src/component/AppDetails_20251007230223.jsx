import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppDetails = () => {
    const allapps = useLoaderData;
    const {id} = useParams;
    const apps = allapps.find(app => app.id === parseInt(id) );

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-md rounded-xl">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={app.image}
          alt={app.title}
          className="w-64 h-64 object-cover rounded-xl shadow"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            {app.title}
          </h1>
          <p className="text-gray-600 mb-1">
            <strong>Company:</strong> {app.companyName}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Downloads:</strong> {app.downloads.toLocaleString()}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Rating:</strong> {app.ratingAvg}
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Reviews:</strong> {app.reviews}
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {app.description}
          </p>
        </div>
      </div>
    </div>
    );
};

export default AppDetails;