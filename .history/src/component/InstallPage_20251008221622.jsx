import React, { useEffect, useState } from 'react';

const InstallPage = () => {
    const [installApps, setInstalleApps] = useState([]);
    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem(""))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default InstallPage;