import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const GoToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const top = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const listenToScroll = () => {
        const heightToHidden = 200;
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, []);

    return (
        <>
            {isVisible && (
                <div>
                    <button onClick={top} className='fixed bottom-4 right-4 z-50 text-white bg-violet-600 border-cyan-700 rounded-full p-5 w-8 h-8 flex items-center justify-center shadow-black'>
                        <FontAwesomeIcon icon={faArrowUp}  className='animate-pulse'/>
                    </button>
                </div>
            )}
        </>
    );
}

export default GoToTop;
