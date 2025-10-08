import React from 'react';
import { Link } from 'react-router-dom';

const AppsPage = () => {
    return (
        <Link to="/apps" >
          <div>
            <h1>this is App page</h1>
        </div>
        </Link>
    );
};

export default AppsPage;