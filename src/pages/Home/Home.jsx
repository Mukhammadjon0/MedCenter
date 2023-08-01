import React from 'react'
import './Home.css'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Staff from '../../components/Staff/Staff'
import Comments from '../../components/Comments/Comments'
import Blog from '../../components/Blog/Blog'

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Staff />
            <Comments />
            <Blog />
        </>
    )
}

export default Home