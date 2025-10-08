import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppDetails = () => {
    const allapps = useLoaderData;
    const {id} = useParams;
    const app = 
    return (
        <div>
            
        </div>
    );
};

export default AppDetails;