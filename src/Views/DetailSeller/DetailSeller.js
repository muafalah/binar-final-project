import React from 'react'
import { Col, Container, Nav, Row, Tab, Button } from 'react-bootstrap'
import CardProduct from '../../Components/Card/CardProduct/CardProduct'
import Layout from '../Layout'
import style from './DetailSeller.module.css'

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

const DetailSeller = () => {
    return (
        <Layout role="default">
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="all-product">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="all-product" className={style.Link_Menu}>Semua Produk</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={style.Link_Menu}>
                                    <Nav.Link eventKey="sold">Produk Terjual</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={style.Link_Menu}>
                                    <Nav.Link eventKey="favorit">Diminati</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="all-product">
                                    All Product
                                </Tab.Pane>
                                <Tab.Pane eventKey="sold">
                                    Sold
                                </Tab.Pane>
                                <Tab.Pane eventKey="favorit">
                                    Favorit
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </Layout >
    )
}

export default DetailSeller