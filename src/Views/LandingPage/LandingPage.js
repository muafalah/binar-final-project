import React from 'react'
import Layout from '../Layout'
import Carousel from 'react-bootstrap/Carousel';
import testimage from '../../Assets/image/img-logo.png'
import Card from 'react-bootstrap/Card';
import style from './LandingPage.module.css'
import { CardCategory } from '../../Components/Card/CardCategory/CardCategory';
import { Row, Col, Container, Button } from 'react-bootstrap';
import CardProduct from '../../Components/Card/CardProduct/CardProduct';
import { CardFeatures } from '../../Components/Card/CardFeatures/CardFeatures';

const LandingPage = () => {
    return (
        <>
            <Layout>
                <section id="Slider-LandingPage">
                <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={testimage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={testimage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={testimage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </section>
                <section id="Category-LandingPage">
                <h2 className={style.header_txtcategory}>Category</h2>
                <Container className='d-flex align-items-center justify-content-center'>
                <Row className={style.CardCategory}>
                        <Col><CardCategory/></Col>
                        <Col><CardCategory/></Col>
                        <Col><CardCategory/></Col>
                        <Col><CardCategory/></Col>
                        <Col><CardCategory/></Col>
                        <Col><CardCategory/></Col>
                        <Col><CardCategory/></Col>
                        <Col><CardCategory/></Col>
                    </Row>
                </Container>
                </section>
                <section id="NewProduct-LandingPage">
                    <h2 className={style.header_txt}>Produk Terbaru</h2>
                    <Container className='d-flex align-items-center justify-content-center'>
                    <Row className={style.cardproduct}>
                        <Col><CardProduct/></Col>
                        <Col><CardProduct/></Col>
                        <Col><CardProduct/></Col>
                        <Col><CardProduct/></Col>
                        <Col><CardProduct/></Col>
                        <Col><CardProduct/></Col>
                        <Col><CardProduct/></Col>
                        <Col><CardProduct/></Col>
                        <Col><CardProduct/></Col>
                        <Col><CardProduct/></Col>
                    </Row>
                    </Container>
                </section>
                <section id="Featured-LandingPage">
                    <h2 className={style.header_txtfeature}>Keuntungan Jual Beli di SecondGadget</h2>
                    <Container className='d-flex align-items-center justify-content-center'>
                    <Row className={style.cardfeatures}>
                        <Col><CardFeatures/></Col>
                        <Col><CardFeatures/></Col>
                        <Col><CardFeatures/></Col>
                        <Col><CardFeatures/></Col>
                    </Row>
                    </Container>

                </section>
                <section id="CTABanner-LandingPage">
                <Card body className={style.cardbanner}>
                  <Row className={style.banner}>
                    <Col>
                    <h4>Tunggu apa lagi? Daftarkan dirimu dan bergabung bersama kami!</h4>
                    <p>Jual beli produk Apple jadi lebih mudah hanya di SecondGadget</p>
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center'>
                    <Button>Daftar Sekarang</Button></Col>
                  </Row>
                </Card>
                </section>
            </Layout>
        </>
    )
}

export default LandingPage