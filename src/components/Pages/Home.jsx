import React from 'react'
import Banner from "../Home/Banner"
import Contact from "../Home/Contact"
import Logo from "../Home/Logo"
import Standout from "../Home/Standout"
import Welcome from "../Home/Welcome"
import Plan from '../Home/Plan'
const Home = () => {
    return (
        <>
            <Banner />
            <Welcome />
            <Logo />
            <Standout />
            <Plan />
            <Contact />
        </>
    )
}

export default Home