import React, { useContext } from 'react'
import './Contact.css'
import { FaEnvelopeOpen, FaLocationArrow, FaPhone } from 'react-icons/fa'
import { StateContext } from '../../context/context'
function Contact() {
    const { contact, lang } = useContext(StateContext)
    return (
        <div class="container-fluid pt-5">
            <div class="container">
                <div class="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5
                        class="d-inline-block text-primary text-uppercase border-bottom border-5"
                    >
                        {lang === 'uz' ? "Savollaringiz bormi?" : lang === 'ru' ? "Любые вопросы?" : 'Any Questions?'}
                    </h5>
                    <h1 class="display-4">
                        {lang === 'uz' ? "Iltimos, biz bilan bog'laning" : lang === 'ru' ? "Пожалуйста, не стесняйтесь обращаться к нам" : 'Please Feel Free To Contact Us'}
                    </h1>
                </div>
                <div class="row g-5 mb-5">
                    <div class="col-lg-4">
                        <div
                            class="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                            style={{ height: "200px" }}
                        >
                            <div
                                class="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                                style={{ width: "100px", height: "100px" }}
                            >
                                <FaLocationArrow className='text-white contact-icons' />
                            </div>
                            <h6 class="mb-0">{contact?.address}</h6>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div
                            class="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                            style={{ height: "200px" }}
                        >
                            <div
                                class="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                                style={{ width: "100px", height: "100px" }}
                            >
                                <FaPhone className='text-white contact-icons' />
                            </div>
                            <h6 class="mb-0">{contact?.phone_clinica}</h6>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div
                            class="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
                            style={{ height: "200px" }}
                        >
                            <div
                                class="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4"
                                style={{ width: "100px", height: "100px" }}
                            >
                                <FaEnvelopeOpen className='text-white contact-icons' />
                            </div>
                            <h6 class="mb-0">{contact?.email}</h6>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12" style={{ height: "500px" }}>
                        <div class="position-relative h-100">
                            <iframe
                                class="position-relative w-100 h-100"
                                src={contact?.locatsiya}
                                frameborder="0"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                aria-hidden={"false"}
                                tabindex="0"
                            ></iframe>
                        </div>
                    </div>
                </div>
                {/* <div class="row justify-content-center position-relative" style="margin-top: -200px; z-index: 1;">
                    <div class="col-lg-8">
                        <div class="bg-white rounded p-5 m-5 mb-0">
                            <form>
                                <div class="row g-3">
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control bg-light border-0" placeholder="Your Name" style="height: 55px;">
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="email" class="form-control bg-light border-0" placeholder="Your Email" style="height: 55px;">
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control bg-light border-0" placeholder="Subject" style="height: 55px;">
                                    </div>
                                    <div class="col-12">
                                        <textarea class="form-control bg-light border-0" rows="5" placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>  */}
            </div>
        </div>
    )
}

export default Contact