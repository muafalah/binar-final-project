import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button, ButtonGroup, ToggleButton, Tab, Nav, Modal } from 'react-bootstrap'
import { ChatDotsFill, StickiesFill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardProduct from '../../../Components/Card/CardProduct/CardProduct'
import { getUserByUsername } from '../../../Redux/features/authUser'
import { getProductByUsername } from '../../../Redux/features/productSlice'
import { formatDate, formatCamelCase } from '../../../Utils/helper'
import Layout from '../../Layout'
import style from './DetailSeller.module.css'

const DetailSeller = () => {

    const dispatch = useDispatch()
    const { username_seller } = useParams()
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const { dataUserByUsername } = useSelector(state => state.authUserReducer)
    const { dataProductByUsername } = useSelector(state => state.productReducer)

    useEffect(() => {
        dispatch(getUserByUsername({ username: username_seller.toLowerCase() }))
        dispatch(getProductByUsername({ username: username_seller.toLowerCase() }))
        Aos.init({ duration: 1800 })
    }, []);

    const radios = [
        { name: 'Semua Produk', value: '1' },
        { name: 'Produk Diminati', value: '2' },
        { name: 'Produk Terjual', value: '3' },
    ];

    const noProduct = "https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif"
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log()

    return (
        dataUserByUsername ?
            dataUserByUsername.data.roles.length > 1 ?
                dataUserByUsername.data.roles[1].roleId === 2 ?
                    <Layout>
                        <Container>
                            <Row className="mt-3 mb-3">
                                <Col md={12} className="mt-3 ps-4 pe-4">
                                    <Row data-aos="zoom-out" className="ps-3 pe-3 pt-4 pb-4" style={{ backgroundColor: "white", borderRadius: "0.375rem", border: "1px solid rgba(0,0,0,.125)" }}>
                                        <Col lg={8} className="mb-lg-0 mb-3">
                                            <div className={'d-md-flex gap-4 w-100 ' + style.profile_lg}>
                                                <div><img src={dataUserByUsername.data.img} alt="Profile Seller" width="130rem" style={{ borderRadius: "0.375rem" }} /></div>
                                                <div className="d-grid align-content-around">
                                                    <div>
                                                        <h3>{formatCamelCase(dataUserByUsername.data.fullName)}</h3>
                                                        <span style={{ color: "#fb374f", fontSize: "1.125rem" }}>@{dataUserByUsername.data.username}</span>
                                                    </div>
                                                    <div className='mt-3 mt-md-0' style={{ color: "#8A8A8A" }}>Lokasi di {formatCamelCase(dataUserByUsername.data.cities.cityName)} | Bergabung sejak {formatDate(dataUserByUsername.data.createdAt)}</div>
                                                </div>
                                            </div>
                                            <div className={style.profile_sm}>
                                                <Row className="p-0">
                                                    <Col xs={4} className="m-0 my-auto">
                                                        <img src={dataUserByUsername.data.img} alt="Profile Seller" width="100%" style={{ borderRadius: "0.375rem" }} />
                                                    </Col>
                                                    <Col xs={8} className="m-0 my-auto">
                                                        <h4>{formatCamelCase(dataUserByUsername.data.fullName)}</h4>
                                                        <span style={{ color: "#fb374f", fontSize: "1.125rem" }}>@{dataUserByUsername.data.username}</span>
                                                    </Col>
                                                </Row>
                                                <div className='mt-3 mt-md-0' style={{ color: "#8A8A8A" }}>Lokasi di {formatCamelCase(dataUserByUsername.data.cities.cityName)} | Bergabung sejak {formatDate(dataUserByUsername.data.createdAt)}</div>
                                            </div>
                                        </Col>
                                        <Col lg={4} className='d-flex gap-3 my-auto'>
                                            <Button className="w-100 d-flex align-content-center justify-content-center" variant="dark" onClick={handleShow}><StickiesFill className='my-auto me-2' size={16} /> Catatan</Button>
                                            <Button href={'https://wa.me/' + dataUserByUsername.data.phone} target="_blank" className="w-100 d-flex align-content-center justify-content-center" variant="success"><ChatDotsFill className='my-auto me-2' size={18} /> Hubungi</Button>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Catatan Toko</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>{dataUserByUsername.data.description ? dataUserByUsername.data.description : <div className={'mt-1 ' + style.box} data-aos="fade-up"><img src={noProduct} width="100%" alt="product not found" /></div>}</Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12}>
                                    <Row>
                                        <Tab.Container defaultActiveKey={1}>
                                            <Col lg={3} className={'mt-3 ' + style.category_lg} data-aos="fade-right">
                                                <div className={'mt-1 ' + style.box}>
                                                    <h5 className="mb-3">Kategori</h5>
                                                    <ButtonGroup vertical className="w-100">
                                                        <Nav className="d-grid gap-2 w-100">
                                                            {radios.map((radio, idx) => (
                                                                <Nav.Link eventKey={radio.value} className="p-0 m-0" key={idx}>
                                                                    <ToggleButton
                                                                        key={idx}
                                                                        id={`radio-${idx}`}
                                                                        type="radio"
                                                                        variant={radioValue === radio.value ? 'dark' : 'outline-secondary'}
                                                                        value={radio.value}
                                                                        checked={radioValue === radio.value}
                                                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                                                                        style={{ borderRadius: "0.25rem" }}
                                                                        className="w-100"
                                                                    >
                                                                        {radio.name}
                                                                    </ToggleButton>
                                                                </Nav.Link>
                                                            ))}
                                                        </Nav>
                                                    </ButtonGroup>
                                                </div>
                                            </Col>
                                            <Col lg={3} className={'mt-4 ' + style.category_sm} data-aos="fade-right">
                                                <Nav className={style.scroll_menu}>
                                                    <ButtonGroup className="d-flex gap-3">
                                                        {radios.map((radio, idx) => (
                                                            <Nav.Link eventKey={radio.value} className={'p-0 m-0'} key={idx}>
                                                                <ToggleButton
                                                                    key={idx}
                                                                    id={`radio-${idx}`}
                                                                    type="radio"
                                                                    variant={radioValue === radio.value ? 'dark' : 'outline-secondary'}
                                                                    value={radio.value}
                                                                    checked={radioValue === radio.value}
                                                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                                                    style={{ borderRadius: "0.25rem" }}
                                                                >
                                                                    {radio.name}
                                                                </ToggleButton>
                                                            </Nav.Link>
                                                        ))}
                                                    </ButtonGroup>
                                                </Nav>
                                            </Col>
                                            <Col lg={9} className="mt-3">
                                                {dataProductByUsername ?
                                                    dataProductByUsername.data.length > 0 ?
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="1">
                                                                <Row>
                                                                    {dataProductByUsername.data.filter(obj => obj.productStatus == "available").length > 0 ?
                                                                        dataProductByUsername.data?.filter(obj => obj.productStatus == "available").map((value, index) => {
                                                                            return (
                                                                                <Col lg={4} md={6} sm={12} xs={12} key={index} className={'mb-3'} data-aos="fade-up">
                                                                                    <CardProduct value={value} type="default" />
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
                                                            <Tab.Pane eventKey="2">
                                                                <Row>
                                                                    {dataProductByUsername.data.filter(obj => obj.productStatus === "bidded").length > 0 ?
                                                                        dataProductByUsername.data?.filter(obj => obj.productStatus === "bidded").map((value, index) => {
                                                                            return (
                                                                                <Col lg={4} md={6} sm={12} xs={12} key={index} className={'mb-3'} data-aos="fade-up">
                                                                                    <CardProduct value={value} type="default" />
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
                                                                    {dataProductByUsername.data.filter(obj => obj.productStatus === "sold").length > 0 ?
                                                                        dataProductByUsername.data?.filter(obj => obj.productStatus === "sold").map((value, index) => {
                                                                            return (
                                                                                <Col lg={4} md={6} sm={12} xs={12} key={index} className={'mb-3'} data-aos="fade-up">
                                                                                    <CardProduct value={value} type="default" />
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
                                                        :
                                                        <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                                            <img src={noProduct} width="100%" alt="product not found" />
                                                        </div>
                                                    : null
                                                }
                                            </Col>
                                        </Tab.Container>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Layout>
                    : null
                : null
            : null
    )
}

export default DetailSeller