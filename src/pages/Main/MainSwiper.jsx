import React, { useContext, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Med1 from '../../assets/img/med.jpg'
import Med2 from '../../assets/img/med_4k2.jpg'
import Med3 from '../../assets/img/med+4k3.jpg'
import Med4 from '../../assets/img/med_4k_3.png'

import "swiper/css";
import 'swiper/css/pagination';
import './Main.css'
import { StateContext } from '../../context/context';



function MainSwiper() {
    const { lang } = useContext(StateContext)
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
            ref={swiperRef}
        >
            <SwiperSlide>
                <div className="w-100 h-100 d-flex align-items-center py-5" style={{ backgroundImage: `url(${Med1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="col-lg-8 text-center text-lg-start mx-5">
                        <h1 className="display-1 text-white mb-md-4 mx-5">
                            {lang === 'uz' ? "Ishonchli" : lang === 'ru' ? "Надежный" : 'Reliable'}
                        </h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-100 h-100 d-flex align-items-center py-5" style={{ backgroundImage: `url(${Med2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="col-lg-8 text-center text-lg-start mx-5">
                        <h1 className="display-1 text-white mb-md-4 mx-5">
                            {lang === 'uz' ? "Malakali" : lang === 'ru' ? "Квалифицированный" : 'Qualified'}
                        </h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-100 h-100 d-flex align-items-center justify-content-end py-5" style={{ backgroundImage: `url(${Med4})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                    <div className="col-lg-8 text-end text-lg-right mx-5">
                        <h1 className="display-1 text-white mb-md-4 mx-5 main__title">
                            {lang === 'uz' ? "Malakali" : lang === 'ru' ? "Квалифицированный" : 'Qualified'}
                        </h1>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default MainSwiper