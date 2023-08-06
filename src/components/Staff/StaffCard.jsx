import React, { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import "./Staff.css";
import { FaFacebookF, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";
import { staff } from "../../data";

function StaffCard({ img, name, space, text }) {
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
      slidesPerView={2}
      // loop={true}
      grabCursor={true}
      spaceBetween={30}
      ref={swiperRef}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        700: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        990: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {staff?.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="team-item">
            <div className="row g-0 bg-light rounded overflow-hidden">
              <div className="col-12 col-sm-5 h-100">
                <img
                  className="img-fluid h-100"
                  src={item.img}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                <div className="mt-auto p-4">
                  <h3>{item.name}</h3>
                  <h6 className="fw-normal fst-italic text-primary mb-4">
                    {item.space}
                  </h6>
                  <p className="m-0">{item.text}</p>
                </div>
                <div className="doctor-works ps-4 pe-4">
                  <span className="work-day d-flex justify-content-between">
                    Dushanba <span className="work-time">10:00 17:00</span>
                  </span>
                  <span className="work-day d-flex mt-1 justify-content-between">
                    Chorshanba <span className="work-time">10:00 17:00</span>
                  </span>
                  <span className="work-day d-flex mt-1 justify-content-between">
                    Juma <span className="work-time">10:00 17:00</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default StaffCard;
