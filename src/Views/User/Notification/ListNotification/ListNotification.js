import Aos from 'aos'
import React, { useEffect } from 'react'
import { Button, Col, Nav, Row, Tab } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CardNotification from '../../../../Components/Card/CardNotification/CardNotification'
import { getAllBuyerNotification, getAllSellerNotification } from '../../../../Redux/features/notificationSlice'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListNotification.module.css'

const ListNotification = () => {

    const dispatch = useDispatch()
    const { dataUserVerification } = useSelector(state => state.authUserReducer)
    const { dataAllBuyerNotification, dataAllSellerNotification } = useSelector(state => state.notificationReducer)

    useEffect(() => {
        if (dataUserVerification) {
            dispatch(getAllBuyerNotification({ idUser: dataUserVerification.data.userId }))
            dispatch(getAllSellerNotification({ idUser: dataUserVerification.data.userId }))
        }
        Aos.init({ duration: 1800 })
    }, [dataUserVerification])

    const noProduct = "https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif"

    return (
        <Dashboard menu="notification">
            {dataAllBuyerNotification && dataAllSellerNotification ?
                <Tab.Container defaultActiveKey="1">
                    <Row className="m-0 gap-3">
                        <Col xs={12} className="p-0" data-aos="zoom-out-left">
                            <Nav variant="tabs" className={style.scroll_menu}>
                                <Nav.Item className="d-flex">
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="1">Notifikasi Pengguna ({dataAllBuyerNotification.data.length})</Nav.Link>
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="2">Notifikasi Toko ({dataAllSellerNotification.data.length})</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs={12} className="p-0">
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                    <Row>
                                        <Col xs={12} className={'mb-3 '} data-aos="zoom-out-left">
                                            <div className='d-flex'>
                                                <div className='w-100 my-auto'>Menampilan semua notifikasi penawaran</div>
                                                <div className='w-50 my-auto text-end'><Button size="sm" variant="outline-secondary">Hapus Semua</Button></div>
                                            </div>
                                        </Col>
                                        {dataAllBuyerNotification.data.length > 0 ?
                                            dataAllBuyerNotification.data?.map((value, index) => {
                                                return (
                                                    <Col xs={12} className={'mb-3 '} key={index} data-aos="fade-up">
                                                        <CardNotification value={value} type="buyer" />
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
                                        <Col xs={12} className={'mb-3 '} data-aos="zoom-out-left">
                                            <div className='d-flex'>
                                                <div className='w-100 my-auto'>Menampilan semua notifikasi penjualan</div>
                                                <div className='w-50 my-auto text-end'><Button size="sm" variant="outline-secondary">Hapus Semua</Button></div>
                                            </div>
                                        </Col>
                                        {dataAllSellerNotification.data.length > 0 ?
                                            dataAllSellerNotification.data?.map((value, index) => {
                                                return (
                                                    <Col xs={12} className={'mb-3 '} key={index} data-aos="fade-up">
                                                        <CardNotification value={value} type="seller" />
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

export default ListNotification