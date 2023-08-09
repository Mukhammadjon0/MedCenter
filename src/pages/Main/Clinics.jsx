import React, { useContext, useEffect, useState } from 'react'
import './Main.css'

import AboutImg from '../../assets/img/about.jpg'
import { medCenters } from '../../data'
import ClinicCard from './ClinicCard'
import axios from 'axios'
function Clinics() {

    const [clinik, setClinik] = useState()
    const getClicks = () => {
        const body = {
            method: 'get_clink',
            params: {

            }
        }
        axios.post("https://najottalim-26e0a6445d60.herokuapp.com/main/", body)
            .then(res => {
                setClinik(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getClicks()
    }, [])

    console.log(clinik?.data.clink)

    return (
        <div>
            {clinik?.data.clink.map((item, index) => <ClinicCard key={index} item={item} />)}
        </div>
    )
}

export default Clinics