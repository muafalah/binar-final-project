import React, { useEffect, useState } from "react"
import { Badge, Button, Card, Col, Row, Spinner, Modal } from "react-bootstrap"
import { GeoAltFill, PencilSquare, PersonFill, Trash, GearFill } from "react-bootstrap-icons"
import SweetAlert from "react-bootstrap-sweetalert"
import { useDispatch, useSelector } from "react-redux"
import { delRemoveWishlist } from "../../../Redux/features/wishlistSlice"
import { formatCamelCase, formatRupiah } from "../../../Utils/helper"
import style from "./CardProduct.module.css"

const CardProduct = ({ value, type }) => {

  const dispatch = useDispatch()
  const [Load, setLoad] = useState(false)
  const [StatusRemoveWishlist, setStatusRemoveWishlist] = useState({ success: false, loading: false })
  const [RemoveProduct, setRemoveProduct] = useState({ alert: false, success: false, failed: false, idProduct: 0 })
  const { dataRemoveWishlist } = useSelector(state => state.wishlistReducer)
  const { dataUserVerification } = useSelector(state => state.authUserReducer)

  useEffect(() => {
    if (dataRemoveWishlist) {
      if (dataRemoveWishlist.status == 200) {
        setStatusRemoveWishlist({ loading: false, success: true })
      }
    }
  }, [dataRemoveWishlist])

  const handleRemoveWishlist = async () => {
    setStatusRemoveWishlist({ ...StatusRemoveWishlist, loading: true })
    await dispatch(delRemoveWishlist({ idProduct: value.productId, idUser: dataUserVerification.data.userId }))
  }

  const handleRemoveProduct = async (e) => {
    if (RemoveProduct.idProduct) {
      setLoad(true)
      setRemoveProduct({ ...RemoveProduct, alert: false })
    }
  }

  return (
    <>
      {StatusRemoveWishlist.success ? <SweetAlert danger title="Produk Dihapus dari Favorit!" confirmBtnBsStyle={'dark'} onConfirm={() => window.location.reload()}></SweetAlert> : null}
      {RemoveProduct.alert ? <SweetAlert danger showCancel confirmBtnText="Hapus" cancelBtnText="Batal" confirmBtnBsStyle="danger" cancelBtnBsStyle="outline-secondary" title="Apakah Kamu Yakin?" onConfirm={handleRemoveProduct} onCancel={() => setRemoveProduct({ ...RemoveProduct, alert: false })}>Produk yang sudah dihapus tidak akan bisa dikembalikan lagi!</SweetAlert> : null}
      {Load ? <SweetAlert title="" onConfirm={handleRemoveProduct} confirmBtnText="" confirmBtnStyle={{ display: "none" }}><Spinner animation="border" size="lg" /></SweetAlert> : RemoveProduct.success ? <SweetAlert success title="Kategori Dihapus!" confirmBtnBsStyle={'dark'} onConfirm={() => window.location.reload()}></SweetAlert> : null}
      <Modal show={StatusRemoveWishlist.loading} onHide={StatusRemoveWishlist.success} centered>
        <Modal.Body className="text-center" size="sm"><Spinner animation="border" size="lg" /></Modal.Body>
      </Modal>
      {type === "default" ?
        <div>
          <a href={'/product/' + value.productId} style={{ color: "black", borderRadius: "8px", height: "100%" }}>
            <Card className={`mt-1 mb-1 ${style.cardproduct}`}>
              <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.imageProductsSet[0].imageUrl} style={{ height: "10rem", width: "min-content" }} /></div>
              <Card.Body style={{ backgroundColor: "#FAFAFA" }} className="d-grid gap-1">
                <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.productName}</div>
                {value.productStatus === "sold" ? <div className="d-flex gap-2"><span style={{ fontSize: "1.25rem", fontWeight: "600", color: "#8A8A8A", paddingBottom: "5px", textDecoration: "line-through" }}>Rp. {formatRupiah(value.price)}</span><span><Badge style={{ fontSize: "0.75rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#FB374F", paddingBottom: "5px" }}>Rp. {formatRupiah(value.price)}</div>}
                <div>
                  <div style={{ fontSize: "0.825rem", fontWeight: "400", color: "#777777" }} className="w-100 d-flex"><PersonFill className='my-auto me-1 mb-1' size={14} /> {formatCamelCase(value.users.fullName)}</div>
                  <div style={{ fontSize: "0.825rem", fontWeight: "400", color: "#777777" }} className="w-100 d-flex"><GeoAltFill className='my-auto me-1 mb-1' size={14} /> {formatCamelCase(value.users.cities.cityName)}</div>
                </div>
              </Card.Body>
            </Card>
          </a>
        </div>
        : null
      }
      {type === "available" ?
        <div style={{ borderRadius: "8px", height: "100%" }}>
          <Card className={'mt-1 mb-1 '} style={{ height: "100%" }}>
            <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.imageProductsSet[0].imageUrl} style={{ height: "10rem", width: "min-content" }} /></div>
            <Card.Body style={{ backgroundColor: "#FAFAFA" }} className="d-grid gap-1">
              <a href={'/product/' + value.productId} style={{ color: "black", borderRadius: "8px" }}>
                <div style={{ fontSize: "0.875rem", color: "#8a8a8a" }}>{value.categories.categoryName}</div>
                <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.productName}</div>
                {value.productStatus === "sold" ? <div className="d-flex gap-2"><span style={{ fontSize: "1.25rem", fontWeight: "600", color: "#8A8A8A", paddingBottom: "5px", textDecoration: "line-through" }}>Rp. {formatRupiah(value.price)}</span><span><Badge style={{ fontSize: "0.75rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#FB374F", paddingBottom: "5px" }}>Rp. {formatRupiah(value.price)}</div>}
              </a>
              <Row className="m-0 mt-2">
                <Col xs={6} className="p-0 pe-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="success" href={'/dashboard/product/edit/' + value.productId}><PencilSquare className='my-auto me-2' size={16} /> Edit</Button>
                </Col>
                <Col xs={6} className="p-0 ps-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="outline-danger" value={value.productId} onClick={(e) => setRemoveProduct({ ...RemoveProduct, alert: true, idProduct: e.target.value })}><Trash className='my-auto me-2' size={16} /> Hapus</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        : null
      }
      {type === "sold" ?
        <div style={{ borderRadius: "8px", height: "100%" }}>
          <Card className={'mt-1 mb-1 '} style={{ height: "100%" }}>
            <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.imageProductsSet[0].imageUrl} style={{ height: "10rem", width: "min-content" }} /></div>
            <Card.Body style={{ backgroundColor: "#FAFAFA" }} className="d-grid gap-1">
              <a href={'/product/' + value.productId} style={{ color: "black", borderRadius: "8px" }}>
                <div style={{ fontSize: "0.875rem", color: "#8a8a8a" }}>{value.categories.categoryName}</div>
                <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.productName}</div>
                {value.productStatus === "sold" ? <div className="d-flex gap-2"><span style={{ fontSize: "1.25rem", fontWeight: "600", color: "#8A8A8A", paddingBottom: "5px", textDecoration: "line-through" }}>Rp. {formatRupiah(value.price)}</span><span><Badge style={{ fontSize: "0.75rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#FB374F", paddingBottom: "5px" }}>Rp. {formatRupiah(value.price)}</div>}
              </a>
              <Row className="m-0 mt-2">
                <Col xs={6} className="p-0 pe-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="success" href={'/dashboard/product/edit/' + value.productId}><PencilSquare className='my-auto me-2' size={16} /> Edit</Button>
                </Col>
                <Col xs={6} className="p-0 ps-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="outline-danger" value={value.productId} onClick={(e) => setRemoveProduct({ ...RemoveProduct, alert: true, idProduct: e.target.value })}><Trash className='my-auto me-2' size={16} /> Hapus</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        : null
      }
      {type === "archive" ?
        <div style={{ borderRadius: "8px", height: "100%" }}>
          <Card className={'mt-1 mb-1 '} style={{ height: "100%" }}>
            <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.imageProductsSet[0].imageUrl} style={{ height: "10rem", width: "min-content" }} /></div>
            <Card.Body style={{ backgroundColor: "#FAFAFA" }} className="d-grid gap-1">
              <a href={'/product/' + value.productId} style={{ color: "black", borderRadius: "8px" }}>
                <div style={{ fontSize: "0.875rem", color: "#8a8a8a" }}>{value.categories.categoryName}</div>
                <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.productName}</div>
                {value.productStatus === "sold" ? <div className="d-flex gap-2"><span style={{ fontSize: "1.25rem", fontWeight: "600", color: "#8A8A8A", paddingBottom: "5px", textDecoration: "line-through" }}>Rp. {formatRupiah(value.price)}</span><span><Badge style={{ fontSize: "0.75rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#FB374F", paddingBottom: "5px" }}>Rp. {formatRupiah(value.price)}</div>}
              </a>
              <Row className="m-0 mt-2">
                <Col xs={6} className="p-0 pe-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="success" href={'/dashboard/product/edit/' + value.productId}><PencilSquare className='my-auto me-2' size={16} /> Edit</Button>
                </Col>
                <Col xs={6} className="p-0 ps-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="outline-danger" value={value.productId} onClick={(e) => setRemoveProduct({ ...RemoveProduct, alert: true, idProduct: e.target.value })}><Trash className='my-auto me-2' size={16} /> Hapus</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        : null
      }
      {type === "favorit" ?
        <div style={{ borderRadius: "8px", height: "100%" }}>
          <Card className={'mt-1 mb-1 '} style={{ height: "100%" }}>
            <div className="d-grid justify-content-center pt-2 pb-2"><Card.Img variant="top" src={value.imageProductsSet[0].imageUrl} style={{ height: "10rem", width: "min-content" }} /></div>
            <Card.Body style={{ backgroundColor: "#FAFAFA" }} className="d-grid gap-1">
              <a href={'/product/' + value.productId} style={{ color: "black", borderRadius: "8px" }}>
                <div style={{ fontSize: "1.125rem", fontWeight: "400" }}>{value.productName}</div>
                {value.productStatus === "sold" ? <div className="d-flex gap-2"><span style={{ fontSize: "1.25rem", fontWeight: "600", color: "#8A8A8A", paddingBottom: "5px", textDecoration: "line-through" }}>Rp. {formatRupiah(value.price)}</span><span><Badge style={{ fontSize: "0.75rem", fontWeight: "400" }} bg="danger">Habis</Badge></span></div> : <div style={{ fontSize: "1.25rem", fontWeight: "600", color: "#FB374F", paddingBottom: "5px" }}>Rp. {formatRupiah(value.price)}</div>}
                <div>
                  <div style={{ fontSize: "0.825rem", fontWeight: "400", color: "#777777" }} className="w-100 d-flex"><PersonFill className='my-auto me-1 mb-1' size={14} /> {formatCamelCase(value.users.fullName)}</div>
                  <div style={{ fontSize: "0.825rem", fontWeight: "400", color: "#777777" }} className="w-100 d-flex"><GeoAltFill className='my-auto me-1 mb-1' size={14} /> {formatCamelCase(value.users.cities.cityName)}</div>
                </div>
              </a>
              <Row className="m-0 mt-2">
                <Col xs={6} className="p-0 pe-1">
                  <Button href={'/product/' + value.productId} className="w-100 d-flex align-content-center justify-content-center" variant="dark">Lihat</Button>
                </Col>
                <Col xs={6} className="p-0 ps-1">
                  <Button className="w-100 d-flex align-content-center justify-content-center" variant="outline-danger" onClick={handleRemoveWishlist}><Trash className='my-auto me-2' size={16} /> Hapus</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        : null
      }
    </>
  )
}

export default CardProduct
