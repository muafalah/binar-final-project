import React from 'react'
import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { BadgeAdFill, Box2HeartFill, PencilFill, PencilSquare, PeopleFill, Plus, TagFill, X } from 'react-bootstrap-icons'
import ImageIphone from '../../../../Assets/image/LandingPage/img-category-iphone.svg'
import ImageIpad from '../../../../Assets/image/LandingPage/img-category-ipad.svg'
import ImageMac from '../../../../Assets/image/LandingPage/img-category-mac.svg'
import ImageAirpods from '../../../../Assets/image/LandingPage/img-category-airpods.svg'
import ImageWatch from '../../../../Assets/image/LandingPage/img-category-watch.svg'
import Layout from '../../../Layout'
import style from './ListCategory.module.css'


const ListCategory = (ListKategori) => {

    //Aksi
    //const
    // if(allCategori){
    //     var CatData=allCategories.map((val,i)=>(
    //         <tr key={i}>
    //      <td key={val._id}>{i+1}</td>       
    //     <td>{val._id}</td>
    //     <td>{val.password_category}</td>
    //     <td><Button onClick={()=>editCategory(val._id,val.password_category)}>Edit</Button> 
    //     <Button onClick={()=>deleteCategory(val._id)}>Delete</Button></td>
    //     </tr>
    //     ))
    
    // }else{
    //     CatData=<tr>
    //     <td colSpan=""></td>       
    //    </tr>
    // }
    return (
        <Layout>
            <Container>
                <Row className={'pt-3 w-100 m-0-mt-4 mb-4'}>
                    <Col xs={12} className={'p-0'}>
                        <Row className={'m-0 p-3 ' + style.box_profilAdmin}>
                            <Col lg={10} md={9} xs={12} className={'p-0'}>
                                <div className='d-flex gap-3 w-100'>
                                    <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} 
                                        alt='Foto Profil Admin'
                                        width="80px"
                                        heigth="80px"

                                    />
                                    <div className='d-grid align-content-center'>
                                        <div><h3>Admin</h3></div>
                                        <div style={{ color: '#6C757D'}}><h6>admin@mail.com</h6></div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2} md={3} xs={12} className={'p-0 d-flex my-auto'}>
                                <div className='w-100 mt-3 mt-md-0'><Button variant="outline-secondary" className="w-100">
                                    <PencilSquare className={'my-auto me-2 me-lg-2'}/>
                                    Edit
                                </Button></div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} className={'p-0'}>
                        <Row className={'m-0'}>
                            <Col lg={3} className={'p-0 mt-4 pe-lg-3'}>
                                <div className={'p-3 ' + style.box_profilAdmin}>
                                    <h5 className='mb-3'>Menu</h5>
                                    <div className='d-grid gap-2 w-100'>
                                        <Button variant='outline-secondary' className='w-100'>
                                            <TagFill  className={'my-auto me-2 me-lg-2'}/>
                                            Kategori
                                        </Button>
                                        <Button variant='outline-secondary' className='w-100'>
                                            <Box2HeartFill  className={'my-auto me-2 me-lg-2'} />
                                            Produk
                                        </Button>
                                        <Button variant='outline-secondary' className='w-100'>
                                            <BadgeAdFill  className={'my-auto me-2 me-lg-2'} />
                                            Iklan
                                        </Button>
                                        <Button variant='outline-secondary'>
                                            <PeopleFill  className={'my-auto me-2 me-lg-2'}/>
                                            Pengguna
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={9} className={'p-0 mt-4 pe-lg-3 ' + style.box_list}>
                                <Button href='/admin/category/list/addcategory' variant='secondary'>
                                    <Plus className={'my-auto me-2 me-lg-2'} />
                                    Tambah Kategori
                                </Button>
                                <Row className={'m-2 ' + style.table_category}>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>ID_Kategori</th>
                                                <th>Nama Kategori</th>
                                                <th>Gambar Kategori</th>
                                                <th><div className=''>Aksi</div></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>000001</td>
                                                <td>iPhone</td>
                                                <td>
                                                <div style={{ marginLeft: '45px'}}>
                                                    <img src={ImageIphone}
                                                        alt='img iPhone'
                                                        width='50px'
                                                        height='50px'
                                                        className='py-auto'
                                                    />
                                                </div>
                                                </td>
                                                <td>
                                                <div className='p-3'>
                                                    <div>
                                                        <Button href='/admin/category/list/editcategory' variant='outline-secondary'>
                                                            <PencilFill className={'my-auto me-2 me-lg-2'} />
                                                            Edit
                                                        </Button>
                                                        <Button variant='outline-secondary'>
                                                            <X className={'my-auto me-2 me-lg-2'} />
                                                            Hapus
                                                        </Button>
                                                    </div>
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>000011</td>
                                                <td>iPad</td>
                                                <td>
                                                <div style={{ marginLeft: '45px'}}>
                                                    <img src={ImageIpad}
                                                        alt='img iPhone'
                                                        width='50px'
                                                        height='50px'
                                                        className='py-auto'
                                                    />
                                                </div>
                                                </td>
                                                <td>
                                                <div className='p-3'>
                                                    <div>
                                                        <Button href='/admin/category/list/editcategory' variant='outline-secondary'>
                                                            <PencilFill className={'my-auto me-2 me-lg-2'} />
                                                            Edit
                                                        </Button>
                                                        <Button variant='outline-secondary'>
                                                            <X className={'my-auto me-2 me-lg-2'} />
                                                            Hapus
                                                        </Button>
                                                    </div>
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>000111</td>
                                                <td>Mac</td>
                                                <td>
                                                <div style={{ marginLeft: '45px'}}>
                                                    <img src={ImageMac}
                                                        alt='img iPhone'
                                                        width='50px'
                                                        height='50px'
                                                        className='py-auto'
                                                    />
                                                </div>
                                                </td>
                                                <td>
                                                <div className='p-3'>
                                                    <div>
                                                        <Button href='/admin/category/list/editcategory' variant='outline-secondary'>
                                                            <PencilFill className={'my-auto me-2 me-lg-2'} />
                                                            Edit
                                                        </Button>
                                                        <Button variant='outline-secondary'>
                                                            <X className={'my-auto me-2 me-lg-2'} />
                                                            Hapus
                                                        </Button>
                                                    </div>
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>001111</td>
                                                <td>AirPods</td>
                                                <td>
                                                <div style={{ marginLeft: '45px'}}>
                                                    <img src={ImageAirpods}
                                                        alt='img iPhone'
                                                        width='50px'
                                                        height='50px'
                                                        className='py-auto'
                                                    />
                                                </div>
                                                </td>
                                                <td>
                                                <div className='p-3'>
                                                    <div>
                                                        <Button href='/admin/category/list/editcategory' variant='outline-secondary'>
                                                            <PencilFill className={'my-auto me-2 me-lg-2'} />
                                                            Edit
                                                        </Button>
                                                        <Button variant='outline-secondary'>
                                                            <X className={'my-auto me-2 me-lg-2'} />
                                                            Hapus
                                                        </Button>
                                                    </div>
                                                </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>011111</td>
                                                <td>Watch</td>
                                                <td>
                                                <div style={{ marginLeft: '45px'}}>
                                                    <img src={ImageWatch}
                                                        alt='img iPhone'
                                                        width='50px'
                                                        height='50px'
                                                        className='py-auto'
                                                    />
                                                </div>
                                                </td>
                                                <td>
                                                <div className='p-3'>
                                                    <div>
                                                        <Button href='/admin/category/list/editcategory' variant='outline-secondary'>
                                                            <PencilFill className={'my-auto me-2 me-lg-2'} />
                                                            Edit
                                                        </Button>
                                                        <Button variant='outline-secondary'>
                                                            <X className={'my-auto me-2 me-lg-2'} />
                                                            Hapus
                                                        </Button>
                                                    </div>
                                                </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ListCategory