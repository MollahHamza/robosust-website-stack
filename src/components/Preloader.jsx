import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hide preloader after page loads
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="loading" id="preloader">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="loader-box">
                    <div className="loader"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
