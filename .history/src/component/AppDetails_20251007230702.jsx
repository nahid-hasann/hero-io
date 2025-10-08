import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppDetails = () => {
    const allapps = useLoaderData();
    const {id} = useParams();
    const app = allapps.find( item => item.id === parseInt(id) );

    return (
       
    );
};

export default AppDetails;