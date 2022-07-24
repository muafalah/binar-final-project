import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDropzone } from 'react-dropzone';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import Dashboard from '../../Dashboard/Dashboard'
import style from './AddProduct.module.css'
import Aos from 'aos'
import { getAllCategory } from '../../../../Redux/features/categorySlice';
import { postAddProduct } from '../../../../Redux/features/productSlice';
import SweetAlert from 'react-bootstrap-sweetalert';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const AddProduct = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [InputForm, setInputForm] = useState({ name: "", category: "", price: "", serialNumber: "", description: "" })
    const [Load, setLoad] = useState(false)
    const [StatusAlert, setStatusAlert] = useState({ alert: false, invalid: false, success: false })
    const { dataAllCategory } = useSelector(state => state.categoryReducer)
    const { dataUserVerification } = useSelector(state => state.authUserReducer)
    const { dataAddProduct } = useSelector(state => state.productReducer)

    useEffect(() => {
        dispatch(getAllCategory())
        Aos.init({ duration: 1800 })
    }, [])

    useEffect(() => {
        if (dataAddProduct) {
            if (dataAddProduct.status == 201) {
                setLoad(false)
                setStatusAlert({ alert: false, invalid: false, success: true })
            }
        }
    }, [dataAddProduct])


    const selectCategory = (data) => {
        const dataOption = []
        data?.map((value) => {
            const dataConvert =
            {
                value: value.categoryId,
                label: value.categoryName,
            }
            dataOption.push(dataConvert)
        })
        return dataOption
    }

    const defaultTheme = (theme) => ({ ...theme, colors: { ...theme.colors, primary25: '#E6E6E6', primary: '#1E1E1E', neutral20: '#ced4da' }, })

    const errorTheme = (theme) => ({ ...theme, colors: { ...theme.colors, primary25: '#E6E6E6', primary: '#1E1E1E', neutral20: '#dc3545' }, })

    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (InputForm.name && InputForm.category && InputForm.price && InputForm.serialNumber && InputForm.description && files.length == 4) {
            setLoad(true)
            await dispatch(postAddProduct({ userId: dataUserVerification.data.userId, name: InputForm.name, category: InputForm.category, price: InputForm.price, serialNumber: InputForm.serialNumber, description: InputForm.description, image: files }))
        } else {
            setStatusAlert({ invalid: true })
        }
    }

    return (
        <Dashboard menu="product">
            {StatusAlert.success ? <SweetAlert success title="Produk Ditambahkan!" confirmBtnBsStyle={'dark'} onConfirm={() => navigate("/dashboard/product/list")}></SweetAlert> : null}
            {Load ? <SweetAlert title="" confirmBtnStyle={{ display: "none" }} onConfirm={() => null}><Spinner animation="border" size="lg" /></SweetAlert> : null}
            {dataAllCategory ?
                <Row className={'m-0 ' + style.box_temp} data-aos="fade-up">
                    <Col xs={12} className='mt-3'>
                        <b style={{ fontSize: "1.25rem" }}>Tambah Produk</b>
                        <hr className="mt-2 mb-2" />
                    </Col>
                    <Col xs={12} className="p-0">
                        <section className="ms-3 me-3 mt-3">
                            <div {...getRootProps({ className: 'dropzone' })} className={'p-3 ' + style.box_upload}>
                                <input {...getInputProps()} />
                                <p className='text-center mt-3'>Upload Gambar Produk Kamu Disini</p>
                            </div>
                            <aside style={thumbsContainer}>
                                {thumbs}
                            </aside>
                        </section>
                        {StatusAlert.invalid ? <div className="text-center" style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "5px" }}>Upload gambar produk kamu.</div> : null}
                    </Col>
                    <Col xs={12} className="p-0">
                        <Row className={'m-0'}>
                            <Col xs={12} className='mt-3 mb-3'>
                                <div>
                                    <Form className={'d-grid gap w-100'} onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Nama Produk <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="text" onChange={(e) => setInputForm({ ...InputForm, name: e.target.value })} isInvalid={StatusAlert.invalid} />
                                            <Form.Control.Feedback type="invalid">
                                                Masukkan nama produk kamu.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Kategori <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Select options={selectCategory(dataAllCategory.data)} theme={StatusAlert.invalid == false ? defaultTheme : errorTheme} placeholder="Pilih Kategori" onChange={(e) => setInputForm({ ...InputForm, category: e.value })} />
                                            {StatusAlert.invalid ? <div style={{ color: "#dc3545", fontSize: "0.875rem", marginTop: "5px" }}>Masukkan kategori produk kamu.</div> : null}
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Harga <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control type="number" onChange={(e) => setInputForm({ ...InputForm, price: e.target.value })} isInvalid={StatusAlert.invalid} />
                                            <Form.Control.Feedback type="invalid">
                                                Masukkan harga produk kamu.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Serial Number <span style={{ color: "red" }}>*</span></Form.Label>
                                            <div className='d-flex'>
                                                <Form.Control className="w-100 me-2" type="text" onChange={(e) => setInputForm({ ...InputForm, serialNumber: e.target.value })} isInvalid={StatusAlert.invalid} />
                                                <Button variant="outline-success" type="submit">Periksa</Button>
                                            </div>
                                            <Form.Control.Feedback type="invalid">
                                                Masukkan serial number produk kamu.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Deskripsi <span style={{ color: "red" }}>*</span></Form.Label>
                                            <Form.Control as="textarea" onChange={(e) => setInputForm({ ...InputForm, description: e.target.value })} isInvalid={StatusAlert.invalid} />
                                            <Form.Control.Feedback type="invalid">
                                                Masukkan deskripsi produk kamu.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <div className="d-flex gap-2 justify-content-end">
                                            <Button className="mt-2" variant="outline-dark">Simpan & Preview</Button>
                                            <Button className="mt-2" variant="dark" type="submit">Terbitkan Produk</Button>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                : null
            }
        </Dashboard>
    )
}

export default AddProduct