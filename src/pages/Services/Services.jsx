import React, { useContext } from 'react'
import './Services.css'
import Comments from '../../components/Comments/Comments'
import { services } from '../../data'
import { StateContext } from '../../context/context'
import ServicesCard from '../../components/Services/ServicesCard'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

function ServicesPage() {
    const { lang } = useContext(StateContext)
    const navigate = useNavigate()
    return (
        <>
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
                        {services?.map(item => <ServicesCard key={item.id} {...item} />)}
                    </div>
                </div>
            </div >
        </>
    )
}

export default ServicesPage