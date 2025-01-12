import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Container, Modal, Nav, Row, Tab } from 'react-bootstrap';
import { BagFill, Box2Fill } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom';
import CardFilter from '../../../Components/Card/CardFilter/CardFilter';
import CardProduct from '../../../Components/Card/CardProduct/CardProduct';
import { getSearchProductByFilter, getSearchProductByKeyword } from '../../../Redux/features/productSlice';
import Layout from '../../Layout';
import style from './Search.module.css'
import { getSearchSellerByFilter, getSearchSellerByKeyword } from '../../../Redux/features/authUser';
import CardSeller from '../../../Components/Card/CardSeller/CardSeller';

const Search = () => {

    const noProduct = "https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif"

    const dispatch = useDispatch()
    const { keyword, type, sort, category, location, minprice, maxprice } = useParams()
    const [show, setShow] = useState(false);
    const { dataSearchProductByKeyword, dataSearchProductByFilter } = useSelector(state => state.productReducer)
    const { dataSearchSellerByKeyword, dataSearchSellerByFilter } = useSelector(state => state.authUserReducer)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (keyword) {
            if (type == "product") {
                if (category == "null" || location == "null") {
                    dispatch(getSearchProductByKeyword({ fullName: keyword }))
                } else {
                    dispatch(getSearchProductByFilter({ fullName: keyword, idCategory: category, idCity: location }))
                }
            }
            if (type == "store") {
                if (location == "null" || location == "null") {
                    dispatch(getSearchSellerByKeyword({ fullName: keyword }))
                } else {
                    dispatch(getSearchSellerByFilter({ fullName: keyword, idCity: location }))
                }
            }
        }
        Aos.init({ duration: 1800 })
    }, []);

    const dataProduct = () => {
        if (dataSearchProductByKeyword) {
            if (minprice == "null" || maxprice == "null") {
                if (sort == "1") {
                    return (
                        <Row>
                            {dataSearchProductByKeyword.data.length > 0 ?
                                dataSearchProductByKeyword.data.map((value, index) => {
                                    return (
                                        <Col lg={4} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                            <div data-aos="fade-up">
                                                <CardProduct value={value} type="default" />
                                            </div>
                                        </Col>
                                    )
                                })
                                :
                                <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                    <img src={noProduct} width="100%" alt="product not found" />
                                </div>
                            }
                        </Row>
                    )
                } else if (sort == "2") {
                    return (
                        <Row>
                            {dataSearchProductByKeyword.data.length > 0 ?
                                dataSearchProductByKeyword.data.slice(0).reverse().map((value, index) => {
                                    return (
                                        <Col lg={4} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                            <div data-aos="fade-up">
                                                <CardProduct value={value} type="default" />
                                            </div>
                                        </Col>
                                    )
                                })
                                :
                                <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                    <img src={noProduct} width="100%" alt="product not found" />
                                </div>
                            }
                        </Row>
                    )
                }
            } else if (minprice > 0 || maxprice > 0) {
                if (sort == "1") {

                } else if (sort == "2") {

                }
            }
        } else if (dataSearchProductByFilter) {
            if (minprice == "null" || maxprice == "null") {
                if (sort == "1") {
                    return (
                        <Row>
                            {dataSearchProductByFilter.data.length > 0 ?
                                dataSearchProductByFilter.data.map((value, index) => {
                                    return (
                                        <Col lg={4} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                            <div data-aos="fade-up">
                                                <CardProduct value={value} type="default" />
                                            </div>
                                        </Col>
                                    )
                                })
                                :
                                <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                    <img src={noProduct} width="100%" alt="product not found" />
                                </div>
                            }
                        </Row>
                    )
                } else if (sort == "2") {
                    return (
                        <Row>
                            {dataSearchProductByFilter.data.length > 0 ?
                                dataSearchProductByFilter.data.slice(0).reverse().map((value, index) => {
                                    return (
                                        <Col lg={4} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                            <div data-aos="fade-up">
                                                <CardProduct value={value} type="default" />
                                            </div>
                                        </Col>
                                    )
                                })
                                :
                                <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                    <img src={noProduct} width="100%" alt="product not found" />
                                </div>
                            }
                        </Row>
                    )
                }
            } else if (minprice > 0 || maxprice > 0) {
                if (sort == "1") {

                } else if (sort == "2") {

                }
            }
        }
    }

    const dataSeller = () => {
        if (dataSearchSellerByKeyword) {
            if (minprice == "null" || maxprice == "null") {
                if (sort == "1") {
                    return (
                        <Row>
                            {dataSearchSellerByKeyword.data.length > 0 ?
                                dataSearchSellerByKeyword.data.map((value, index) => {
                                    return (
                                        <Col lg={6} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                            <div data-aos="fade-up">
                                                <CardSeller value={value} />
                                            </div>
                                        </Col>
                                    )
                                })
                                :
                                <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                    <img src={noProduct} width="100%" alt="product not found" />
                                </div>
                            }
                        </Row>
                    )
                } else if (sort == "2") {
                    return (
                        <Row>
                            {dataSearchSellerByKeyword.data.length > 0 ?
                                dataSearchSellerByKeyword.data.slice(0).reverse().map((value, index) => {
                                    return (
                                        <Col lg={6} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                            <div data-aos="fade-up">
                                                <CardSeller value={value} />
                                            </div>
                                        </Col>
                                    )
                                })
                                :
                                <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                    <img src={noProduct} width="100%" alt="product not found" />
                                </div>
                            }
                        </Row>
                    )
                }
            }
        } else if (dataSearchSellerByFilter) {
            if (minprice == "null" || maxprice == "null") {
                if (sort == "1") {
                    return (
                        <Row>
                            {dataSearchSellerByFilter.data.length > 0 ?
                                dataSearchSellerByFilter.data.map((value, index) => {
                                    return (
                                        <Col lg={6} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                            <div data-aos="fade-up">
                                                <CardSeller value={value} />
                                            </div>
                                        </Col>
                                    )
                                })
                                :
                                <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                    <img src={noProduct} width="100%" alt="product not found" />
                                </div>
                            }
                        </Row>
                    )
                } else if (sort == "2") {
                    return (
                        <Row>
                            {dataSearchSellerByFilter.data.length > 0 ?
                                dataSearchSellerByFilter.data.slice(0).reverse().map((value, index) => {
                                    return (
                                        <Col lg={6} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'}>
                                            <div data-aos="fade-up">
                                                <CardSeller value={value} />
                                            </div>
                                        </Col>
                                    )
                                })
                                :
                                <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                    <img src={noProduct} width="100%" alt="product not found" />
                                </div>
                            }
                        </Row>
                    )
                }
            }
        }
    }

    return (
        <Layout>
            {dataSearchProductByKeyword || dataSearchProductByFilter || dataSearchSellerByKeyword || dataSearchSellerByFilter ?
                <Container>
                    <Row>
                        <Col lg={3} className={'mt-3 mb-3 ' + style.filter_md}>
                            <div data-aos="fade-right">
                                <CardFilter show="desktop" keyword={keyword} type={type} sort={sort} category={category} location={location} minprice={minprice} maxprice={maxprice} />
                            </div>
                        </Col>
                        <Col lg={9} className={'mt-3 mb-3'}>
                            <Tab.Container defaultActiveKey={type}>
                                <Nav variant="tabs" data-aos="zoom-out-left">
                                    <Nav.Item>
                                        <Nav.Link style={{ color: "#1E1E1E", fontSize: "1.125rem" }} href={"/search/keyword=" + keyword + "&type=" + "product" + "&sort=" + 1 + "&category=" + null + "&location=" + null + "&minprice=" + null + "&maxprice=" + null} eventKey="product" className="w-100 d-flex align-content-center justify-content-center"><Box2Fill className='my-auto me-2' size={18} /><b>Produk</b></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link style={{ color: "#1E1E1E", fontSize: "1.125rem" }} href={"/search/keyword=" + keyword + "&type=" + "store" + "&sort=" + 1 + "&category=" + null + "&location=" + null + "&minprice=" + null + "&maxprice=" + null} eventKey="store" className="w-100 d-flex align-content-center justify-content-center"><BagFill className='my-auto me-2' size={18} /><b>Toko</b></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="product" className={'pt-3 pb-3'}>
                                        <Row className={'align-items-center mb-3 mb-lg-1'}>
                                            <Col lg={12} md={8} sm={12} xs={12} data-aos="zoom-out-left">
                                                Menampilkan hasil pencarian produk untuk "<b>{keyword}</b>"
                                            </Col>
                                            <Col lg={12} md={4} sm={12} xs={12} className={style.filter_sm}>
                                                <Button variant="outline-secondary" className="w-100 mt-3 mt-md-0" onClick={handleShow}>
                                                    Filter & Urutkan
                                                </Button>
                                                <Modal show={show} onHide={handleClose} centered>
                                                    <div data-aos="fade-right">
                                                        <CardFilter show="mobile" keyword={keyword} type={type} sort={sort} category={category} location={location} minprice={minprice} maxprice={maxprice} />
                                                    </div>
                                                </Modal>
                                            </Col>
                                        </Row>
                                        {dataProduct()}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="store" className={'pt-3 pb-3'}>
                                        <Row className={'align-items-center mb-3 mb-lg-1'}>
                                            <Col lg={12} md={8} sm={12} xs={12} data-aos="zoom-out-left">
                                                Menampilkan hasil pencarian produk untuk "<b>{keyword}</b>"
                                            </Col>
                                            <Col lg={12} md={4} sm={12} xs={12} className={style.filter_sm}>
                                                <Button variant="outline-secondary" className="w-100 mt-3 mt-md-0" onClick={handleShow}>
                                                    Filter & Urutkan
                                                </Button>
                                                <Modal show={show} onHide={handleClose} centered>
                                                    <div data-aos="fade-right">
                                                        <CardFilter show="mobile" keyword={keyword} type={type} sort={sort} category={category} location={location} minprice={minprice} maxprice={maxprice} />
                                                    </div>
                                                </Modal>
                                            </Col>
                                        </Row>
                                        <Row>
                                            {dataSeller()}
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                : null
            }
        </Layout>
    )
}

export default Search