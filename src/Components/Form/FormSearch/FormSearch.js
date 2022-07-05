import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import style from './FormSearch.module.css'

const FormSearch = () => {

    const navigate = useNavigate()
    const { keyword } = useParams()
    const [KeywordSearch, setKeywordSearch] = useState(keyword === undefined ? "" : keyword)

    const handleSearch = () => {
        navigate("/search/keyword=" + KeywordSearch + "&type=" + "product" + "&sort=" + 1 + "&category=" + null + "&location=" + null + "&minprice=" + null + "&maxprice=" + null)
        window.location.reload()
    }

    return (
        <Form className="d-flex gap-3 w-100">
            <Form.Control type="text" placeholder="Cari produk atau toko..." aria-label="Search" className="mt-2 mb-2" value={KeywordSearch} onChange={(e) => setKeywordSearch(e.target.value)} onKeyPress={(e) => {
                if (e.key === "Enter") {
                    e.preventDefault()
                    handleSearch()
                }
            }} />
        </Form>
    )
}

export default FormSearch