import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blog } from '../../data'
import axios from 'axios';
import { BASE_URL } from '../../constant/constant';
import { StateContext } from '../../context/context';
import RecBlogs from './RecBlogs';
import './Blog.css'

function BlogDetail() {
    const { lang } = useContext(StateContext)
    const { id } = useParams();
    const [newDetail, setNewDetail] = useState({})
    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/new/?lan=${lang}&pk=${id}`);
            const data = response.data;
            setNewDetail(data?.data)
            // Handle the data as needed
        } catch (error) {
            console.error('Error:', error);
            // Handle the error
        }
    };
    useEffect(() => {
        fetchData();
    }, [id])
    console.log(newDetail)
    const { news } = useContext(StateContext)
    console.log(news)
    // Use the slice function to get the last three objects
    const lastThreeItems = news?.slice(-4);
    // Use the map function to iterate over the last three objects
    const recentItems = lastThreeItems?.map(item => (
        <RecBlogs key={item.Id} {...item} />
    ));
    return (
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-8">
                    {/* <!-- Blog Detail Start --> */}
                    <div className="mb-5">
                        <img className="img-fluid w-100 rounded mb-5" src={`${BASE_URL}${newDetail.img}`} alt="img" />
                        <h1 className="mb-4">{newDetail.title}</h1>
                        <p>{newDetail.desc}</p>
                    </div>
                    {/* <!-- Blog Detail End --> */}
                </div>

                {/* <!-- Sidebar Start --> */}
                <div className="col-lg-4">
                    {/* <!-- Search Form Start --> */}
                    {/* <div className="mb-5">
                        <div className="input-group">
                            <input type="text" className="form-control p-3" placeholder="Keyword" />
                            <button className="btn btn-primary px-3"><i className="fa fa-search"></i></button>
                        </div>
                    </div> */}
                    {/* <!-- Search Form End --> */}

                    {/* <!-- Category Start --> */}
                    {/* <div className="mb-5">
                        <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">Categories</h4>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="h5 bg-light rounded py-2 px-3 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Web Design</a>
                            <a className="h5 bg-light rounded py-2 px-3 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Web Development</a>
                            <a className="h5 bg-light rounded py-2 px-3 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Web Development</a>
                            <a className="h5 bg-light rounded py-2 px-3 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Keyword Research</a>
                            <a className="h5 bg-light rounded py-2 px-3 mb-2" href="#"><i className="fa fa-angle-right me-2"></i>Email Marketing</a>
                        </div>
                    </div> */}
                    {/* <!-- Category End --> */}

                    {/* <!-- Recent Post Start --> */}
                    <div className="mb-5">
                        <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">
                            {lang === 'uz' ? "So'nggi Xabarlar" : lang === 'ru' ? "Последние Новости" : 'Recent Post'}
                        </h4>
                        {recentItems}
                    </div>
                    {/* <!-- Recent Post End --> */}
                </div>
                {/* <!-- Sidebar End --> */}
            </div>
        </div>
    )
}

export default BlogDetail