import React from 'react'
import Layout from '../../Layout'
import { Col, Container, Row, Button, Image, Nav, NavLink, Tab, Tabs } from 'react-bootstrap'
import style from '../../Buyer/DashboardBuyer/DashboardBuyer.module.css'
import CardProduct from '../../../Components/Card/CardProduct/CardProduct'
import { CardProductBuyer } from '../../../Components/Card/CardProduct/CardProductBuyer'

const dataProduct = [
    {
      id_product: 1,
      name: "iPhone 11 Pro Max 256 GB Space Gray",
      price: 12400000,
      image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
      seller: {
        id_seller: 1,
        username: "suryamahendra",
        address: {
          id_address: 1,
          name: "Kota Jakarta",
        },
      },
    },
    {
      id_product: 2,
      name: "iPhone 11 Pro Max 256 GB Space Gray",
      price: 12400000,
      image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
      seller: {
        id_seller: 1,
        username: "suryamahendra",
        address: {
          id_address: 1,
          name: "Kota Jakarta",
        },
      },
    },
    {
      id_product: 3,
      name: "iPhone 11 Pro Max 256 GB Space Gray",
      price: 12400000,
      image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
      seller: {
        id_seller: 1,
        username: "suryamahendra",
        address: {
          id_address: 1,
          name: "Kota Jakarta",
        },
      },
    },
    {
      id_product: 4,
      name: "iPhone 11 Pro Max 256 GB Space Gray",
      price: 12400000,
      image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
      seller: {
        id_seller: 1,
        username: "suryamahendra",
        address: {
          id_address: 1,
          name: "Kota Jakarta",
        },
      },
    },
    {
      id_product: 4,
      name: "iPhone 11 Pro Max 256 GB Space Gray",
      price: 12400000,
      image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
      seller: {
        id_seller: 1,
        username: "suryamahendra",
        address: {
          id_address: 1,
          name: "Kota Jakarta",
        },
      },
    },
    {
      id_product: 4,
      name: "iPhone 11 Pro Max 256 GB Space Gray",
      price: 12400000,
      image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
      seller: {
        id_seller: 1,
        username: "suryamahendra",
        address: {
          id_address: 1,
          name: "Kota Jakarta",
        },
      },
    },
    {
      id_product: 4,
      name: "iPhone 11 Pro Max 256 GB Space Gray",
      price: 12400000,
      image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
      seller: {
        id_seller: 1,
        username: "suryamahendra",
        address: {
          id_address: 1,
          name: "Kota Jakarta",
        },
      },
    },
    {
      id_product: 4,
      name: "iPhone 11 Pro Max 256 GB Space Gray",
      price: 12400000,
      image: "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_iphone_11_pro_space_grey_new_1.jpg",
      seller: {
        id_seller: 1,
        username: "suryamahendra",
        address: {
          id_address: 1,
          name: "Kota Jakarta",
        },
      },
    },
  ]

export const DashboardBuyer = () => {
  return (
    <div>
    <Layout role="default">
    <section className={style.txtdashboard}><h2>Dashboard Pembeli</h2></section>
    <section id='User-Banner' className={style.bg_userbanner}>
            <Container className={'pt-5 pb-5'}>
          <Row>
          <Col md={2}>
            <section className={style.imguser}></section>
          </Col>
            <Col md={4}>
              <h3 style={{ color: "black" }}>Username</h3>
              <p style={{ fontSize: "1.125rem", fontWeight: "400", color: "black" }}>Bergabung sejak 1 minggu yang lalu</p>
            </Col>
            <Col md={5} className={'d-flex align-items-center justify-content-md-end '}>
            <a href="/register"><Button variant="danger">Lihat Toko</Button></a>
            <a href="/register"><Button className={style.btnusrprofile} variant="danger">Edit</Button></a>
            </Col>
          </Row>
        </Container>
            </section><section id='user-product' className={style.usermenu}>
            <Container className={'pt-5 pb-5'}>
            <Row>
            <Container className={style.menuhover}>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="Belum Direspon" title="Belum Direspon">
  </Tab>
  <Tab eventKey="Tawaran Diterima" title="Tawaran Diterima">
  </Tab>
  <Tab eventKey="Tawaran Ditolak" title="Tawaran Ditolak">
  </Tab>
</Tabs>
            </Container>
                    <Col lg={3}>
                        <div className={style.menuuser}>
                        <br/>
                            <h3 className={style.txtmenuuser}>Menu</h3>
                            <Col><a href="/register"><Button className={style.btnusermenu} variant="danger">Penawaran</Button></a></Col>
                            <br/>
                            <Col><a href="/register"><Button className={style.btnusermenu} variant="danger">Transaksi</Button></a></Col>
                        </div>
                    </Col>
                    <Col>
                        <Row> {dataProduct?.map((value, index) => {
              return (
                <Col lg={12} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                  <CardProductBuyer value={value} />
                </Col>
              )
            })}</Row>
                    </Col>
                   
                </Row>
            </Container>
            </section>
        </Layout>
    </div>
  )
}