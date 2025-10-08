import React from 'react';
import Banner from './Banner';
import { data, useLoaderData } from 'react-router-dom';

const Home = () => {
    const datas = useLoaderData();
    console.log(datas);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;