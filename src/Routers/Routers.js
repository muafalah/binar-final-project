import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DummyAuth from '../Views/DummyAuth'
import LandingPage from '../Views/LandingPage/LandingPage'
import LoginAdmin from '../Views/Auth/LoginAdmin/LoginAdmin'
import LoginUser from '../Views/Auth/LoginUser/LoginUser'
import RegisterUser from '../Views/Auth/RegisterUser/RegisterUser'
import ComplateProfil from '../Views/Buyer/Complateprofil/ComplateProfil'
import Search from '../Views/Search/Search'
import AddProduct from '../Views/Seller/Product/Addproduct/AddProduct'
import DetailProduct from '../Views/DetailProduct/DetailProduct'
import { ProfileUser } from '../Views/ProfileUser/ProfileUser'
import EditProfil from '../Views/Buyer/Editprofil/EditProfil'
import ListProdukAdmin from '../Views/Admin/ListProduk/ListProdukAdmin'


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dummy-auth" element={<DummyAuth />} />

                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<RegisterUser />} />
                <Route path="/login" element={<LoginUser />} />
                <Route path="/login-admin" element={<LoginAdmin />} />
                <Route path='/lengkapi-profil' element={<ComplateProfil />} />
                <Route path='/profil-user' element={<ProfileUser />} />
                <Route path="/search/keyword=:keyword&type=:type&sort=:sort&category=:category&location=:location&minprice=:minprice&maxprice=:maxprice" element={<Search />} />

                <Route path='/tambah-produk' element={<AddProduct/>} />
                <Route path='/product/:id_product' element={<DetailProduct />} />
                <Route path='/edit-profil' element={<EditProfil/>} />

                <Route path='/list-produk' element={<ListProdukAdmin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers