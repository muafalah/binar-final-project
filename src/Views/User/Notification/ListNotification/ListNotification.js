import React from 'react'
import { Button, Col, Row, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { formatRupiah, formatTimestamp } from '../../../../Utils/helper'
import { dataNotification } from '../../../DataDummy'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListNotification.module.css'

const ListNotification = () => {
    return (
        <Dashboard menu="notification">
            <Row className="m-0 gap-3">
                <Col xs={12} className="p-0">
                    <div className='d-flex'>
                        <div className='w-100 my-auto'><b style={{ fontSize: "1.25rem" }}>Notifikasi</b></div>
                        <div className='w-100 my-auto text-end'><Button size="sm" variant="outline-secondary">Hapus Semua</Button></div>
                    </div>
                    <hr className="mt-2 mb-1" />
                </Col>
                <Col xs={12} className="p-0">
                    <Row>
                        {dataNotification?.map((value, index) => {
                            return (
                                <Col xs={12} className={'mb-3 '}>
                                    <Row className="m-0">
                                        <Col xs={12} className={'p-0 pt-1 pb-1 ps-2 pe-2 ' + style.box_top}>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    {value.offer.status === "pending" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran Dalam Proses</Badge> : null}
                                                    {value.offer.status === "processed" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran Diterima</Badge> : null}
                                                    {value.offer.status === "declined" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran Ditolak</Badge> : null}
                                                    {value.offer.status === "accepted" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Penawaran Selesai</Badge> : null}
                                                </div>
                                                <div><span style={{ fontSize: "0.875rem", color: "#6c757d" }}>{formatTimestamp(value.createdAt)}</span></div>
                                            </div>
                                        </Col>
                                        <Col xs={12} className={'p-2 ' + style.box_middle}>
                                            <Row className="m-0">
                                                <Col md={8} xs={12} className="p-0">
                                                    <div className="d-flex gap-3">
                                                        <div className="my-auto"><img src={value.product.image} alt="Photo Product" height="90rem" width="90rem" /></div>
                                                        <div className="my-auto d-grid gap-1">
                                                            <div>
                                                                <div style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{value.product.category.name}</div>
                                                                <div style={{ fontWeight: "500", color: "black" }}>{value.product.name}</div>
                                                            </div>
                                                            <div><span style={{ fontWeight: "400", color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(value.product.price)}</span>  <span style={{ fontSize: "1.125rem", fontWeight: "600", color: "#fb374f" }}>Rp. {formatRupiah(value.offer.price)}</span></div>
                                                        </div>
                                                    </div>
                                                    <hr className={'m-0 p-0 mt-3 mb-3 ' + style.line_horizontal} />
                                                </Col>
                                                <Col md={4} xs={12} className="p-0">
                                                    <div className="d-flex">
                                                        <div className={'my-auto me-3 ' + style.line_vertical}></div>
                                                        <a href={'/seller/' + value.user.username} className="w-100 d-flex gap-3 mb-2 ps-2 pe-2 ps-md-0 pe-md-0">
                                                            <div className='my-auto'><img src={value.user.image} alt="Photo Product" height="50rem" width="50rem" style={{ borderRadius: "8px" }} /></div>
                                                            <div className='my-auto w-100'>
                                                                <div style={{ color: "black" }}><b>{value.user.fullname}</b></div>
                                                                <div><span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{value.user.city.name}</span></div>
                                                            </div>
                                                            <div className={'my-auto ' + style.button_user}><Link to={'/seller/' + value.user.username}><Button variant="outline-secondary">Lihat</Button></Link></div>
                                                        </a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
        </Dashboard>
    )
}

export default ListNotification