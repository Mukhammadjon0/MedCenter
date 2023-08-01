import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import './About.css'

// import required modules
import { EffectCreative } from "swiper";
import { about } from "../../data";

function AboutSlider() {
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
        }, 3000);

        return () => {
            clearInterval(autoplayInterval);
        };
    }, []);
    return (
        <Swiper
            grabCursor={true}
            effect={"creative"}
            loop={true}
            ref={swiperRef}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
        >
            {about.map((item, index) => (
                <SwiperSlide key={index}>
                    <img
                        width={"100%"}
                        height={"100%"}
                        src={item.img}
                        alt="img"
                        style={{ objectFit: 'cover' }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default AboutSlider