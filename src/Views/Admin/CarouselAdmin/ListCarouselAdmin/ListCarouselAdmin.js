import React, { useEffect, useState } from 'react'
import DashboardAdmin from '../../DashboardAdmin/DashboardAdmin'
import { Button, Col, Row, Spinner, Table } from 'react-bootstrap'
import style from './ListCarouselAdmin.module.css'
import { PencilSquare, PlusLg, Trash } from 'react-bootstrap-icons'
import Aos from 'aos'
import { delRemoveCarousel, getAllCarousel } from '../../../../Redux/features/carouselSlice'
import { useDispatch, useSelector } from 'react-redux'
import SweetAlert from 'react-bootstrap-sweetalert'

const ListCarouselAdmin = () => {

  const dispatch = useDispatch()
  const [Load, setLoad] = useState(false)
  const [RemoveCarousel, setRemoveCarousel] = useState({ alert: false, success: false, failed: false, idCarousel: 0 })
  const { dataAllCarousel, dataRemoveCarousel } = useSelector(state => state.carouselReducer)

  useEffect(() => {
    if (dataRemoveCarousel) {
      if (dataRemoveCarousel.status == 200) {
        setLoad(false)
        setRemoveCarousel({ success: true })
      }
    }
  }, [dataRemoveCarousel])

  useEffect(() => {
    dispatch(getAllCarousel())
    Aos.init({ duration: 1800 })
  }, []);

  const handleRemoveCarousel = async (e) => {
    if (RemoveCarousel.idCarousel) {
      setLoad(true)
      await dispatch(delRemoveCarousel({ idCarousel: RemoveCarousel.idCarousel }))
    }
  }

  return (
    <DashboardAdmin menu="carousel">
      {RemoveCarousel.alert ? <SweetAlert danger showCancel confirmBtnText="Hapus" cancelBtnText="Batal" confirmBtnBsStyle="danger" cancelBtnBsStyle="outline-secondary" title="Apakah Kamu Yakin?" onConfirm={handleRemoveCarousel} onCancel={() => setRemoveCarousel({ ...RemoveCarousel, alert: false })}>Carousel yang sudah dihapus tidak akan bisa dikembalikan lagi!</SweetAlert> : null}
      {Load ? <SweetAlert title="" onConfirm={handleRemoveCarousel} confirmBtnText="" confirmBtnStyle={{ display: "none" }}><Spinner animation="border" size="lg" /></SweetAlert> : RemoveCarousel.success ? <SweetAlert success title="Carousel Dihapus!" confirmBtnBsStyle={'dark'} onConfirm={() => window.location.reload()}></SweetAlert> : null}
      {dataAllCarousel ?
        <Row className={'m-0 gap-3 p-3 ' + style.box_temp} data-aos="fade-up">
          <Col xs={12} className="p-0">
            <div className='d-flex'>
              <div className='w-100 my-auto'><b style={{ fontSize: "1.25rem" }}>Carousel</b></div>
              <div className='w-100 my-auto text-end'><Button size="sm" variant="dark" href="/admin/carousel/add"><PlusLg className='my-auto me-2' size={16} />Tambah Carousel</Button></div>
            </div>
            <hr className="mt-3 mb-1" />
          </Col>
          <Col xs={12} className="p-0">
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th className='text-center'>No</th>
                  <th>Nama Carousel</th>
                  <th className='text-center'>Gambar</th>
                  <th colSpan={2} className='text-center'>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dataAllCarousel.data?.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center">{index + 1}</td>
                      <td><a href={value.link} style={{ color: "black", textDecoration: "underline" }}>{value.carouselName}</a></td>
                      <td className="text-center"><img src={value.img} alt={value.carouselName} width="200rem" /></td>
                      <td className={'text-center ' + style.width_table}>
                        <Button size="sm" variant="success" href={'/admin/carousel/edit/' + value.carouselId}><PencilSquare className='me-2' size={14} />Edit</Button>
                      </td>
                      <td className={'text-center ' + style.width_table}>
                        <Button size="sm" variant="outline-danger" value={value.carouselId} onClick={(e) => setRemoveCarousel({ ...RemoveCarousel, alert: true, idCarousel: e.target.value })}><Trash className='my-auto me-2' size={14} />Hapus</Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
        : null
      }
    </DashboardAdmin>
  )
}

export default ListCarouselAdmin