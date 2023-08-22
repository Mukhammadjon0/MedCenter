import React, { useContext, useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import "./Staff.css";
import { FaFacebookF, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";
import { staff } from "../../data";
import { useNavigate } from "react-router";
import { useDoctorsQuery } from "../../services/doctorsApi";
import { BASE_URL } from "../../constant/constant";
import { StateContext } from "../../context/context";

function StaffCard() {
  const navigate = useNavigate()
  const { lang } = useContext(StateContext)
  const { data: doctors } = useDoctorsQuery()
  console.log(doctors?.message)

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
      {doctors?.message?.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="team-item" onClick={() => navigate(`/doctorInfo/${item.id}`)}>
            <div className="row g-0 bg-light rounded overflow-hidden">
              <div className="col-12 col-sm-5 h-100">
                <img
                  className="img-fluid h-100"
                  src={`${BASE_URL}${item.img}`}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                <div className="mt-auto p-4">
                  <h3>{item.name} {item.familya}</h3>
                  <h6 className="fw-normal fst-italic text-primary mb-4">
                    {item.space}
                  </h6>
                  <p className="m-0">{lang === 'uz' ? item.info_uz : lang === 'ru' ? item.info_ru : item.info_en}</p>
                </div>
                <div className="d-flex mt-auto border-top p-4 personal-links">
                  <span className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3">D</span>
                  <span className="btn btn-lg btn-danger btn-lg-square rounded-circle me-3">S</span>
                  <span className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3">Ch</span>
                  <span className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3">P</span>
                  <span className="btn btn-lg btn-danger btn-lg-square rounded-circle me-3">J</span>
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
