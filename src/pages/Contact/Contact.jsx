import React, { useContext } from 'react'
import './Contact.css'
import { FaEnvelopeOpen, FaLocationArrow, FaPhone } from 'react-icons/fa'
import { StateContext } from '../../context/context'
import { useContactQuery } from '../../services/contactsApi'
function Contact() {
    const { lang } = useContext(StateContext)
    const { data: contact } = useContactQuery()
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                        <h5
                            className="d-inline-block text-primary text-uppercase border-bottom border-5"
                        >
                            {lang === 'uz' ? "Savollaringiz bormi?" : lang === 'ru' ? "Любые вопросы?" : 'Any Questions?'}
                        </h5>
                        <h1 className="display-4">
                            {lang === 'uz' ? "Iltimos, biz bilan bog'laning" : lang === 'ru' ? "Пожалуйста, не стесняйтесь обращаться к нам" : 'Please Feel Free To Contact Us'}
                        </h1>
                    </div>
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div
                                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                                style={{ height: "200px" }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                                    style={{ width: "100px", height: "100px" }}
                                >
                                    <FaLocationArrow className='text-white contact-icons' />
                                </div>
                                <h6 className="mb-0">{lang === "uz"
                                    ? contact?.result[0]?.address_uz
                                    : lang === "ru"
                                        ? contact?.result[0]?.address_ru
                                        : contact?.result[0]?.address_en
                                }</h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div
                                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                                style={{ height: "200px" }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                                    style={{ width: "100px", height: "100px" }}
                                >
                                    <FaPhone className='text-white contact-icons' />
                                </div>
                                <h6 className="mb-0">{contact?.result[0]?.phone}</h6>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div
                                className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                                style={{ height: "200px" }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                                    style={{ width: "100px", height: "100px" }}
                                >
                                    <FaEnvelopeOpen className='text-white contact-icons' />
                                </div>
                                <h6 className="mb-0">{contact?.result[0]?.email}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{ height: "500px" }}>
                            <div className="position-relative h-100">
                                <iframe
                                    className="position-relative w-100 h-100"
                                    src={contact?.result[0]?.google_link}
                                    frameBorder="0"
                                    style={{ border: "0" }}
                                    allowFullScreen={true}
                                    aria-hidden={false}
                                    tabIndex="0"
                                    loading='lazy'
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact