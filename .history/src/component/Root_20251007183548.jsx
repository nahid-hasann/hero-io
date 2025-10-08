import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;