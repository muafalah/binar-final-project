import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { Badge, Button, ButtonGroup, Col, Form, Row, Spinner, ToggleButton } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { postAddNotification } from '../../../../Redux/features/notificationSlice'
import { getDetailOffer, putEditOffer } from '../../../../Redux/features/offerSlice'
import { putEditStatusProduct } from '../../../../Redux/features/productSlice'
import { formatCamelCase, formatRupiah, formatTimestamp } from '../../../../Utils/helper'
import Dashboard from '../../Dashboard/Dashboard'
import style from './DetailOffer.module.css'

const DetailOffer = () => {

    const dispatch = useDispatch()
    const { id_offer } = useParams()
    const [StatusDeclined, setStatusDeclined] = useState({ modal: false, loading: false, success: false })
    const [StatusAccepted, setStatusAccepted] = useState({ modal: false, loading: false, success: false })
    const [StatusUpdated, setStatusUpdated] = useState({ modal: false, loading: false, success: false, radio: null })
    const [StatusChanged, setStatusChanged] = useState({ modal: false, loading: false, success: false })
    const { dataDetailOffer, dataEditOffer } = useSelector(state => state.offerReducer)

    const paymentMethod = [
        { name: 'Berhasil Terjual', value: 'accepted', description: 'Kamu telah sepakat menjual produk ini kepada pembeli' },
        { name: 'Batalkan Transaksi', value: 'declined', description: 'Kamu membatalkan transaksi produk ini dengan pembeli' },
    ];

    useEffect(() => {
        dispatch(getDetailOffer({ idBid: id_offer }))
        Aos.init({ duration: 1800 })
    }, [])

    useEffect(() => {
        if (dataEditOffer) {
            if (dataEditOffer.status == 200) {
                setStatusDeclined({ modal: false, loading: false, success: true })
                setStatusAccepted({ modal: false, loading: false, success: true })
                setStatusUpdated({ modal: false, loading: false, success: true, radio: null })
                setStatusChanged({ modal: false, loading: false, success: true })
            }
        }
    }, [dataEditOffer])

    const handleDeclined = async () => {
        setStatusDeclined({ modal: false, loading: true, success: false })
        await dispatch(putEditOffer({ idBid: parseInt(id_offer), bidStatus: "declined", bidPrice: dataDetailOffer.data.bidPrice }))
        await dispatch(postAddNotification({ idBid: parseInt(id_offer) }))
        await dispatch(putEditStatusProduct({ idProduct: dataDetailOffer.data.products.productId, productStatus: "available" }))
    }

    const handleAccepted = async () => {
        setStatusAccepted({ modal: false, loading: true, success: false })
        await dispatch(putEditOffer({ idBid: parseInt(id_offer), bidStatus: "processed", bidPrice: dataDetailOffer.data.bidPrice }))
        await dispatch(postAddNotification({ idBid: parseInt(id_offer) }))
        await dispatch(putEditStatusProduct({ idProduct: dataDetailOffer.data.products.productId, productStatus: "bidded" }))
    }

    const handleUpdated = async () => {
        setStatusUpdated({ ...StatusDeclined, modal: false, loading: true })
        dispatch(putEditOffer({ idBid: parseInt(id_offer), bidStatus: StatusUpdated.radio, bidPrice: dataDetailOffer.data.bidPrice }))
        await dispatch(postAddNotification({ idBid: parseInt(id_offer) }))
        if (StatusUpdated.radio === 'accepted') {
            await dispatch(putEditStatusProduct({ idProduct: dataDetailOffer.data.products.productId, productStatus: "sold" }))
        } else if (StatusUpdated.radio === 'declined') {
            await dispatch(putEditStatusProduct({ idProduct: dataDetailOffer.data.products.productId, productStatus: "available" }))
        }
    }

    const handleChanged = async () => {
        setStatusChanged({ modal: false, loading: true, success: false })
        await dispatch(putEditOffer({ idBid: parseInt(id_offer), bidStatus: "processed", bidPrice: dataDetailOffer.data.bidPrice }))
        await dispatch(postAddNotification({ idBid: parseInt(id_offer) }))
        await dispatch(putEditStatusProduct({ idProduct: dataDetailOffer.data.products.productId, productStatus: "bidded" }))
    }

    return (
        <Dashboard menu="offer">
            {StatusDeclined.modal ? <SweetAlert danger showCancel cancelBtnText="Batal" confirmBtnText="Tolak" cancelBtnBsStyle="light" confirmBtnBsStyle="danger" title="Apakah Kamu Yakin?" onConfirm={handleDeclined} onCancel={() => setStatusDeclined({ modal: false, loading: false, success: false })}></SweetAlert> : null}
            {StatusAccepted.modal ? <SweetAlert info showCancel cancelBtnText="Batal" confirmBtnText="Terima" cancelBtnBsStyle="light" confirmBtnBsStyle="success" title="Apakah Kamu Yakin?" onConfirm={handleAccepted} onCancel={() => setStatusAccepted({ modal: false, loading: false, success: false })}></SweetAlert> : null}
            {StatusUpdated.modal ?
                <SweetAlert
                    showCancel
                    cancelBtnText="Batal"
                    confirmBtnText="Kirim"
                    cancelBtnBsStyle="light"
                    confirmBtnBsStyle="success"
                    title="Perbarui Status"
                    onConfirm={handleUpdated}
                    onCancel={() => setStatusUpdated({ modal: false, loading: false, success: false, radio: false })}>
                    <div className={'d-flex gap-3 p-2 mt-2 mb-3 ' + style.box}>
                        <div className="my-auto"><img src={dataDetailOffer.data.products.imageProductsSet[0].imageUrl} alt="Photo Product" height="90rem" width="90rem" style={{ borderRadius: "5px" }} /></div>
                        <div className="my-auto d-grid gap-2 text-start">
                            <div style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{dataDetailOffer.data.products.categories.categoryName}</div>
                            <div style={{ fontWeight: "500", color: "black" }}>{dataDetailOffer.data.products.productName}</div>
                            <span style={{ fontSize: "1.125rem", fontWeight: "600", color: "#fb374f" }}>Rp. {formatRupiah(dataDetailOffer.data.bidPrice)}</span>
                        </div>
                    </div>
                    <ButtonGroup className={'d-grid gap-1'}>
                        {paymentMethod.map((value, index) => (
                            <div className={'d-grid'} key={index}>
                                <ToggleButton className="mt-1 mb-1" style={{ borderRadius: "3px", padding: "0px" }} id={`radio-${index}`} type="radio" variant="transparant" name="radio" value={value.value} checked={StatusUpdated.radio === value.value} onChange={(e) => setStatusUpdated({ ...StatusUpdated, radio: e.currentTarget.value })}>
                                    <div className={'d-flex gap-3'}>
                                        <Form.Check type="radio" checked={StatusUpdated.radio === value.value} readOnly />
                                        <div className={'d-grid gap-1'}>
                                            <div className="text-start"><b>{value.name}</b></div>
                                            <div className="text-start" style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{value.description}</div>
                                        </div>
                                    </div>
                                </ToggleButton>
                            </div>
                        ))}
                    </ButtonGroup>
                </SweetAlert>
                : null}
            {StatusChanged.modal ? <SweetAlert warning showCancel cancelBtnText="Batal" confirmBtnText="Ubah Status" cancelBtnBsStyle="light" confirmBtnBsStyle="dark" title="Apakah Kamu Yakin?" onConfirm={handleChanged} onCancel={() => setStatusChanged({ modal: false, loading: false, success: false })}>Dengan mengubah status penawaran ini berarti anda telah menerima penawaran dari pembeli.</SweetAlert> : null}
            {StatusAccepted.loading || StatusDeclined.loading || StatusUpdated.loading || StatusChanged.loading ? <SweetAlert title="" confirmBtnStyle={{ display: "none" }} onConfirm={() => null}><Spinner animation="border" size="lg" /></SweetAlert> : null}
            {StatusAccepted.success || StatusDeclined.success || StatusUpdated.success || StatusChanged.success ? <SweetAlert success title="Status Penawaran Diperbarui!" confirmBtnBsStyle={'dark'} onConfirm={() => window.location.reload()}></SweetAlert> : null}
            {dataDetailOffer ?
                <Row className={'m-0 ' + style.box_temp} data-aos="fade-up">
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
                                        <span style={{ color: "#8A8A8A" }}>#DPSG00{dataDetailOffer.data.bidId}</span>
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
                                            {dataDetailOffer.data.bidStatus === "pending" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="secondary">Belum Direspon</Badge> : null}
                                            {dataDetailOffer.data.bidStatus === "processed" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="success">Tawaran Diterima</Badge> : null}
                                            {dataDetailOffer.data.bidStatus === "declined" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="danger">Tawaran Ditolak</Badge> : null}
                                            {dataDetailOffer.data.bidStatus === "accepted" ? <Badge style={{ fontSize: "0.875rem", fontWeight: "400" }} bg="dark">Selesai</Badge> : null}
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12}>
                                <Row>
                                    <Col md={3} xs={6}>
                                        <div className="d-flex">
                                            <div className='w-100'><b>
                                                {dataDetailOffer.data.bidStatus === "pending" ? "Ditawar Sejak" : null}
                                                {dataDetailOffer.data.bidStatus === "processed" ? "Diterima Sejak" : null}
                                                {dataDetailOffer.data.bidStatus === "declined" ? "Ditolak Sejak" : null}
                                                {dataDetailOffer.data.bidStatus === "accepted" ? "Selesai Sejak" : null}
                                            </b></div>
                                            <div><b>:</b></div>
                                        </div>
                                    </Col>
                                    <Col md={9} xs={6}>
                                        <span style={{ fontSize: "0.875rem" }}>{formatTimestamp(dataDetailOffer.data.updatedAt)}</span>
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
                                                    <a href={'/product/' + dataDetailOffer.data.products.productId} className="d-flex gap-3 ps-2 pe-2">
                                                        <div className="my-auto"><img src={dataDetailOffer.data.products.imageProductsSet[0].imageUrl} alt="Photo Product" height="90rem" width="90rem" style={{ borderRadius: "8px" }} /></div>
                                                        <div className="my-auto d-grid gap-1">
                                                            <div>
                                                                <div className={style.box_category} style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{dataDetailOffer.data.products.categories.categoryName}</div>
                                                                <div style={{ fontWeight: "500", color: "black" }}>{dataDetailOffer.data.products.productName}</div>
                                                            </div>
                                                            <div><span style={{ fontSize: "0.875rem", fontWeight: "400", color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(dataDetailOffer.data.products.price)}</span>  <span style={{ fontWeight: "600", color: "#fb374f" }}>Rp. {formatRupiah(dataDetailOffer.data.bidPrice)}</span></div>
                                                        </div>
                                                    </a>
                                                    <hr className={'m-0 p-0 mt-3 mb-3 ' + style.line_horizontal} />
                                                </Col>
                                                <Col md={4} xs={12} className="p-0">
                                                    <div className="d-flex ms-1 me-1 ms-md-0 me-md-0">
                                                        <div className={'my-auto me-3 ' + style.line_vertical}></div>
                                                        <div className="w-100 d-flex gap-3 mb-2 ps-2 pe-2 ps-md-0 pe-md-0">
                                                            <a href={'/seller/' + dataDetailOffer.data.users.username} className="w-100 d-flex gap-3">
                                                                <div className='my-auto'><img src={dataDetailOffer.data.users.img} alt="Photo Product" height="50rem" width="50rem" style={{ borderRadius: "8px" }} /></div>
                                                                <div className='my-auto w-100'>
                                                                    <div style={{ color: "black" }}><b>{formatCamelCase(dataDetailOffer.data.users.fullName)}</b></div>
                                                                    <div><span style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{formatCamelCase(dataDetailOffer.data.users.cities.cityName)}</span></div>
                                                                </div>
                                                            </a>
                                                            <div className={'my-auto ' + style.button_user}><Button variant="outline-secondary" href={'/seller/' + dataDetailOffer.data.users.username}>Lihat</Button></div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={12}>
                                {dataDetailOffer.data.bidStatus === "pending" ?
                                    <div className="pt-2 d-flex gap-2 justify-content-end">
                                        <Button className={style.button_respon} variant="outline-danger" onClick={() => setStatusDeclined({ ...StatusDeclined, modal: true })}>Tolak Penawaran</Button>
                                        <Button className={style.button_respon} variant="success" onClick={() => setStatusAccepted({ ...StatusAccepted, modal: true })}>Terima Penawaran</Button>
                                    </div>
                                    : null
                                }
                                {dataDetailOffer.data.bidStatus === "processed" ?
                                    <div className="pt-2 d-flex gap-2 justify-content-end">
                                        <Button href={'https://wa.me/' + dataDetailOffer.data.users.phone} target="_blank" className={style.button_respon} variant="outline-secondary">Hubungi Pembeli</Button>
                                        <Button className={style.button_respon} variant="success" onClick={() => setStatusUpdated({ ...StatusUpdated, modal: true })}>Ubah Status</Button>
                                    </div>
                                    : null
                                }
                                {dataDetailOffer.data.bidStatus === "declined" ?
                                    <div className="pt-2 d-flex gap-2 justify-content-end">
                                        <Button href={'https://wa.me/' + dataDetailOffer.data.users.phone} target="_blank" className={style.button_respon} variant="outline-secondary">Hubungi Pembeli</Button>
                                        <Button className={style.button_respon} variant="dark" onClick={() => setStatusChanged({ ...StatusChanged, modal: true })}>Perbarui Tawaran</Button>
                                    </div>
                                    : null
                                }
                                {dataDetailOffer.data.bidStatus === "accepted" ?
                                    <div className="pt-2 d-flex gap-2 justify-content-end">
                                        <Button href={'https://wa.me/' + dataDetailOffer.data.users.phone} target="_blank" className={style.button_respon} variant="outline-secondary">Hubungi Pembeli</Button>
                                        <Button className={style.button_respon} variant="success">Cetak Bukti</Button>
                                    </div>
                                    : null
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                : null
            }
        </Dashboard>
    )
}

export default DetailOffer