import React, { useContext } from 'react';
import './Main.css';
import { FaMicroscope, FaProcedures, FaStethoscope, FaUserMd } from 'react-icons/fa';
import { StateContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

function ClinicCard({ name, title, img, index }) {
    const navigate = useNavigate()
    const { lang } = useContext(StateContext);
    const isEvenIndex = index % 2 === 0;

    const handleClick = () => {
        navigate('/med')
    }

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row gx-5">
                    <div className={`col-lg-5 mb-5 mb-lg-0 ${isEvenIndex ? 'image-left' : 'image-right'}`} style={{ minHeight: '500px' }}>
                        <div className="position-relative h-100 h-100 rounded">
                            <img onClick={handleClick} className="position-absolute w-100 h-100 rounded cursor-pointer" src={img} style={{ objectFit: 'cover' }} alt="img" />
                            {/* <AboutSlider /> */}
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="mb-4">
                            <h3 className="d-inline-block text-primary text-uppercase border-bottom border-5 title-text">{name}</h3>
                        </div>
                        <p>{title}</p>
                        <div className="row g-3 pt-3">
                            {/* Rest of your code for post details */}
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <FaUserMd className="text-primary mb-3 about-icon" />
                                    <h6 className="mb-0">
                                        {lang === 'uz' ? 'Malakali' : lang === 'ru' ? 'Квалифицированный' : 'Qualified'}
                                        <small className="d-block text-primary">{lang === 'uz' ? 'Shifokorlar' : lang === 'ru' ? 'Врачи' : 'Doctors'}</small>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <FaProcedures className="text-primary mb-3 about-icon" />
                                    <h6 className="mb-0">
                                        {lang === 'uz' ? 'Favqulodda' : lang === 'ru' ? 'Экстренные' : 'Emergency'}
                                        <small className="d-block text-primary">{lang === 'uz' ? 'Xizmatlar' : lang === 'ru' ? 'Службы' : 'Services'}</small>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <FaMicroscope className="text-primary mb-3 about-icon" />
                                    <h6 className="mb-0">
                                        {lang === 'uz' ? "Tog'ri" : lang === 'ru' ? 'Правильный' : 'True'}
                                        <small className="d-block text-primary">{lang === 'uz' ? 'Tashxis' : lang === 'ru' ? 'Диагноз' : 'Diagnosis'}</small>
                                    </h6>
                                </div>
                            </div>
                            <div className="col-sm-3 col-6">
                                <div className="bg-light text-center rounded-circle py-4">
                                    <FaStethoscope className="text-primary mb-3 about-icon" />
                                    <h6 className="mb-0">
                                        {lang === 'uz' ? 'Tashqi' : lang === 'ru' ? 'Внешний' : 'External'}
                                        <small className="d-block text-primary">{lang === 'uz' ? 'Tekshiruv' : lang === 'ru' ? 'осмотр' : 'Inspection'}</small>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClinicCard;
