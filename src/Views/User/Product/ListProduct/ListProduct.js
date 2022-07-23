import Aos from 'aos'
import React, { useEffect } from 'react'
import { Button, Card, Col, Nav, Row, Tab } from 'react-bootstrap'
import { Plus, PlusCircleFill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../../../../Components/Card/CardProduct/CardProduct'
import { getProductByUsername } from '../../../../Redux/features/productSlice'
import { dataCardProduct } from '../../../DataDummy'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListProduct.module.css'

const ListProduct = () => {

    const dispatch = useDispatch()
    const { dataUserVerification } = useSelector(state => state.authUserReducer)
    const { dataProductByUsername } = useSelector(state => state.productReducer)

    useEffect(() => {
        if (dataUserVerification) {
            dispatch(getProductByUsername({ username: dataUserVerification.data.username }))
        }
        Aos.init({ duration: 1800 })
    }, [dataUserVerification ? true : false]);

    const noProduct = "https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif"

    return (
        <Dashboard menu="product">
            {dataProductByUsername ?
                <Tab.Container defaultActiveKey="1">
                    <Row className="m-0 gap-3">
                        <Col xs={12} className="p-0" data-aos="zoom-out-left">
                            <Nav variant="tabs" className={style.scroll_menu}>
                                <Nav.Item className="d-flex">
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="1">Sedang Dijual ({dataProductByUsername.data.filter(obj => obj.productStatus === "available").length})</Nav.Link>
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="2">Telah Terjual ({dataProductByUsername.data.filter(obj => obj.productStatus === "sold").length})</Nav.Link>
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="3">Disimpan ({dataProductByUsername.data.filter(obj => obj.productStatus === "archive").length})</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs={12} className="p-0">
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                    <Row>
                                        <Col lg={4} md={6} sm={12} xs={12} className={'pt-2 pb-2'} data-aos="fade-up">
                                            <a href={'/dashboard/product/add'}>
                                                <Card className={'mt-1 mb-1 ' + style.add_product_lg}>
                                                    <div className={'w-100 h-100 d-grid gap-4 align-content-center justify-content-center mt-5 mb-5 '}>
                                                        <div className='d-flex'><PlusCircleFill className="mx-auto" size="6rem" /></div>
                                                        <div><h5>Tambah Produk Baru</h5></div>
                                                    </div>
                                                </Card>
                                                <div className={style.add_product_sm}>
                                                    <Button className={'w-100 d-flex align-content-center justify-content-center '} size="lg" variant="secondary" style={{ fontSize: "1.125rem" }}><PlusCircleFill className='my-auto me-2' size={18} /> Tambah Produk Baru</Button>
                                                </div>
                                            </a>
                                        </Col>
                                        {dataProductByUsername.data.filter(obj => obj.productStatus === "available").length > 0 ?
                                            dataProductByUsername.data?.filter(obj => obj.productStatus === "available").map((value, index) => {
                                                return (
                                                    <Col lg={4} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'} data-aos="fade-up">
                                                        <CardProduct value={value} type="available" />
                                                    </Col>
                                                )
                                            })
                                            :
                                            null
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <Row>
                                        {dataProductByUsername.data.filter(obj => obj.productStatus === "sold").length > 0 ?
                                            dataProductByUsername.data?.filter(obj => obj.productStatus === "sold").map((value, index) => {
                                                return (
                                                    <Col lg={4} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'} data-aos="fade-up">
                                                        <CardProduct value={value} type="sold" />
                                                    </Col>
                                                )
                                            })
                                            :
                                            <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                                <img src={noProduct} width="100%" alt="product not found" />
                                            </div>
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <Row>
                                        {dataProductByUsername.data.filter(obj => obj.productStatus === "archive").length > 0 ?
                                            dataProductByUsername.data?.filter(obj => obj.productStatus === "archive").map((value, index) => {
                                                return (
                                                    <Col lg={4} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'} data-aos="fade-up">
                                                        <CardProduct value={value} type="archive" />
                                                    </Col>
                                                )
                                            })
                                            :
                                            <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                                <img src={noProduct} width="100%" alt="product not found" />
                                            </div>
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                : null
            }
        </Dashboard>
    )
}

export default ListProduct