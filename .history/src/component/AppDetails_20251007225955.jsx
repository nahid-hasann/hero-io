import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppDetails = () => {
    const allapps = useLoaderData;
    const {id} = useParams;
    
    return (
        <div>
            
        </div>
    );
};

export default AppDetails;