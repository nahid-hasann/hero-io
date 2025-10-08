import React, { useEffect, useState } from 'react';

const InstallPage = () => {
    const [installApps, setInstalleApps] = useState([]);
    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem("installApps"));
      setin
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default InstallPage;