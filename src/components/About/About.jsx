import React, { useContext } from 'react'
import './About.css'
import AboutImg from '../../assets/img/about.jpg'
import { FaMicroscope, FaProcedures, FaStethoscope, FaUserMd } from 'react-icons/fa'
import AboutSlider from './AboutSlider'
import { StateContext } from '../../context/context'
function About() {
    const { lang } = useContext(StateContext)
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
                        <div className="position-relative h-100 h-100 rounded">
                            {/* <img className="position-absolute w-100 h-100 rounded" src={AboutImg} style={{ objectFit: 'cover' }} /> */}
                            <AboutSlider />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="mb-4">
                            <h5
                                className="d-inline-block text-primary text-uppercase border-bottom border-5 title-text"
                            >
                                {lang === 'uz' ? "Biz haqimizda" : lang === 'ru' ? "О нас" : 'About'}
                            </h5>
                            <h1 className="display-4 title-text">
                                {lang === 'uz' ? "O'zingiz Va Oilangiz Uchun Eng Yaxshi Tibbiy Yordam" : lang === 'ru' ? "Лучшее медицинское обслуживание для вас и вашей семьи" : 'The Best Medical Care for You and Your Family'}
                            </h1>
                        </div>
                        <p>
                            Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                            dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam
                            diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem
                            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                            tempor consetetur takimata eirmod, dolores takimata consetetur
                            invidunt magna dolores aliquyam dolores dolore. Amet erat amet et
                            magna
                        </p>
                        <div className="row g-3 pt-3">
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <FaUserMd className='text-primary mb-3 about-icon' />
                                    <h6 className="mb-0">
                                        {lang === 'uz' ? "Malakali" : lang === 'ru' ? "Квалифицированный" : 'Qualified'}
                                        <small className="d-block text-primary"
                                        >{lang === 'uz' ? "Shifokorlar" : lang === 'ru' ? "Врачи" : 'Doctors'}</small>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <FaProcedures className='text-primary mb-3 about-icon' />
                                    <h6 className="mb-0">
                                        {lang === 'uz' ? "Favqulodda" : lang === 'ru' ? "Экстренные" : 'Emergency'}
                                        <small className="d-block text-primary"
                                        >{lang === 'uz' ? "Xizmatlar" : lang === 'ru' ? "Службы" : 'Services'}</small>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <FaMicroscope className='text-primary mb-3 about-icon' />
                                    <h6 className="mb-0">
                                        {lang === 'uz' ? "Tog'ri" : lang === 'ru' ? "Правильный" : 'True'}
                                        <small className="d-block text-primary"
                                        >{lang === 'uz' ? "Tashxis" : lang === 'ru' ? "Диагноз" : 'Diagnosis'}</small>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <FaStethoscope className='text-primary mb-3 about-icon' />
                                    <h6 className="mb-0">
                                        {lang === 'uz' ? "Tashqi" : lang === 'ru' ? "Внешний" : 'External'}
                                        <small className="d-block text-primary"
                                        >{lang === 'uz' ? "Tekshiruv" : lang === 'ru' ? "осмотр" : 'Inspection'}</small>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About