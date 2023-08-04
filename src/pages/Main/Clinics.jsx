import React, { useContext, useEffect, useState } from 'react'
import './Main.css'

import AboutImg from '../../assets/img/about.jpg'
import { medCenters } from '../../data'
import ClinicCard from './ClinicCard'
import axios from 'axios'
function Clinics() {
    const getClicks = () => {
        const body = {
            method: 'get_clink',
            params: {

            }
        }
        axios.post("http://127.0.0.1:8123/main/", body)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getClicks()
    }, [])

    return (
        <div>
            {medCenters.map((item, index) => <ClinicCard key={index} {...item} />)}

        </div>
    )
}

export default Clinics