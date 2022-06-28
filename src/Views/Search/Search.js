import React, { useState } from 'react'
import { Col, Container, Nav, Row, Tab, Button, Modal } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CardFilter from '../../Components/Card/CardFilter/CardFilter'
import CardProduct from '../../Components/Card/CardProduct/CardProduct'
import CardSeller from '../../Components/Card/CardSeller/CardSeller'
import Layout from '../Layout'
import style from './Search.module.css'

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

const dataSeller = [
    {
        id_seller: 1,
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        username: "suryamahendra",
        fullname: "Surya Mahendra",
        address: {
            id_address: 1,
            name: "Kota Jakarta",
        },
        createdAt: "1 Juni 2022",
    },
    {
        id_seller: 1,
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        username: "suryamahendra",
        fullname: "Surya Mahendra",
        address: {
            id_address: 1,
            name: "Kota Jakarta",
        },
        createdAt: "1 Juni 2022",
    },
    {
        id_seller: 1,
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        username: "suryamahendra",
        fullname: "Surya Mahendra",
        address: {
            id_address: 1,
            name: "Kota Jakarta",
        },
        createdAt: "1 Juni 2022",
    },
    {
        id_seller: 1,
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        username: "suryamahendra",
        fullname: "Surya Mahendra",
        address: {
            id_address: 1,
            name: "Kota Jakarta",
        },
        createdAt: "1 Juni 2022",
    },
    {
        id_seller: 1,
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        username: "suryamahendra",
        fullname: "Surya Mahendra",
        address: {
            id_address: 1,
            name: "Kota Jakarta",
        },
        createdAt: "1 Juni 2022",
    },
    {
        id_seller: 1,
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        username: "suryamahendra",
        fullname: "Surya Mahendra",
        address: {
            id_address: 1,
            name: "Kota Jakarta",
        },
        createdAt: "1 Juni 2022",
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
                                        {dataSeller?.map((value, index) => {
                                            return (
                                                <Col lg={6} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                                    <CardSeller value={value} />
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