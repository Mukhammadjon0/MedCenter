import React, { useEffect, useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import './BackTop.css'
function BackTop() {
    const [showButton, setShowButton] = useState(false);

    // function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        setShowButton(scrollPosition > 300);
    };
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div onClick={handleClick} className={`btn btn-lg btn-primary btn-lg-square back-to-top ${showButton ? 'show' : 'hidden'}`}>
            <BsArrowUp />
        </div>
    )
}

export default BackTop