import React, { useEffect, useState } from 'react';

const InstallPage = () => {

    const [installApps, setInstalleApps] = useState([]);
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("installApps") || []);
        setInstalleApps(saved);
    }, [])

    const handleUninstall = (id) => {
    const updated = installApps.filter(app => app.id !== id);
    setInstalleApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };
  
    return (
        <h1>hlw</h1>
    );
};

export default InstallPage;