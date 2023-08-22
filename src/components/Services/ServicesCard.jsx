import React, { useContext } from 'react'
import { StateContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function ServicesCard({ svg, name_ru, name_uz, name_en, info_ru, info_uz, info_en, id }) {
    const { lang } = useContext(StateContext)
    const navigate = useNavigate()
    return (
        <div className="col-lg-4 col-md-6 cursor-pointer">
            <div
                className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-between text-center h-100"
                style={{ height: '100% !important' }}
            >
                <div className="service-icon mb-4 text-white service-icons" style={{ width: '150px', height: '150px' }}>
                    <div dangerouslySetInnerHTML={{ __html: svg }} />
                </div>
                <h4 className="mb-3">
                    {lang === 'uz' ? name_uz : lang === 'ru' ? name_ru : name_en}
                </h4>
                <p className="m-0">
                    {lang === 'uz' ? info_uz : lang === 'ru' ? info_ru : info_en}
                </p>
                <button className="btn btn-lg btn-primary rounded-pill my-2" onClick={() => navigate(`/serviceDetail/${id}`)}>
                    <HiOutlineArrowNarrowRight />
                </button>
            </div>
        </div>
    )
}

export default ServicesCard