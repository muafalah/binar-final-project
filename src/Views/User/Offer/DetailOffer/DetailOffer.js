import React from 'react'
import { Badge, Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { formatRupiah, formatTimestamp } from '../../../../Utils/helper'
import { dataOffer } from '../../../DataDummy'
import Dashboard from '../../Dashboard/Dashboard'
import style from './DetailOffer.module.css'

const DetailOffer = () => {
    return (
        <Dashboard menu="offer">
            <Row className={'m-0 ' + style.box_temp}>
                <Col xs={12} className='mt-3'>
                    <b style={{ fontSize: "1.25rem" }}>Detail Penawaran</b>
                    <hr className="mt-2 mb-2" />
                </Col>
                <Col xs={12} className="mt-2 mb-3">
                    <Row className="gap-2">
                        <Col xs={12}>
                            <Row>
                                <Col md={3} xs={6}>
                                    <div className="d-flex">
                                        <div className='w-100'><b>Kode Penawaran</b></div>
                                        <div><b>:</b></div>
                                    </div>
                                </Col>
                                <Col md={9} xs={6}>
                                    <span style={{ color: "#8A8A8A" }}>#DPSG00{dataOffer[0].id_offer}</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            <Row>
                                <Col md={3} xs={6}>
                                    <div className="d-flex">
                                        <div className='w-100'><b>Status Penawaran</b></div>
                                        <div><b>:</b></div>
                                    </div>
                                </Col>
                                <Col md={9} xs={6}>
                                    <span>
                                        {dataOffer[0].status === "pending" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Belum Direspon</Badge> : null}
                                        {dataOffer[0].status === "processed" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="success">Tawaran Diterima</Badge> : null}
                                        {dataOffer[0].status === "declined" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="danger">Tawaran Ditolak</Badge> : null}
                                        {dataOffer[0].status === "accepted" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="dark">Selesai</Badge> : null}
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            <Row>
                                <Col md={3} xs={6}>
                                    <div className="d-flex">
                                        <div className='w-100'><b>
                                            {dataOffer[0].status === "pending" ? "Ditawar Sejak" : null}
                                            {dataOffer[0].status === "processed" ? "Diterima Sejak" : null}
                                            {dataOffer[0].status === "declined" ? "Ditolak Sejak" : null}
                                            {dataOffer[0].status === "accepted" ? "Selesai Sejak" : null}
                                        </b></div>
                                        <div><b>:</b></div>
                                    </div>
                                </Col>
                                <Col md={9} xs={6}>
                                    <span style={{ fontSize: "0.875rem" }}>{formatTimestamp(dataOffer[0].updatedAt)}</span>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            <Row>
                                <Col md={3} xs={6}>
                                    <div className="d-flex">
                                        <div className='w-100'><b>Detail Penawaran</b></div>
                                        <div><b>:</b></div>
                                    </div>
                                </Col>
                                <Col md={12} xs={12} className="mt-2">
                                    <div className={'pt-2 pb-2 ' + style.box_temp}>
                                        <Row className="m-0">
                                            <Col md={8} xs={12} className="p-0">
                                                <a href={'/product/' + dataOffer[0].product.id_product} className="d-flex gap-3 ps-2 pe-2">
                                                    <div className="my-auto"><img src={dataOffer[0].product.image} alt="Photo Product" height="90rem" width="90rem" style={{ borderRadius: "8px" }} /></div>
                                                    <div className="my-auto d-grid gap-1">
                                                        <div>
                                                            <div className={style.box_category} style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{dataOffer[0].product.category.name}</div>
                                                            <div style={{ fontWeight: "500", color: "black" }}>{dataOffer[0].product.name}</div>
                                                        </div>
                                                        <div><span style={{ fontSize: "0.875rem", fontWeight: "400", color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(dataOffer[0].product.price)}</span>  <span style={{ fontWeight: "600", color: "#fb374f" }}>Rp. {formatRupiah(dataOffer[0].price)}</span></div>
                                                    </div>
                                                </a>
                                                <hr className={'m-0 p-0 mt-3 mb-3 ' + style.line_horizontal} />
                                            </Col>
                                            <Col md={4} xs={12} className="p-0">
                                                <div className="d-flex ms-1 me-1 ms-md-0 me-md-0">
                                                    <div className={'my-auto me-3 ' + style.line_vertical}></div>
                                                    <a href={'/seller/' + dataOffer[0].user.username} className="w-100 d-flex gap-3 mb-2 ps-2 pe-2 ps-md-0 pe-md-0">
                                                        <div className='my-auto'><img src={dataOffer[0].user.image} alt="Photo Product" height="50rem" width="50rem" style={{ borderRadius: "8px" }} /></div>
                                                        <div className='my-auto w-100'>
                                                            <div style={{ color: "black" }}><b>{dataOffer[0].user.fullname}</b></div>
                                                            <div><span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{dataOffer[0].user.city.name}</span></div>
                                                        </div>
                                                        <div className={'my-auto ' + style.button_user}><Link to={'/seller/' + dataOffer[0].user.username}><Button variant="outline-secondary">Lihat</Button></Link></div>
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            {dataOffer[0].status === "pending" ?
                                <div className="pt-2 d-flex gap-2 justify-content-end">
                                    <Button className={style.button_respon} variant="danger">Tolak Penawaran</Button>
                                    <Button className={style.button_respon} variant="success">Terima Penawaran</Button>
                                </div>
                                : null
                            }
                            {dataOffer[0].status === "processed" ?
                                <div className="pt-2 d-flex gap-2 justify-content-end">
                                    <Button href={'https://wa.me/' + dataOffer[0].user.no_hp} target="_blank" className={style.button_respon} variant="outline-secondary">Hubungi Penawar</Button>
                                    <Button className={style.button_respon} variant="success">Ubah Status</Button>
                                </div>
                                : null
                            }
                            {dataOffer[0].status === "declined" ?
                                <div className="pt-2 d-flex gap-2 justify-content-end">
                                    <Button href={'https://wa.me/' + dataOffer[0].user.no_hp} target="_blank" className={style.button_respon} variant="outline-secondary">Hubungi Penawar</Button>
                                    <Button className={style.button_respon} variant="dark">Perbarui Tawaran</Button>
                                </div>
                                : null
                            }
                            {dataOffer[0].status === "accepted" ?
                                <div className="pt-2 d-flex gap-2 justify-content-end">
                                    <Button href={'https://wa.me/' + dataOffer[0].user.no_hp} target="_blank" className={style.button_respon} variant="outline-secondary">Hubungi Penawar</Button>
                                    <Button className={style.button_respon} variant="success">Cetak Bukti</Button>
                                </div>
                                : null
                            }
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Dashboard>
    )
}

export default DetailOffer