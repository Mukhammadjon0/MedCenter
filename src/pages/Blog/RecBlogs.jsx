import React from 'react'
import { BASE_URL } from '../../constant/constant'
import './Blog.css'
import { useNavigate } from 'react-router-dom'

function RecBlogs({ img, short_desc, title, Id }) {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/blogDetail/${Id}`)} className="d-flex rounded overflow-hidden mb-3 recent-card">
            <img className="img-fluid" src={`${BASE_URL}${img}`} style={{ width: "100px", height: "100px", objectFit: "cover" }} alt="" />
            <p className="h5 d-flex align-items-center bg-light px-3 mb-0">{title}
            </p>
        </div>
    )
}

export default RecBlogs