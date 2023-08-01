import React, { useContext } from 'react'
import { StateContext } from '../../context/context'

function ServicesCard({ icon, title_ru, title_uz, title_en, text_ru, text_uz, text_en, }) {
    const { lang } = useContext(StateContext)
    return (
        <div className="col-lg-4 col-md-6">
            <div
                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
                <div className="service-icon mb-4 text-white service-icons">
                    {icon}
                </div>
                <h4 className="mb-3">
                    {lang === 'uz' ? title_uz : lang === 'ru' ? title_ru : title_en}
                </h4>
                <p className="m-0">
                    {lang === 'uz' ? text_uz : lang === 'ru' ? text_ru : text_en}
                </p>
                {/* <!-- <a className="btn btn-lg btn-primary rounded-pill" href="">
                                <i className="bi bi-arrow-right"></i>
                            </a> --> */}
            </div>
        </div>
    )
}

export default ServicesCard