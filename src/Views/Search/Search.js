import React, { useState } from 'react'
import { Col, Container, Nav, Row, Tab, Button, Modal } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CardFilter from '../../Components/Card/CardFilter/CardFilter'
import CardProduct from '../../Components/Card/CardProduct/CardProduct'
import CardStore from '../../Components/Card/CardStore/CardStore'
import Layout from '../Layout'
import style from './Search.module.css'

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

const dataStore = [
    {
        id_store: 1,
        fullname: "Surya Mahendra",
        username: "suryamahendra",
        location: "Kota Surabaya",
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        createdAt: "6 Juli 2020",
    },
    {
        id_store: 2,
        fullname: "Putra Asmara",
        username: "putraasmara",
        location: "Kota Jakarta",
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        createdAt: "6 Juli 2020",
    },
    {
        id_store: 3,
        fullname: "Nanda Citra Ayu Mustika",
        username: "nandacitraayumustika",
        location: "Kota Bandung",
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        createdAt: "6 Juli 2020",
    },
    {
        id_store: 4,
        fullname: "Surya Mahendra",
        username: "suryamahendra",
        location: "Kota Surabaya",
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        createdAt: "6 Juli 2020",
    },
    {
        id_store: 5,
        fullname: "Putra Asmara",
        username: "putraasmara",
        location: "Kota Jakarta",
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        createdAt: "6 Juli 2020",
    },
    {
        id_store: 6,
        fullname: "Nanda Citra Ayu Mustika",
        username: "nandacitraayumustika",
        location: "Kota Bandung",
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        createdAt: "6 Juli 2020",
    },
]

const Search = () => {

    const { keyword, type, sort, category, location, minprice, maxprice } = useParams()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Layout role="default">
            <Container>
                <Row>
                    <Col lg={3} className={'mt-3 mb-3 ' + style.filter_md}>
                        <CardFilter show="desktop" keyword={keyword} type={type} sort={sort} category={category} location={location} minprice={minprice} maxprice={maxprice} />
                    </Col>
                    <Col lg={9} className={'mt-3 mb-3'}>
                        <Tab.Container defaultActiveKey={type}>
                            <Nav variant="tabs" fill>
                                <Nav.Item>
                                    <Nav.Link style={{ color: "#1E1E1E", fontSize: "1.125rem" }} href={"/search/keyword=" + keyword + "&type=" + "product" + "&sort=" + 1 + "&category=" + null + "&location=" + null + "&minprice=" + null + "&maxprice=" + null} eventKey="product"><b>Produk</b></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link style={{ color: "#1E1E1E", fontSize: "1.125rem" }} className={style.tab_link} href={"/search/keyword=" + keyword + "&type=" + "store" + "&sort=" + 1 + "&category=" + null + "&location=" + null + "&minprice=" + null + "&maxprice=" + null} eventKey="store"><b>Toko</b></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="product" className={'pt-3 pb-3'}>
                                    <Row className={'align-items-center mb-3 mb-lg-1'}>
                                        <Col lg={12} md={8} sm={12} xs={12}>
                                            Menampilkan hasil pencarian produk untuk "<b>{keyword}</b>"
                                        </Col>
                                        <Col lg={12} md={4} sm={12} xs={12} className={style.filter_sm}>
                                            <Button variant="outline-secondary" className="w-100 mt-3 mt-md-0" onClick={handleShow}>
                                                Filter & Urutkan
                                            </Button>
                                            <Modal show={show} onHide={handleClose} centered>
                                                <CardFilter show="mobile" keyword={keyword} type={type} sort={sort} category={category} location={location} minprice={minprice} maxprice={maxprice} />
                                            </Modal>
                                        </Col>
                                    </Row>
                                    <Row>
                                        {dataProduct?.map((value, index) => {
                                            return (
                                                <Col lg={4} md={4} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                                    <CardProduct value={value} />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="store" className={'pt-3 pb-3'}>
                                    <Row className={'align-items-center mb-3 mb-lg-1'}>
                                        <Col lg={12} md={8} sm={12} xs={12}>
                                            Menampilkan hasil pencarian produk untuk "<b>{keyword}</b>"
                                        </Col>
                                        <Col lg={12} md={4} sm={12} xs={12} className={style.filter_sm}>
                                            <Button variant="outline-secondary" className="w-100 mt-3 mt-md-0" onClick={handleShow}>
                                                Filter & Urutkan
                                            </Button>
                                            <Modal show={show} onHide={handleClose} centered>
                                                <CardFilter show="mobile" keyword={keyword} type={type} sort={sort} category={category} location={location} minprice={minprice} maxprice={maxprice} />
                                            </Modal>
                                        </Col>
                                    </Row>
                                    <Row>
                                        {dataStore?.map((value, index) => {
                                            return (
                                                <Col lg={6} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                                    <CardStore value={value} />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Search