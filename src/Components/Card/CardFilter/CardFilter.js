import React, { useState } from 'react'
import Select from 'react-select'
import { Form, Button } from 'react-bootstrap'
import style from './CardFilter.module.css'
import { useNavigate } from 'react-router-dom'

const dataCategory = [
    {
        id_category: 1,
        name: "iPhone",
        image: "#",
    },
    {
        id_category: 2,
        name: "iPad",
        image: "#",
    },
    {
        id_category: 3,
        name: "Mac",
        image: "#",
    },
    {
        id_category: 4,
        name: "AirPods",
        image: "#",
    },
    {
        id_category: 5,
        name: "Watch",
        image: "#",
    },
    {
        id_category: 6,
        name: "Lainnya",
        image: "#",
    },
]

const dataLocation = [
    {
        id_location: 1,
        name: "Kota Jakarta",
    },
    {
        id_location: 2,
        name: "Kota Surabaya",
    },
    {
        id_location: 3,
        name: "Kota Bandung",
    },
    {
        id_location: 4,
        name: "Kota Semarang",
    },
    {
        id_location: 5,
        name: "Kota Tanggerang",
    },
    {
        id_location: 6,
        name: "Kota Malang",
    },
]

const CardFilter = (props) => {

    const navigate = useNavigate()
    const [InputFilter, setInputFilter] = useState({
        sort: props.sort,
        category: props.category,
        location: props.location,
        minprice: props.minprice,
        maxprice: props.maxprice,
    })

    const handleFilter = (e) => {
        e.preventDefault()
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
                value: value.id_location,
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
                            <div className={style.box}>
                                <h5>Urutkan</h5>
                                <Select className="mt-2" options={sortProduct} defaultValue={sortProduct.filter(option => option.value == props.sort)} placeholder="Urutan" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, sort: e.value })} />
                            </div>
                            <Form className={style.box} onSubmit={handleFilter}>
                                <h5>Filter</h5>
                                <Select className="mt-2" options={selectCategory(dataCategory)} defaultValue={selectCategory(dataCategory).filter(option => option.value == InputFilter.category)} placeholder="Kategori" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, category: e.value })} />
                                <Select className="mt-2" options={selectLocation(dataLocation)} defaultValue={selectLocation(dataLocation).filter(option => option.value == InputFilter.location)} placeholder="Lokasi" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, location: e.value })} />
                                <Form.Group className="mt-2 d-flex gap-1">
                                    <Form.Control type="number" placeholder="Terendah" onChange={(e) => setInputFilter({ ...InputFilter, minprice: e.target.value })} value={InputFilter.minprice} />
                                    <Form.Control type="number" placeholder="Tertinggi" onChange={(e) => setInputFilter({ ...InputFilter, maxprice: e.target.value })} value={InputFilter.maxprice} />
                                </Form.Group>
                                <Button variant="dark" className="mt-2 w-100" type="submit">Filter</Button>
                            </Form>
                        </div>
                        : null
                    }
                    {props.type === "store" ?
                        <div className={'mt-0 mt-md-5 d-grid gap-3'}>
                            <div className={style.box}>
                                <h5>Urutkan</h5>
                                <Select className="mt-2" options={sortStore} defaultValue={sortStore.filter(option => option.value == props.sort)} placeholder="Urutan" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, sort: e.value })} />
                            </div>
                            <Form className={style.box} onSubmit={handleFilter}>
                                <h5>Filter</h5>
                                <Select className="mt-2" options={selectLocation(dataLocation)} defaultValue={selectLocation(dataLocation).filter(option => option.value == InputFilter.location)} placeholder="Lokasi" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, location: e.value })} />
                                <Button variant="dark" className="mt-2 w-100" type="submit">Filter</Button>
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
                                <h5>Filter & Urutkan</h5>
                                <Select className="mt-2" options={sortProduct} defaultValue={sortProduct.filter(option => option.value == props.sort)} placeholder="Urutan" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, sort: e.value })} />
                                <Select className="mt-2" options={selectCategory(dataCategory)} defaultValue={selectCategory(dataCategory).filter(option => option.value == InputFilter.category)} placeholder="Kategori" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, category: e.value })} />
                                <Select className="mt-2" options={selectLocation(dataLocation)} defaultValue={selectLocation(dataLocation).filter(option => option.value == InputFilter.location)} placeholder="Lokasi" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, location: e.value })} />
                                <Form.Group className="mt-2 d-flex gap-1">
                                    <Form.Control type="number" placeholder="Terendah" onChange={(e) => setInputFilter({ ...InputFilter, minprice: e.target.value })} value={InputFilter.minprice} />
                                    <Form.Control type="number" placeholder="Tertinggi" onChange={(e) => setInputFilter({ ...InputFilter, maxprice: e.target.value })} value={InputFilter.maxprice} />
                                </Form.Group>
                                <Button variant="dark" className="mt-2 w-100" type="submit">Filter</Button>
                            </Form>
                        </div>
                        : null
                    }
                    {props.type === "store" ?
                        <div className={'d-grid gap-3'}>
                            <Form className={'pt-4 pb-4 ' + style.box} onSubmit={handleFilter}>
                                <h5 className='mb-3'>Filter & Urutkan</h5>
                                <Select className="mt-2" options={sortStore} defaultValue={sortStore.filter(option => option.value == props.sort)} placeholder="Urutan" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, sort: e.value })} />
                                <Select className="mt-2" options={selectLocation(dataLocation)} defaultValue={selectLocation(dataLocation).filter(option => option.value == InputFilter.location)} placeholder="Lokasi" theme={selectTheme} onChange={(e) => setInputFilter({ ...InputFilter, location: e.value })} />
                                <Button variant="dark" className="mt-2 w-100" type="submit">Filter</Button>
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