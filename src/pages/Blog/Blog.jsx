import React, { useContext } from 'react'
import './Blog.css'
import BlogCard from '../../components/Blog/BlogCard'
import { StateContext } from '../../context/context'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
function Blog() {
    const { news, lang } = useContext(StateContext)
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
                        <h5
                            className="d-inline-block text-primary text-uppercase border-bottom border-5"
                        >
                            {lang === 'uz' ? "Yangiliklar" : lang === 'ru' ? "Новости" : 'News'}
                        </h5>
                        <h1 className="display-4">
                            {lang === 'uz' ? "Bizning Eng So'nggi Tibbiy Xabarlarimiz" : lang === 'ru' ? "Наши последние медицинские новости" : 'Our Latest Medical News'}
                        </h1>
                    </div>
                    <div className="row g-5">
                        {news?.map(item => <BlogCard key={item.id} {...item} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog