import React, { useContext } from 'react'
import './Blog.css'
import { useNavigate } from 'react-router-dom'
import BlogCard from './BlogCard'
import { StateContext } from '../../context/context'
function Blog() {

    const { news, lang } = useContext(StateContext)
    const navigate = useNavigate()
    const lastThreeItems = news?.slice(-3);
    const renderedItems = lastThreeItems?.map(item => (
        <BlogCard key={item.Id} {...item} />
    ));
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                    <h5
                        className="d-inline-block text-primary text-uppercase border-bottom border-5 title-text"
                    >
                        {lang === 'uz' ? "Yangiliklar" : lang === 'ru' ? "Новости" : 'News'}
                    </h5>
                    <h1 className="display-4 title-text">
                        {lang === 'uz' ? "Bizning Eng So'nggi Tibbiy Xabarlarimiz" : lang === 'ru' ? "Наши последние медицинские новости" : 'Our Latest Medical News'}
                    </h1>
                </div>
                <div className="row g-5">
                    {renderedItems}
                </div>
            </div>
            <div className="col-12 text-center mt-5">
                <button onClick={() => navigate('/blog')} className="btn btn-primary py-3 px-5">
                    {lang === 'uz' ? "Ko'proq Ko'rsatish" : lang === 'ru' ? "Показать Ещё" : 'Show More'}
                </button>
            </div>
        </div>
    )
}

export default Blog