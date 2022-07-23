import Aos from 'aos'
import React, { useEffect } from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CardTransaction from '../../../../Components/Card/CardTransaction/CardTransaction'
import { getAllTransaction } from '../../../../Redux/features/transactionSlice'
import { dataOffer } from '../../../DataDummy'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListTransaction.module.css'

const ListTransaction = () => {

    const dispatch = useDispatch()
    const { dataUserVerification } = useSelector(state => state.authUserReducer)
    const { dataAllTransaction } = useSelector(state => state.transactionReducer)

    useEffect(() => {
        if (dataUserVerification) {
            dispatch(getAllTransaction({ idBuyer: dataUserVerification.data.userId }))
        }
        Aos.init({ duration: 1800 })
    }, [dataUserVerification ? true : false])

    const noProduct = "https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif"

    return (
        <Dashboard menu="transaction">
            {dataAllTransaction ?
                <Tab.Container defaultActiveKey="1">
                    <Row className="m-0 gap-3">
                        <Col xs={12} className="p-0" data-aos="zoom-out-left">
                            <Nav variant="tabs" className={style.scroll_menu}>
                                <Nav.Item className="d-flex">
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="1">Belum Direspon ({dataAllTransaction.data.filter(obj => obj.bidStatus === "pending").length})</Nav.Link>
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="2">Diterima ({dataAllTransaction.data.filter(obj => obj.bidStatus === "processed").length})</Nav.Link>
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="3">Ditolak ({dataAllTransaction.data.filter(obj => obj.bidStatus === "declined").length})</Nav.Link>
                                    <Nav.Link style={{ color: "#1E1E1E" }} eventKey="4">Selesai ({dataAllTransaction.data.filter(obj => obj.bidStatus === "accepted").length})</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col xs={12} className="p-0">
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                    <Row>
                                        {dataAllTransaction.data.filter(obj => obj.bidStatus === "pending").length > 0 ?
                                            dataAllTransaction.data?.filter(obj => obj.bidStatus === "pending").map((value, index) => {
                                                return (
                                                    <Col xs={12} className={'pt-2 pb-2'} key={index} data-aos="fade-up">
                                                        <CardTransaction value={value} />
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
                                    {/* <Row>
                                        {dataOffer?.map((value, index) => {
                                            return (
                                                <Col xs={12} className={'pt-2 pb-2'} key={index}>
                                                    <CardTransaction value={value} />
                                                </Col>
                                            )
                                        })}
                                    </Row> */}
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    {/* <Row>
                                        {dataOffer?.map((value, index) => {
                                            return (
                                                <Col xs={12} className={'pt-2 pb-2'} key={index}>
                                                    <CardTransaction value={value} />
                                                </Col>
                                            )
                                        })}
                                    </Row> */}
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                    {/* <Row>
                                        {dataOffer?.map((value, index) => {
                                            return (
                                                <Col xs={12} className={'pt-2 pb-2'} key={index}>
                                                    <CardTransaction value={value} />
                                                </Col>
                                            )
                                        })}
                                    </Row> */}
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

export default ListTransaction