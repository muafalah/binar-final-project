import React from 'react'
import { Card, Carousel, Col, Container, Row, Button } from 'react-bootstrap'
import Layout from '../Layout'
import style from './LandingPage.module.css'
import ImageBestPrice from '../../Assets/image/LandingPage/img-best-price.svg'
import ImageSecurePayment from '../../Assets/image/LandingPage/img-secure-payment.svg'
import ImageCustomerService from '../../Assets/image/LandingPage/img-customer-service.svg'
import ImageGuarantee from '../../Assets/image/LandingPage/img-guarantee.svg'
import ImageIphone from '../../Assets/image/LandingPage/img-category-iphone.svg'
import ImageIpad from '../../Assets/image/LandingPage/img-category-ipad.svg'
import ImageMac from '../../Assets/image/LandingPage/img-category-mac.svg'
import ImageWatch from '../../Assets/image/LandingPage/img-category-watch.svg'
import ImageAirpods from '../../Assets/image/LandingPage/img-category-airpods.svg'
import ImageOther from '../../Assets/image/LandingPage/img-category-other.svg'
import CardProduct from '../../Components/Card/CardProduct/CardProduct'

const dataCarousel = [
  {
    name: "Carousel 1",
    image: "https://assets-us-01.kc-usercontent.com/a7507759-f4f5-0038-8fff-c1db251108c1/3404013b-2027-422e-b244-a177f5df4b16/Free%20Admin-OKT_Web_Banner.jpg",
    link: "#",
  },
  {
    name: "Carousel 2",
    image: "https://assets-us-01.kc-usercontent.com/a7507759-f4f5-0038-8fff-c1db251108c1/a9f4ef90-dc64-41a1-8a93-735618c8ace6/Free%20Admin%20Nationwide%20-%20May_WEB%20BANNER.jpg",
    link: "#",
  },
  {
    name: "Carousel 3",
    image: "https://assets-us-01.kc-usercontent.com/a7507759-f4f5-0038-8fff-c1db251108c1/0484de4f-86d4-4e77-afd9-389a31fcd452/Telering%20-%20Cond%20Zero%20-%20rev_WEB%20BANNER.jpg",
    link: "#",
  },
]

const dataCategory = [
  {
    id_category: 1,
    name: "iPhone",
    image: ImageIphone,
  },
  {
    id_category: 2,
    name: "iPad",
    image: ImageIpad,
  },
  {
    id_category: 3,
    name: "Mac",
    image: ImageMac,
  },
  {
    id_category: 4,
    name: "AirPods",
    image: ImageAirpods,
  },
  {
    id_category: 5,
    name: "Watch",
    image: ImageWatch,
  },
  {
    id_category: 6,
    name: "Lainnya",
    image: ImageOther,
  },
]

const dataProduct = [
  {
    id_product: 1,
    image: "https://malline.id/src/iphone_13_midnight_1_4.jpg",
    name: "Iphone 11 Pro Max 256GB Space Gray",
    price: 5000000,
    username: "suryamahendra",
    location: "Jakarta Selatan",
  },
  {
    id_product: 1,
    image: "https://malline.id/src/iphone_13_midnight_1_4.jpg",
    name: "Iphone 11 Pro Max 256GB Space Gray",
    price: 5000000,
    username: "suryamahendra",
    location: "Jakarta Selatan",
  },
  {
    id_product: 1,
    image: "https://malline.id/src/iphone_13_midnight_1_4.jpg",
    name: "Iphone 11 Pro Max 256GB Space Gray",
    price: 5000000,
    username: "suryamahendra",
    location: "Jakarta Selatan",
  },
  {
    id_product: 1,
    image: "https://malline.id/src/iphone_13_midnight_1_4.jpg",
    name: "Iphone 11 Pro Max 256GB Space Gray",
    price: 5000000,
    username: "suryamahendra",
    location: "Jakarta Selatan",
  },
  {
    id_product: 1,
    image: "https://malline.id/src/iphone_13_midnight_1_4.jpg",
    name: "Iphone 11 Pro Max 256GB Space Gray",
    price: 5000000,
    username: "suryamahendra",
    location: "Jakarta Selatan",
  },
  {
    id_product: 1,
    image: "https://malline.id/src/iphone_13_midnight_1_4.jpg",
    name: "Iphone 11 Pro Max 256GB Space Gray",
    price: 5000000,
    username: "suryamahendra",
    location: "Jakarta Selatan",
  },
  {
    id_product: 1,
    image: "https://malline.id/src/iphone_13_midnight_1_4.jpg",
    name: "Iphone 11 Pro Max 256GB Space Gray",
    price: 5000000,
    username: "suryamahendra",
    location: "Jakarta Selatan",
  },
  {
    id_product: 1,
    image: "https://malline.id/src/iphone_13_midnight_1_4.jpg",
    name: "Iphone 11 Pro Max 256GB Space Gray",
    price: 5000000,
    username: "suryamahendra",
    location: "Jakarta Selatan",
  },
]

const dataFeatured = [
  {
    image: ImageBestPrice,
    name: "Penawaran Terbaik",
    description: "Tawar dan temukan harga terbaik sesuai kebutuhan anda",
  },
  {
    image: ImageSecurePayment,
    name: "Pembayaran Aman",
    description: "Tersedia rekening bersama dengan berbagai metode pembayaran",
  },
  {
    image: ImageCustomerService,
    name: "Penawaran Terbaik",
    description: "Tim kami selalu siap membantu setiap permasalahan anda",
  },
  {
    image: ImageGuarantee,
    name: "Garansi Pembelian",
    description: "Jaminan uang kembali apabila barang tidak sesuai deskripsi",
  },
]

const LandingPage = () => {

  const space = "mt-lg-5 mb-lg-5 mt-md-5 mb-md-5 mt-4 mb-4"

  return (
    <Layout role="default">
      <section id="Slider-LandingPage">
        <Carousel variant="dark">
          {dataCarousel?.map((value, index) => {
            return (
              <Carousel.Item key={index}>
                <a href={value.link}><img className="d-block w-100" src={value.image} alt={value.name} /></a>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </section>
      <section id="Category-LandingPage" className={space}>
        <Container>
          <h4>Kategori</h4>
          <Row className={'gap'}>
            {dataCategory?.map((value, index) => {
              return (
                <Col lg={2} md={3} sm={4} xs={4} key={index} className={'pt-2 pb-2'}>
                  <a href={'/search/keyword=' + value.name + '&type=product&sort=1&category=' + value.id_category + '&location=null&minprice=null&maxprice=null'}>
                    <Card body className={'text-center p-0 p-md-1 ' + style.card} text="dark" style={{ backgroundColor: "#F1F1F1", border: "0px" }}>
                      <img src={value.image} width="80%" height="auto" alt={value.name} />
                      <div style={{ fontWeight: "400", color: "black", marginTop: "10px" }}>{value.name}</div>
                    </Card>
                  </a>
                </Col>
              )
            })}
          </Row>
        </Container>
      </section>
      <section id="NewProduct-LandingPage" className={space}>
        <Container>
          <h4>Produk Terbaru</h4>
          <Row>
            {dataProduct?.map((value, index) => {
              return (
                <Col lg={3} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                  <CardProduct value={value} />
                </Col>
              )
            })}
          </Row>
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