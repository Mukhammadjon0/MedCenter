import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import './Comments.css'
import { comments } from "../../data";
import { FaQuoteLeft } from "react-icons/fa";
function CommentCard() {
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
        }, 4000);

        return () => {
            clearInterval(autoplayInterval);
        };
    }, []);
    return (
        <Swiper
            pagination={{
                dynamicBullets: true,
                clickable: true
            }}
            ref={swiperRef}
            modules={[Pagination]}
            className="mySwiper"
        >
            {comments?.map(item =>
                <SwiperSlide key={item.id}>
                    <div className="testimonial-item text-center">
                        <div className="position-relative mb-5">
                            <img
                                className="img-fluid rounded-circle mx-auto"
                                src={item.img}
                                alt="img"
                            />
                            <div
                                className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                                style={{ width: "40px", height: "40px" }}
                            >
                                <FaQuoteLeft className='text-primary' />
                            </div>
                        </div>
                        <p className="fs-4 fw-normal">{item.text}</p>
                        <hr className="w-25 mx-auto" />
                        <h3>{item.name}</h3>
                        <h6 className="fw-normal text-primary mb-3">{item.space}</h6>
                    </div>
                </SwiperSlide>
            )}
        </Swiper>
    )
}

export default CommentCard