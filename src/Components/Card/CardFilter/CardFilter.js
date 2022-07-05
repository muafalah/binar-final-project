import React, { useState } from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import style from './CardFilter.module.css'
import { dataCategory, dataCity } from '../../../Views/DataDummy'

const CardFilter = (props) => {

    const navigate = useNavigate()
    const [InputFilter, setInputFilter] = useState({
        sort: props.sort,
        category: props.category,
        location: props.location,
        minprice: props.minprice,
        maxprice: props.maxprice,
    })

    const handleFilter = () => {
        if (InputFilter.sort && InputFilter.category && InputFilter.location && InputFilter.maxprice && InputFilter.minprice) {
            navigate("/search/keyword=" + props.keyword + "&type=" + props.type + "&sort=" + InputFilter.sort + "&category=" + InputFilter.category + "&location=" + InputFilter.location + "&minprice=" + InputFilter.minprice + "&maxprice=" + InputFilter.maxprice)
        } else {
            if (!InputFilter.minprice) {
                if (!InputFilter.maxprice) {
                    navigate("/search/keyword=" + props.keyword + "&type=" + props.type + "&sort=" + InputFilter.sort + "&category=" + InputFilter.category + "&location=" + InputFilter.location + "&minprice=" + null + "&maxprice=" + null)
                } else {
                    navigate("/search/keyword=" + props.keyword + "&type=" + props.type + "&sort=" + InputFilter.sort + "&category=" + InputFilter.category + "&location=" + InputFilter.location + "&minprice=" + null + "&maxprice=" + InputFilter.maxprice)
                }
            } else {
                if (!InputFilter.maxprice) {
                    navigate("/search/keyword=" + props.keyword + "&type=" + props.type + "&sort=" + InputFilter.sort + "&category=" + InputFilter.category + "&location=" + InputFilter.location + "&minprice=" + InputFilter.minprice + "&maxprice=" + null)
                } else {
                    console.log(InputFilter)
                }
            }
        }
    }

    const handleClear = () => {
        navigate("/search/keyword=" + props.keyword + "&type=" + props.type + "&sort=" + 1 + "&category=" + null + "&location=" + null + "&minprice=" + null + "&maxprice=" + null)
        window.location.reload()
    }

    const sortProduct = [
        {
            value: 1,
            label: "Terbaru",
        },
        {
            value: 2,
            label: "Terlama",
        },
        {
            value: 3,
            label: "Harga Tertinggi",
        },
        {
            value: 4,
            label: "Harga Terendah",
        },
    ]

    const sortStore = [
        {
            value: 1,
            label: "Terbaru",
        },
        {
            value: 2,
            label: "Terlama",
        },
    ]

    const selectCategory = (data) => {
        const handleData = data ? data : "";
        const dataOption = []
        handleData?.map((value) => {
            const dataConvert =
            {
                value: value.id_category,
                label: value.name,
            }
            dataOption.push(dataConvert)
        })
        return dataOption
    }

    const selectLocation = (data) => {
        const handleData = data ? data : "";
        const dataOption = []
        handleData?.map((value) => {
            const dataConvert =
            {
                value: value.id_city,
                label: value.name,
            }
            dataOption.push(dataConvert)
        })
        return dataOption
    }

    const selectTheme = (theme) => ({ ...theme, colors: { ...theme.colors, primary25: '#E6E6E6', primary: '#1E1E1E', neutral20: '#ced4da' }, })

    return (
        <>
            {props.show === "desktop" ?
                <>
                    {props.type === "product" ?
                        <div className={'mt-0 mt-md-5 d-grid gap-3'}>
                            <Form className={style.box} onSubmit={handleFilter}>
                                <h5 className="mb-3">Filter & Urutkan</h5>
                                <Select className="mt-2" options={sortProduct} defaultValue={sortProduct.filter(option => option.value == props.sort)} placeholder="Urutan" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, sort: e.value })} />
                                <Select className="mt-2" options={selectCategory(dataCategory)} defaultValue={selectCategory(dataCategory).filter(option => option.value == InputFilter.category)} placeholder="Kategori" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, category: e.value })} />
                                <Select className="mt-2" options={selectLocation(dataCity)} defaultValue={selectLocation(dataCity).filter(option => option.value == InputFilter.location)} placeholder="Lokasi" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, location: e.value })} />
                                <Form.Group className="mt-2 d-flex gap-1">
                                    <Form.Control type="number" placeholder="Terendah" onChange={(e) => setInputFilter({ ...InputFilter, minprice: e.target.value })} value={InputFilter.minprice} />
                                    <Form.Control type="number" placeholder="Tertinggi" onChange={(e) => setInputFilter({ ...InputFilter, maxprice: e.target.value })} value={InputFilter.maxprice} />
                                </Form.Group>
                                <Button variant="dark" className="mt-3 w-100" type="submit">Filter</Button>
                                <Button variant="outline-secondary" className="mt-2 w-100" onClick={handleClear}>Hapus</Button>
                            </Form>
                        </div>
                        : null
                    }
                    {props.type === "store" ?
                        <div className={'mt-0 mt-md-5 d-grid gap-3'}>
                            <Form className={style.box} onSubmit={handleFilter}>
                                <h5 className="mb-3">Filter & Urutkan</h5>
                                <Select className="mt-2" options={sortStore} defaultValue={sortStore.filter(option => option.value == props.sort)} placeholder="Urutan" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, sort: e.value })} />
                                <Select className="mt-2" options={selectLocation(dataCity)} defaultValue={selectLocation(dataCity).filter(option => option.value == InputFilter.location)} placeholder="Lokasi" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, location: e.value })} />
                                <Button variant="dark" className="mt-3 w-100" type="submit">Filter</Button>
                                <Button variant="outline-secondary" className="mt-2 w-100" onClick={handleClear}>Hapus</Button>
                            </Form>
                        </div>
                        : null
                    }
                </>
                : null}
            {props.show === "mobile" ?
                <>
                    {props.type === "product" ?
                        <div className={'mt-0 d-grid gap-3'}>
                            <Form className={style.box} onSubmit={handleFilter}>
                                <h5 className='mb-3'>Filter & Urutkan</h5>
                                <Select className="mt-2" options={sortProduct} defaultValue={sortProduct.filter(option => option.value == props.sort)} placeholder="Urutan" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, sort: e.value })} />
                                <Select className="mt-2" options={selectCategory(dataCategory)} defaultValue={selectCategory(dataCategory).filter(option => option.value == InputFilter.category)} placeholder="Kategori" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, category: e.value })} />
                                <Select className="mt-2" options={selectLocation(dataCity)} defaultValue={selectLocation(dataCity).filter(option => option.value == InputFilter.location)} placeholder="Lokasi" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, location: e.value })} />
                                <Form.Group className="mt-2 d-flex gap-1">
                                    <Form.Control type="number" placeholder="Terendah" onChange={(e) => setInputFilter({ ...InputFilter, minprice: e.target.value })} value={InputFilter.minprice} />
                                    <Form.Control type="number" placeholder="Tertinggi" onChange={(e) => setInputFilter({ ...InputFilter, maxprice: e.target.value })} value={InputFilter.maxprice} />
                                </Form.Group>
                                <Button variant="dark" className="mt-3 w-100" type="submit">Filter</Button>
                                <Button variant="outline-secondary" className="mt-2 w-100" onClick={handleClear}>Hapus</Button>
                            </Form>
                        </div>
                        : null
                    }
                    {props.type === "store" ?
                        <div className={'d-grid gap-3'}>
                            <Form className={'pt-4 pb-4 ' + style.box} onSubmit={handleFilter}>
                                <h5 className='mb-3'>Filter & Urutkan</h5>
                                <Select className="mt-2" options={sortStore} defaultValue={sortStore.filter(option => option.value == props.sort)} placeholder="Urutan" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, sort: e.value })} />
                                <Select className="mt-2" options={selectLocation(dataCity)} defaultValue={selectLocation(dataCity).filter(option => option.value == InputFilter.location)} placeholder="Lokasi" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, location: e.value })} />
                                <Button variant="dark" className="mt-3 w-100" type="submit">Filter</Button>
                                <Button variant="outline-secondary" className="mt-2 w-100" onClick={handleClear}>Hapus</Button>
                            </Form>
                        </div>
                        : null
                    }
                </>
                : null}
        </>
    )
}

export default CardFilter