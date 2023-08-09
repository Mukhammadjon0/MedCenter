import React, { useContext } from 'react'
import { StateContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function ServicesCard({ icon, title_ru, title_uz, title_en, text_ru, text_uz, text_en, id }) {
    const { lang } = useContext(StateContext)
    const navigate = useNavigate()
    return (
        <div className="col-lg-4 col-md-6 cursor-pointer">
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
                <button className="btn btn-lg btn-primary rounded-pill my-2" onClick={() => navigate(`/serviceDetail/${id}`)}>
                    <HiOutlineArrowNarrowRight />
                </button>
            </div>
        </div>
    )
}

export default ServicesCard