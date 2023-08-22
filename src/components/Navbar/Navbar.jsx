import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaClinicMedical } from 'react-icons/fa'
import { StateContext } from '../../context/context'
function Navbar() {
    const [navToggle, setNavToggle] = useState(false)
    const { lang } = useContext(StateContext)
    const navigate = useNavigate()
    return (
        <div className="container-fluid sticky-top bg-white shadow-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                    <Link to={'/'} className="navbar-brand">
                        <h1 className="m-0 text-uppercase text-primary nav-logo title-text">
                            <FaClinicMedical /> ShifoMed
                        </h1>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`navbar-collapse collapse`} id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 d-flex align-items-center justify-content-between">
                            <NavLink to="/" className="nav-item nav-link">
                                {lang === 'uz' ? "Asosiy" : lang === 'ru' ? "Главный" : 'Home'}
                            </NavLink>
                            <NavLink to="/about" className="nav-item nav-link">
                                {lang === 'uz' ? "Biz haqimizda" : lang === 'ru' ? "О нас" : 'About Us'}
                            </NavLink>
                            <NavLink to="/services" className="nav-item nav-link">
                                {lang === 'uz' ? "Xizmatlar" : lang === 'ru' ? "Услуги" : 'Services'}
                            </NavLink>
                            {/* <NavLink to="/blog" className="nav-item nav-link">
                                {lang === 'uz' ? "Yangiliklar" : lang === 'ru' ? "Новости" : 'News'}
                            </NavLink> */}
                            <NavLink to="/contact" className="nav-item nav-link">
                                {lang === 'uz' ? "Aloqa" : lang === 'ru' ? "Контакт" : 'Contact'}
                            </NavLink>
                            {/* <div className="col-12 text-center mt-5"> */}
                            <button onClick={() => navigate('/login')} className="btn btn-primary py-2 px-5" style={{ marginLeft: '30px' }} type="submit">
                                Login
                            </button>
                            {/* </div> */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar