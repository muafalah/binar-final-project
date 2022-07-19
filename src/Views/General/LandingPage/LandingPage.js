import React, {useEffect} from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import CardCategory from '../../../Components/Card/CardCategory/CardCategory'
import CardProduct from '../../../Components/Card/CardProduct/CardProduct'
import SliderCarousel from '../../../Components/Slider/SliderCarousel/SliderCarousel'
import { dataCardProduct, dataCarousel, dataCategory, dataFeatured } from '../../DataDummy'
import Layout from '../../Layout'
import style from './LandingPage.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


const LandingPage = () => {
    useEffect(() => {
        Aos.init({duration: 1800})
    }, []);

    const space = "mt-lg-5 mb-lg-5 mt-md-5 mb-md-5 mt-4 mb-4"

    return (
        <Layout>
            <section id="Slider-LandingPage">
                <SliderCarousel data={dataCarousel} />
            </section>
            <section id="Category-LandingPage" className={space}>
                <Container>
                    <h4>Kategori</h4>
                    <div data-aos="flip-down">
                    <Row className={'gap'}>
                        {dataCategory?.map((value, index) => {
                            return (
                                <Col lg={2} md={3} sm={4} xs={4} key={index} className={'pt-2 pb-2'}>
                                    <CardCategory value={value} />
                                </Col>
                            )
                        })}
                    </Row>
                    </div>
                </Container>
            </section>
            <section id="NewProduct-LandingPage" className={space}>
                <Container>
                    <h4>Produk Terbaru</h4>
                    <div data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                    >
                    <Row >
                        {dataCardProduct?.map((value, index) => {
                            return (
                                <Col lg={3} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                    <CardProduct value={value} type="default" />
                                </Col>
                            )
                        })}
                    </Row>
                    </div>
                </Container>
            </section>
            <section id="Featured-LandingPage" className={space}>
                <Container>
                    <h4>Keuntungan Jual Beli di <span style={{ color: "#FB374F" }}>SecondGadget!</span></h4>
                    <Row>
                        {dataFeatured?.map((value, index) => {
                            return (
                                <Col lg={3} md={6} sm={12} xs={12} className={'pt-2 pb-2'} key={index}>
                                    <Card body className={'text-center p-0 p-md-1 ' + style.card} >
                                        <img src={value.image} height="100rem" alt="best price" />
                                        <div style={{ fontSize: "1.125rem", fontWeight: "700", color: "#FB374F" }}>{value.name}</div>
                                        <div style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{value.description}</div>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
            <section id="CTABanner-LandingPage" className={style.bg_ctabanner}>
                <Container className={'pt-5 pb-5'}>
                    <Row>
                        <Col md={6}>
                            <h2 style={{ color: "white" }}>Tunggu apa lagi? Daftarkan dirimu dan bergabung bersama kami!</h2>
                            <p style={{ fontSize: "1.125rem", fontWeight: "400", color: "white" }}>Jual beli produk apple jadi lebih mudah hanya di <b>SecondGadget!</b></p>
                        </Col>
                        <Col md={6} className={'d-flex align-items-center justify-content-md-end '}>
                            <a href="/register"><Button variant="danger">Daftar Sekarang</Button></a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default LandingPage