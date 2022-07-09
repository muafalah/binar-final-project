import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
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
                    List Notification
                </Col>
            </Row>
        </Dashboard>
    )
}

export default ListNotification