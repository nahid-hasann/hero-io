import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <Hea
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;