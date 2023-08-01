import React from 'react'
import './Blog.css'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constant/constant'
function BlogCard({ img, title, short_desc, Id, }) {
    const navigate = useNavigate()
    return (
        <div className="col-xl-4 col-lg-6">
            <div className="bg-light rounded overflow-hidden">
                <img onClick={() => navigate(`/blogDetail/${Id}`)} className="img-fluid w-100" src={`${BASE_URL}${img}`} alt="" />
                <div className="p-4">
                    <Link className="h3 d-block mb-3" to={`/blogDetail/${Id}`}>{title}</Link>
                    <p className="m-0">{short_desc}</p>
                </div>
                {/* <!-- <div className="d-flex justify-content-between border-top p-4">
                                <div className="d-flex align-items-center">
                                    <img
                                        className="rounded-circle me-2"
                                        src="img/user.jpg"
                                        width="25"
                                        height="25"
                                        alt=""
                                    />
                                    <small>John Doe</small>
                                </div>
                                <div className="d-flex align-items-center">
                                    <small className="ms-3"
                                    ><i className="far fa-eye short_desc-primary me-1"></i>12345</small
                                    >
                                    <small className="ms-3"
                                    ><i className="far fa-comment short_desc-primary me-1"></i>123</small
                                    >
                                </div>
                            </div> --> */}
            </div>
        </div>
    )
}

export default BlogCard