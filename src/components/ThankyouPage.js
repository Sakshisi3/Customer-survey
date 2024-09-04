
import React, { useEffect } from 'react';
import './../App.css'

function ThankYouScreen({ onReset }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onReset();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onReset]);

    return (
        <div className="thank-you-screen">
            <h1>Thank You for Your Time!</h1>
            <p>Redirecting to the welcome screen...</p>
        </div>
    );
}

export default ThankYouScreen;
