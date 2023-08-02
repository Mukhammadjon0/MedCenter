import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Med1 from '../../assets/img/med.jpg'
import Med2 from '../../assets/img/med_4k2.jpg'
import Med3 from '../../assets/img/med+4k3.jpg'

import "swiper/css";
import 'swiper/css/pagination';
import './Main.css'



function MainSwiper() {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;

        const autoplayInterval = setInterval(() => {
            if (swiperInstance) {
                if (swiperInstance.activeIndex === swiperInstance.slides.length - 1) {
                    swiperInstance.slideTo(0);
                } else {
                    swiperInstance.slideNext();
                }
            }
        }, 2000);

        return () => {
            clearInterval(autoplayInterval);
        };
    }, []);
    return (
        <Swiper
            className="mySwiper"
            ref={swiperRef} >
            <SwiperSlide><img src={Med1} alt="1" /></SwiperSlide>
            <SwiperSlide><img src={Med2} alt="2" /></SwiperSlide>
            <SwiperSlide><img src={Med3} alt="3" /></SwiperSlide>
        </Swiper>
    )
}

export default MainSwiper