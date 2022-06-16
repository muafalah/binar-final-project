import React from 'react'
import Category from '../../Components/LandingPage/Category/Category'
import CTABanner from '../../Components/LandingPage/CTABanner/CTABanner'
import Featured from '../../Components/LandingPage/Featured/Featured'
import NewProduct from '../../Components/LandingPage/NewProduct/NewProduct'
import Slider from '../../Components/LandingPage/Slider/Slider'
import Layout from '../Layout'
import style from './LandingPage.module.css'

const LandingPage = () => {
    return (
        <>
            <Layout>
                <section id="Slider-LandingPage">
                    <Slider />
                </section>
                <section id="Category-LandingPage">
                    <Category />
                </section>
                <section id="NewProduct-LandingPage">
                    <NewProduct />
                </section>
                <section id="Featured-LandingPage">
                    <Featured />
                </section>
                <section id="CTABanner-LandingPage">
                    <CTABanner />
                </section>
            </Layout>
        </>
    )
}

export default LandingPage