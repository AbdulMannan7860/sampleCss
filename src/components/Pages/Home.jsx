import React from 'react'
import Banner from "../Home/Banner"
import Contact from "../Home/Contact"
import Logo from "../Home/Logo"
import Standout from "../Home/Standout"
import Welcome from "../Home/Welcome"
import Seprator from "../Constants/Seprator"
const Home = () => {
    return (
        <>
            <Banner />
            <Welcome />
            <Seprator />
            <Standout />
            <Logo />
            <Contact />
        </>
    )
}

export default Home