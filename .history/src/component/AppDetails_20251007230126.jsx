import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppDetails = () => {
    const allapps = useLoaderData;
    const {id} = useParams;
    const apps = allapps.find(app => app.id === parsse )
    return (
        <div>
            
        </div>
    );
};

export default AppDetails;