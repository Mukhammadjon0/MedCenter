import React, { useContext } from 'react'
import './Main.css'

import AboutImg from '../../assets/img/about.jpg'
import { medCenters } from '../../data'
import ClinicCard from './ClinicCard'
function Clinics() {
    return (
        <div>
            {medCenters.map((item, index) => <ClinicCard key={index} {...item} />)}

        </div>
    )
}

export default Clinics