import Aos from 'aos'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Spinner } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../../../../Components/Card/CardProduct/CardProduct'
import { delRemoveAllWishlist, getAllWishlist } from '../../../../Redux/features/wishlistSlice'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListFavorit.module.css'

const ListFavorit = () => {

    const dispatch = useDispatch()
    const [StatusAlert, setStatusAlert] = useState({ loading: false, success: false })
    const { dataUserVerification } = useSelector(state => state.authUserReducer)
    const { dataAllWishlist, dataRemoveAllWishlist } = useSelector(state => state.wishlistReducer)

    useEffect(() => {
        if (dataUserVerification) {
            dispatch(getAllWishlist({ idUser: dataUserVerification.data.userId }))
        }
        Aos.init({ duration: 1800 })
    }, [dataUserVerification])

    useEffect(() => {
        if (dataRemoveAllWishlist) {
            if (dataRemoveAllWishlist.status == 200) {
                setStatusAlert({ loading: false, success: true })
            }
        }
    }, [dataRemoveAllWishlist])

    const handleRemoveAllWishlist = async () => {
        setStatusAlert({ ...StatusAlert, loading: true })
        await dispatch(delRemoveAllWishlist({ idUser: dataUserVerification.data.userId }))
    }

    const noProduct = "https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif"

    return (
        <Dashboard menu="favorit">
            {StatusAlert.success ? <SweetAlert success title="Produk Telah Dihapus Dari Favorit!" confirmBtnBsStyle={'dark'} onConfirm={() => window.location.reload()}></SweetAlert> : null}
            {StatusAlert.loading ? <SweetAlert title="" confirmBtnStyle={{ display: "none" }} onConfirm={() => null}><Spinner animation="border" size="lg" /></SweetAlert> : null}
            {dataAllWishlist ?
                <Row className="m-0 gap-3">
                    <Col xs={12} className="p-0" data-aos="zoom-out-left">
                        <div className='d-flex'>
                            <div className='w-100 my-auto'><b style={{ fontSize: "1.25rem" }}>Favorit</b></div>
                            <div className='w-100 my-auto text-end'>{dataAllWishlist.data.length > 0 ? <Button size="sm" variant="outline-secondary" onClick={handleRemoveAllWishlist}>Hapus Semua</Button> : <Button size="sm" variant="outline-secondary" disabled>Hapus Semua</Button>}</div>
                        </div>
                        <hr className="mt-2 mb-1" />
                    </Col>
                    <Col xs={12} className="p-0">
                        <Row>
                            {dataAllWishlist.data.length > 0 ?
                                dataAllWishlist.data?.map((value, index) => {
                                    return (
                                        <Col lg={4} md={6} sm={12} xs={12} key={index} className={'pt-2 pb-2'} data-aos="fade-up">
                                            <CardProduct value={value.products} type="favorit" />
                                        </Col>
                                    )
                                })
                                :
                                <div className={'mt-1 ' + style.box} data-aos="fade-up">
                                    <img src={noProduct} width="100%" alt="product not found" />
                                </div>
                            }
                        </Row>
                    </Col>
                </Row>
                : null
            }
        </Dashboard>
    )
}

export default ListFavorit