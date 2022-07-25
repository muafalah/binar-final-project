import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button, Badge, Form, Spinner, Modal } from 'react-bootstrap'
import { ChatDotsFill, HeartFill } from 'react-bootstrap-icons'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CardProduct from '../../../Components/Card/CardProduct/CardProduct'
import SliderProduct from '../../../Components/Slider/SliderProduct/SliderProduct'
import { getUserVerification } from '../../../Redux/features/authUser'
import { postAddNotification } from '../../../Redux/features/notificationSlice'
import { getDetailProduct, getRelatedProduct } from '../../../Redux/features/productSlice'
import { postAddTransaction } from '../../../Redux/features/transactionSlice'
import { delRemoveWishlist, getCheckWishlist, postAddWishlist } from '../../../Redux/features/wishlistSlice'
import { formatCamelCase, formatDate, formatRupiah } from '../../../Utils/helper'
import Layout from '../../Layout'
import style from './DetailProduct.module.css'

const DetailProduct = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id_product } = useParams()
    const [BidPrice, setBidPrice] = useState()
    const [StatusAlert, setStatusAlert] = useState({ tawarHarga: false, invalid: false, success: false })
    const [StatusAddWishlist, setStatusAddWishlist] = useState({ success: false, loading: false })
    const [StatusRemoveWishlist, setStatusRemoveWishlist] = useState({ success: false, loading: false })
    const { dataDetailProduct, dataRelatedProduct } = useSelector(state => state.productReducer)
    const { dataUserVerification } = useSelector(state => state.authUserReducer)
    const { dataCheckWishlist, dataAddWishlist, dataRemoveWishlist } = useSelector(state => state.wishlistReducer)
    const { isLoading, isSuccess, isError, dataAddTransaction } = useSelector(state => state.transactionReducer)

    useEffect(() => {
        dispatch(getDetailProduct({ idProduct: id_product }))
        if (dataDetailProduct) {
            dispatch(getRelatedProduct({ idCategory: dataDetailProduct.data.categories.categoryId }))
        }
        Aos.init({ duration: 1800 })
    }, [dataDetailProduct ? true : false])

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("TokenSecondGadget"))) {
            dispatch(getUserVerification())
        }
        if (dataUserVerification) {
            dispatch(getCheckWishlist({ idUser: dataUserVerification.data.userId, idProduct: id_product }))
        }
    }, [dataUserVerification ? true : false])

    useEffect(() => {
        if (dataAddTransaction) {
            if (dataAddTransaction.status == 201) {
                dispatch(postAddNotification({ idBid: parseInt(dataAddTransaction.data.bidId) }))
                setStatusAlert({ success: true })
            }
        }
    }, [dataAddTransaction])

    useEffect(() => {
        if (dataRemoveWishlist) {
            if (dataRemoveWishlist.status == 200) {
                setStatusRemoveWishlist({ success: true, loading: false })
            }
        }
    }, [dataRemoveWishlist])

    useEffect(() => {
        if (dataAddWishlist) {
            if (dataAddWishlist.status == 201) {
                setStatusAddWishlist({ success: true, loading: false })
            }
        }
    }, [dataAddWishlist])

    const handleTawarHarga = async () => {
        if (BidPrice) {
            await dispatch(postAddTransaction({ idUser: dataUserVerification.data.userId, idProduct: parseInt(id_product), bidPrice: parseInt(BidPrice) }))
        } else {
            setStatusAlert({ tawarHarga: true, invalid: true })
        }
    }

    const handleAddWishlist = async () => {
        setStatusAddWishlist({ ...StatusRemoveWishlist, loading: true })
        await dispatch(postAddWishlist({ idProduct: parseInt(id_product), idUser: parseInt(dataUserVerification.data.userId) }))
    }

    const handleRemoveWishlist = async () => {
        setStatusRemoveWishlist({ ...StatusRemoveWishlist, loading: true })
        await dispatch(delRemoveWishlist({ idProduct: id_product, idUser: dataUserVerification.data.userId }))
        window.location.reload()
    }

    const contentDetailProduct = () => {
        return (
            <Container>
                <Modal show={StatusAddWishlist.loading || StatusRemoveWishlist.loading} onHide={StatusAddWishlist.success || StatusRemoveWishlist.success} centered>
                    <Modal.Body className="text-center" size="sm"><Spinner animation="border" size="lg" /></Modal.Body>
                </Modal>
                <Row>
                    <Col lg={5} className="mt-3" style={{ backgroundColor: "white" }} data-aos="fade-right">
                        <div className="p-3">
                            <SliderProduct data={dataDetailProduct.data.imageProductsSet} />
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className='ps-lg-3'>
                            <Row>
                                <Col md={12} className="mt-3" style={{ backgroundColor: "white", }} data-aos="fade-left">
                                    <Row className="gap-3 pt-3 pb-3 ps-lg-2 pe-lg-2">
                                        <Col xs={12}>
                                            <h3 style={{ fontWeight: "500" }}>{dataDetailProduct.data.productName}</h3>
                                            <div style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>Terakhir diperbarui pada tanggal {formatDate(dataDetailProduct.data.updatedAt)}</div>
                                        </Col>
                                        <Col xs={12} className="mb-2">
                                            {dataDetailProduct.data.productStatus === "sold" ? <div className="d-flex gap-2"><span><h3 style={{ color: "#8A8A8A", textDecoration: "line-through" }}>Rp. {formatRupiah(dataDetailProduct.data.price)},-</h3></span><span><Badge style={{ fontSize: "1rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <h3 style={{ color: "#fb374f" }}>Rp. {formatRupiah(dataDetailProduct.data.price)},-</h3>}
                                        </Col>
                                        <Col xs={12} className={style.detail_lg}>
                                            <div style={{ backgroundColor: "#F4F4F4" }} className="d-flex gap-2 justify-content-between p-2">
                                                <div className="text-center w-100">
                                                    <b>Kategori</b>
                                                    <div><a style={{ color: "black" }} href={'/search/keyword=' + dataDetailProduct.data.categories.categoryName + '&type=product&sort=1&category=' + dataDetailProduct.data.categories.categoryId + '&location=null&minprice=null&maxprice=null'}>{dataDetailProduct.data.categories.categoryName}</a></div>
                                                </div>
                                                <div className={style.line}></div>
                                                <div className="text-center w-100">
                                                    <b>Lokasi</b>
                                                    <div><a style={{ color: "black" }} href={'/search/keyword=' + dataDetailProduct.data.categories.categoryName + '&type=product&sort=1&category=' + dataDetailProduct.data.categories.categoryId + '&location=' + dataDetailProduct.data.users.cities.idCity + '&minprice=null&maxprice=null'}>{formatCamelCase(dataDetailProduct.data.users.cities.cityName)}</a></div>
                                                </div>
                                                <div className={style.line}></div>
                                                <div className="text-center w-100">
                                                    <b>Serial Number</b>
                                                    <div><a style={{ color: "black" }} href={'https://www.imei.info/apple-sn-check/?sn=' + dataDetailProduct.data.serialNumber} target="_blank">{dataDetailProduct.data.serialNumber}</a></div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} className={style.detail_sm}>
                                            <div style={{ backgroundColor: "#F4F4F4" }} className="d-grid gap-1 p-3">
                                                <div className="d-flex w-100">
                                                    <div className='w-100'><b>Kategori</b></div>
                                                    <div className='w-100'><a style={{ color: "black" }} href={'/search/keyword=' + dataDetailProduct.data.categories.categoryName + '&type=product&sort=1&category=' + dataDetailProduct.data.categories.categoryId + '&location=null&minprice=null&maxprice=null'}>{dataDetailProduct.data.categories.categoryName}</a></div>
                                                </div>
                                                <div className="d-flex w-100">
                                                    <div className='w-100'><b>Lokasi</b></div>
                                                    <div className='w-100'><a style={{ color: "black" }} href={'/search/keyword=' + dataDetailProduct.data.categories.categoryName + '&type=product&sort=1&category=' + dataDetailProduct.data.categories.categoryId + '&location=' + dataDetailProduct.data.users.cities.idCity + '&minprice=null&maxprice=null'}>{formatCamelCase(dataDetailProduct.data.users.cities.cityName)}</a></div>
                                                </div>
                                                <div className="d-flex w-100">
                                                    <div className='w-100'><b>Serial Number</b></div>
                                                    <div className='w-100'><a style={{ color: "black" }} href={'https://www.imei.info/apple-sn-check/?sn=' + dataDetailProduct.data.serialNumber} target="_blank">{dataDetailProduct.data.serialNumber}</a></div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} className="mt-2">
                                            <Row>
                                                <Col lg={3} md={3} xs={5} className="mt-3">
                                                    {JSON.parse(localStorage.getItem("TokenSecondGadget")) ?
                                                        dataDetailProduct.data.users.userId === dataUserVerification.data.userId ?
                                                            <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="outline-dark" style={{ fontSize: "1.125rem" }} disabled><HeartFill className='my-auto me-2' size={16} /> Favorit</Button>
                                                            :
                                                            dataCheckWishlist ?
                                                                dataCheckWishlist.status == 200 ?
                                                                    dataCheckWishlist.data === "true" ?
                                                                        <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="dark" style={{ fontSize: "1.125rem" }} onClick={handleRemoveWishlist}><HeartFill className='my-auto me-2' size={16} /> Favorit</Button>
                                                                        :
                                                                        <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="outline-dark" style={{ fontSize: "1.125rem" }} onClick={handleAddWishlist}><HeartFill className='my-auto me-2' size={16} /> Favorit</Button>
                                                                    : null
                                                                : null
                                                        :
                                                        <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="outline-dark" style={{ fontSize: "1.125rem" }} disabled><HeartFill className='my-auto me-2' size={16} /> Favorit</Button>}
                                                </Col>
                                                <Col lg={4} md={4} xs={7} className="mt-3">
                                                    <a href={'https://wa.me/' + dataDetailProduct.data.users.phone} target="_blank"><Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="outline-dark" style={{ fontSize: "1.125rem" }}><ChatDotsFill className='my-auto me-2' size={16} /> Chat Penjual</Button></a>
                                                </Col>
                                                <Col lg={5} md={5} className="mt-3">
                                                    {dataDetailProduct.data.productStatus === "sold" ?
                                                        <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="danger" style={{ fontSize: "1.125rem" }} disabled>Tawar Harga</Button>
                                                        :
                                                        localStorage.getItem("TokenSecondGadget") ?
                                                            dataDetailProduct.data.users.userId === dataUserVerification.data.userId ?
                                                                <Button href={'/dashboard/product/edit/' + dataDetailProduct.data.productId} className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="danger" style={{ fontSize: "1.125rem" }}>Edit Produk</Button>
                                                                :
                                                                <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="danger" style={{ fontSize: "1.125rem" }} onClick={() => JSON.parse(localStorage.getItem("TokenSecondGadget")) ? setStatusAlert({ ...StatusAlert, tawarHarga: true }) : navigate("/login")}>Tawar Harga</Button>
                                                            :
                                                            <Button className="w-100 d-flex align-content-center justify-content-center" size="lg" variant="danger" style={{ fontSize: "1.125rem" }} onClick={() => JSON.parse(localStorage.getItem("TokenSecondGadget")) ? setStatusAlert({ ...StatusAlert, tawarHarga: true }) : navigate("/login")}>Tawar Harga</Button>
                                                    }
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={12} className="mt-3" style={{ backgroundColor: "white", }} data-aos="fade-left" data-aos-duration="3000">
                                    <Row className='mt-3 mb-3 ps-lg-2 pe-lg-2'>
                                        <Col md={2} xs={3}>
                                            <img src={dataDetailProduct.data.users.img} alt="Profile Seller" style={{ borderRadius: "100px", width: "5rem", height: "5rem", overflow: "auto" }} />
                                        </Col>
                                        <Col md={7} xs={6} className="d-grid align-content-center gap-2">
                                            <div>
                                                <h5>{formatCamelCase(dataDetailProduct.data.users.fullName)}</h5>
                                                <div style={{ color: "#6C757D" }}>@{dataDetailProduct.data.users.username}</div>
                                            </div>
                                        </Col>
                                        <Col md={3} xs={3} className="my-auto">
                                            <a href={'/seller/' + dataDetailProduct.data.users.username}><Button className="w-100" variant="outline-secondary">Lihat</Button></a>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={12} className="mt-3 pt-3 pb-3 ps-lg-3 pe-lg-3" style={{ backgroundColor: "white" }} data-aos="fade-up">
                        <h5 className="mt-2">Deskripsi</h5>
                        <hr />
                        <div>
                            {dataDetailProduct.data.description}
                        </div>
                    </Col>
                    <Col lg={12} className="mt-3 mb-3 pt-3 pb-3 ps-lg-3 pe-lg-3" style={{ backgroundColor: "white" }} data-aos="fade-up">
                        <h5 className="mt-2">Produk Lainnya</h5>
                        <hr />
                        <Row>
                            {dataRelatedProduct.data?.map((value, index) => {
                                return (
                                    <Col lg={3} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'} data-aos="fade-up" data-aos-duration="3000">
                                        <CardProduct value={value} type="default" />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Layout>
            {StatusAlert.tawarHarga ?
                <SweetAlert
                    showCancel
                    cancelBtnBsStyle="light"
                    cancelBtnStyle={isLoading ? { display: "none" } : null}
                    confirmBtnBsStyle="danger"
                    confirmBtnStyle={isLoading ? { display: "none" } : null}
                    placeHolder="Deskripsi singkat tokomu"
                    title="Tawar Harga"
                    onConfirm={handleTawarHarga}
                    confirmBtnText="Tawar Harga"
                    onCancel={() => setStatusAlert({ ...StatusAlert, tawarHarga: false })}
                    cancelBtnText="Batal"
                >
                    {isLoading ?
                        <Spinner animation="border" size="lg" />
                        :
                        <>
                            <div className={'d-flex gap-3 p-2 mt-2 ' + style.box}>
                                <div className="my-auto"><img src={dataDetailProduct.data.imageProductsSet[0].imageUrl} alt="Photo Product" height="90rem" width="90rem" style={{ borderRadius: "5px" }} /></div>
                                <div className="my-auto d-grid gap-2 text-start">
                                    <div style={{ fontSize: "0.875rem", color: "#8A8A8A" }}>{dataDetailProduct.data.categories.categoryName}</div>
                                    <div style={{ fontWeight: "500", color: "black" }}>{dataDetailProduct.data.productName}</div>
                                    <span style={{ fontSize: "1.125rem", fontWeight: "600", color: "#fb374f" }}>Rp. {formatRupiah(dataDetailProduct.data.price)}</span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <p className='text-start' style={{ fontSize: "0.875rem" }}>Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
                            </div>
                            <Form>
                                <Form.Group className="mt-3 text-start">
                                    <Form.Label style={{ fontSize: "1rem" }}><b style={{ fontWeight: "500" }}>Harga Tawar</b></Form.Label>
                                    <Form.Control type="number" name="price" placeholder="Rp. 00.000" onChange={(e) => setBidPrice(e.target.value)} isInvalid={StatusAlert.invalid} />
                                    <Form.Control.Feedback type="invalid">
                                        Masukkan harga yang kamu tawarkan.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form>
                        </>
                    }
                </SweetAlert>
                : null
            }
            {StatusAlert.success ? <SweetAlert success title="Penawaran Berhasil Dikirimkan!" confirmBtnBsStyle={'dark'} onConfirm={() => navigate("/dashboard/transaction/list")}></SweetAlert> : null}
            {StatusAddWishlist.success ? <SweetAlert success title="Produk Ditambahkan ke Favorit!" confirmBtnBsStyle={'dark'} onConfirm={() => window.location.reload()}></SweetAlert> : null}
            {StatusRemoveWishlist.success ? <SweetAlert danger title="Produk Dihapus dari Favorit!" confirmBtnBsStyle={'dark'} onConfirm={() => window.location.reload()}></SweetAlert> : null}
            {dataDetailProduct && dataRelatedProduct ?
                dataDetailProduct.data.productStatus == "archive" ?
                    dataUserVerification ?
                        dataDetailProduct.data.users.userId === dataUserVerification.data.userId ?
                            contentDetailProduct()
                            : navigate('/')
                        : navigate('/')
                    :
                    contentDetailProduct()
                : null
            }
        </Layout>
    )
}

export default DetailProduct