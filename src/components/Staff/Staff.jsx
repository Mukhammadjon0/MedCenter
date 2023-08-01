import React, { useContext } from 'react'
import './Staff.css'
import { staff } from '../../data'
import StaffCard from './StaffCard'
import { StateContext } from '../../context/context'
function Staff() {
    const { lang } = useContext(StateContext)
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5
                        className="d-inline-block text-primary text-uppercase border-bottom border-5 title-text"
                    >
                        {lang === 'uz' ? "Bizning Doktorlar" : lang === 'ru' ? "Наши Доктора" : 'Our Doctors'}
                    </h5>
                    <h1 className="display-4 title-text">
                        {lang === 'uz' ? "Malakali Sog'liqni Saqlash Mutaxassislari" : lang === 'ru' ? "Квалифицированные медицинские работники" : 'Qualified Healthcare Professionals'}
                    </h1>
                </div>
                <div className="owl-carousel team-carousel position-relative">
                    <StaffCard />
                </div>
            </div>
        </div >
    )
}

export default Staff