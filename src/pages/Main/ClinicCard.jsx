import React, { useContext } from 'react';
import './Main.css';
import { FaArrowRight, FaMicroscope, FaProcedures, FaStethoscope, FaUserMd } from 'react-icons/fa';
import { StateContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constant/constant';

function ClinicCard({ item, index }) {
    const navigate = useNavigate()
    const { lang } = useContext(StateContext);
    const isEvenIndex = index % 2 === 0;

    const handleClick = () => {
        navigate('/med')
    }
    console.log(item)

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row gx-5">
                    <div className={`col-lg-5 mb-5 mb-lg-0 ${isEvenIndex ? 'image-left' : 'image-right'}`} style={{ minHeight: '500px' }}>
                        <div onClick={handleClick} className="position-relative h-100 h-100 rounded">
                            <img className="position-absolute w-100 h-100 rounded cursor-pointer" src={`${item[2]}`} style={{ objectFit: 'cover' }} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-7 py-2" style={{ display: "flex", flexDirection: 'column', justifyContent: "space-between", }}>
                        <div className="">
                            <div className="mb-3">
                                <h3 className="d-inline-block text-primary text-uppercase border-bottom border-5 title-text">{item[0]}</h3>
                            </div>
                            <p>{item[1]}</p>
                        </div>
                        <div className="">

                            <div className="row g-3">
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
                            <button className="btn btn-primary py-2 px-5" style={{ marginTop: '24px' }} onClick={handleClick}>
                                Batafsil   <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClinicCard;
