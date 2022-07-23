import Aos from 'aos'
import React, { useEffect } from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CardOffer from '../../../../Components/Card/CardOffer/CardOffer'
import { getAllOffer } from '../../../../Redux/features/offerSlice'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListOffer.module.css'

const ListOffer = () => {

    const dispatch = useDispatch()
    const { dataUserVerification } = useSelector(state => state.authUserReducer)
    const { dataAllOffer } = useSelector(state => state.offerReducer)

    useEffect(() => {
        if (dataUserVerification) {
            dispatch(getAllOffer({ idSeller: dataUserVerification.data.userId }))
        }
        Aos.init({ duration: 1800 })
    }, [dataUserVerification ? true : false])

    const noProduct = "https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif"

    return (
        <Dashboard menu="offer">
            {dataAllOffer ?
                <Tab.Container defaultActiveKey="1">
                    <Row className="m-0 gap-3">
                        <Col xs={12} className="p-0" data-aos="zoom-out-left">
                            <Nav variant="tabs" className={style.scroll_menu}>
                                <Nav.Item className="d-flex">
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="1">Belum Direspon ({dataAllOffer.data.filter(obj => obj.bidStatus === "pending").length})</Nav.Link>
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="2">Diterima ({dataAllOffer.data.filter(obj => obj.bidStatus === "processed").length})</Nav.Link>
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="3">Ditolak ({dataAllOffer.data.filter(obj => obj.bidStatus === "declined").length})</Nav.Link>
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="4">Selesai ({dataAllOffer.data.filter(obj => obj.bidStatus === "accepted").length})</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs={12} className="p-0">
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                    <Row>
                                        {dataAllOffer.data.filter(obj => obj.bidStatus === "pending").length > 0 ?
                                            dataAllOffer.data?.filter(obj => obj.bidStatus === "pending").reverse().map((value, index) => {
                                                return (
                                                    <Col xs={12} className={'pt-2 pb-2'} key={index} data-aos="fade-up">
                                                        <CardOffer value={value} />
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
                                <Tab.Pane eventKey="2" id="accepted">
                                    <Row>
                                        {dataAllOffer.data.filter(obj => obj.bidStatus === "processed").length > 0 ?
                                            dataAllOffer.data?.filter(obj => obj.bidStatus === "processed").reverse().map((value, index) => {
                                                return (
                                                    <Col xs={12} className={'pt-2 pb-2'} key={index} data-aos="fade-up">
                                                        <CardOffer value={value} />
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
                                        {dataAllOffer.data.filter(obj => obj.bidStatus === "declined").length > 0 ?
                                            dataAllOffer.data?.filter(obj => obj.bidStatus === "declined").reverse().map((value, index) => {
                                                return (
                                                    <Col xs={12} className={'pt-2 pb-2'} key={index} data-aos="fade-up">
                                                        <CardOffer value={value} />
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
                                <Tab.Pane eventKey="4">
                                    <Row>
                                        {dataAllOffer.data.filter(obj => obj.bidStatus === "accepted").length > 0 ?
                                            dataAllOffer.data?.filter(obj => obj.bidStatus === "accepted").reverse().map((value, index) => {
                                                return (
                                                    <Col xs={12} className={'pt-2 pb-2'} key={index} data-aos="fade-up">
                                                        <CardOffer value={value} />
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

export default ListOffer