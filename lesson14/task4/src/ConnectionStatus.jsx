import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
    const [connectionStatus, setConnectionStatus] = useState('online');

    useEffect(() => {

      
        const onlineStatus = (e) => {
            setConnectionStatus(e.type);
        }
        
        window.addEventListener('online', onlineStatus);
        
        const offlineStatus = (e) => {
            setConnectionStatus(e.type);
        }
        
        window.addEventListener('offline', offlineStatus);

        return () => {
            window.removeEventListener('online', onlineStatus);
            window.removeEventListener('offline', offlineStatus);
        }

    }, []);

    const classStatus = connectionStatus === 'online' 
       ? "status" 
       : "status status_offline";
   
    return (
        
        <div className={classStatus}>{connectionStatus}</div>
    )
};


export default ConnectionStatus;