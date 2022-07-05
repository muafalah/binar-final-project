import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Dashboard from '../../Dashboard/Dashboard'
import style from './ListFavorit.module.css'

const ListFavorit = () => {
    return (
        <Dashboard menu="favorit">
            <Row className="m-0 gap-3">
                <Col xs={12} className="p-0">
                    <div className='d-flex'>
                        <div className='w-100 my-auto'><b style={{ fontSize: "1.25rem" }}>Favorit</b></div>
                        <div className='w-100 my-auto text-end'><Button size="sm" variant="outline-secondary">Hapus Semua</Button></div>
                    </div>
                    <hr className="mt-2 mb-2" />
                </Col>
                <Col xs={12} className="p-0">
                    List Favorit
                </Col>
            </Row>
        </Dashboard>
    )
}

export default ListFavorit