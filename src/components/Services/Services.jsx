import React, { useContext } from 'react'
import './Services.css'
import { FaAmbulance, FaMicroscope, FaPills, FaProcedures, FaStethoscope, FaUserMd } from 'react-icons/fa'
import { services } from '../../data'
import ServicesCard from './ServicesCard'
import { useNavigate } from 'react-router-dom'
import { StateContext } from '../../context/context'
function Services() {
    const { lang } = useContext(StateContext)
    const navigate = useNavigate()
    const lastThreeItems = services?.slice(-3);
    const renderedItems = lastThreeItems?.map(item => (
        <ServicesCard key={item.id} {...item} />
    ));
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5
                        className="d-inline-block text-primary text-uppercase border-bottom border-5 title-text"
                    >
                        {lang === 'uz' ? "Xizmatlar" : lang === 'ru' ? "Услуги" : 'Services'}
                    </h5>
                    <h1 className="display-4 title-text">
                        {lang === 'uz' ? "Sifatli Tibbiy Xizmatlar" : lang === 'ru' ? "Качественные медицинские услуги" : 'Quality Medical Services'}
                    </h1>
                </div>
                <div className="row g-5">
                    {renderedItems}
                </div>
                <div className="col-12 text-center mt-5">
                    <button onClick={() => navigate('/services')} className="btn btn-primary py-3 px-5">
                        {lang === 'uz' ? "Ko'proq Ko'rsatish" : lang === 'ru' ? "Показать Ещё" : 'Show More'}
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Services