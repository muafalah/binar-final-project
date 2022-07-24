import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { Button, Col, Nav, Row, Spinner, Tab } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useDispatch, useSelector } from 'react-redux'
import CardNotification from '../../../../Components/Card/CardNotification/CardNotification'
import { delRemoveAllBuyerNotification, delRemoveAllSellerNotification, getAllBuyerNotification, getAllSellerNotification } from '../../../../Redux/features/notificationSlice'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListNotification.module.css'

const ListNotification = () => {

    const dispatch = useDispatch()
    const [StatusRemoveBuyer, setStatusRemoveBuyer] = useState({ loading: false, success: false })
    const [StatusRemoveSeller, setStatusRemoveSeller] = useState({ loading: false, success: false })
    const { dataUserVerification } = useSelector(state => state.authUserReducer)
    const { dataAllBuyerNotification, dataAllSellerNotification, dataRemoveAllBuyerNotification, dataRemoveAllSellerNotification } = useSelector(state => state.notificationReducer)

    useEffect(() => {
        if (dataUserVerification) {
            dispatch(getAllBuyerNotification({ idUser: dataUserVerification.data.userId }))
            dispatch(getAllSellerNotification({ idUser: dataUserVerification.data.userId }))
        }
        Aos.init({ duration: 1800 })
    }, [dataUserVerification])

    useEffect(() => {
        if (dataRemoveAllSellerNotification) {
            if (dataRemoveAllSellerNotification.status == 200) {
                setStatusRemoveBuyer({ loading: false, success: true })
            }
        }
    }, [dataRemoveAllSellerNotification])

    useEffect(() => {
        if (dataRemoveAllBuyerNotification) {
            if (dataRemoveAllBuyerNotification.status == 200) {
                setStatusRemoveBuyer({ loading: false, success: true })
            }
        }
    }, [dataRemoveAllBuyerNotification])

    const noProduct = "https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif"

    const handleRemoveAllBuyerNotification = async () => {
        setStatusRemoveBuyer({ ...StatusRemoveBuyer, loading: true })
        await dispatch(delRemoveAllBuyerNotification({ idUser: dataUserVerification.data.userId }))
    }

    const handleRemoveAllSellerNotification = async () => {
        setStatusRemoveSeller({ ...StatusRemoveSeller, loading: true })
        await dispatch(delRemoveAllSellerNotification({ idUser: dataUserVerification.data.userId }))
    }

    return (
        <Dashboard menu="notification">
            {StatusRemoveBuyer.success || StatusRemoveSeller.success ? <SweetAlert success title="Semua Notifikasi Telah Dihapus!" confirmBtnBsStyle={'dark'} onConfirm={() => window.location.reload()}></SweetAlert> : null}
            {StatusRemoveBuyer.loading || StatusRemoveSeller.loading ? <SweetAlert title="" confirmBtnStyle={{ display: "none" }} onConfirm={() => null}><Spinner animation="border" size="lg" /></SweetAlert> : null}
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
                                                <div className='w-50 my-auto text-end'>{dataAllBuyerNotification.data.length > 0 ? <Button size="sm" variant="outline-secondary" onClick={handleRemoveAllBuyerNotification}>Hapus Semua</Button> : <Button size="sm" variant="outline-secondary" disabled>Hapus Semua</Button>}</div>
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
                                                <div className='w-50 my-auto text-end'>{dataAllSellerNotification.data.length > 0 ? <Button size="sm" variant="outline-secondary" onClick={handleRemoveAllSellerNotification}>Hapus Semua</Button> : <Button size="sm" variant="outline-secondary" disabled>Hapus Semua</Button>}</div>
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