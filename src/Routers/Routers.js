import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginAdmin from '../Views/Auth/LoginAdmin/LoginAdmin'
import LoginUser from '../Views/Auth/LoginUser/LoginUser'
import RegisterUser from '../Views/Auth/RegisterUser/RegisterUser'
<<<<<<< HEAD
import LandingPage from '../Views/General/LandingPage/LandingPage'
import Search from '../Views/General/Search/Search'
import DetailSeller from '../Views/General/DetailSeller/DetailSeller'
import DetailProduct from '../Views/General/DetailProduct/DetailProduct'
import CompleteProfile from '../Views/General/CompleteProfile/CompleteProfile'
import Dashboard from '../Views/User/Dashboard/Dashboard'
import ListProduct from '../Views/User/Product/ListProduct/ListProduct'
import ListOffer from '../Views/User/Offer/ListOffer/ListOffer'
import ListNotification from '../Views/User/Notification/ListNotification/ListNotification'
import ListFavorit from '../Views/User/Favorit/ListFavorit/ListFavorit'
import EditProfile from '../Views/User/Profile/EditProfile/EditProfile'
=======
import ComplateProfil from '../Views/Buyer/Complateprofil/ComplateProfil'
import Search from '../Views/Search/Search'
import AddProduct from '../Views/Seller/Product/Addproduct/AddProduct'
import DetailProduct from '../Views/DetailProduct/DetailProduct'
import { ProfileUser } from '../Views/ProfileUser/ProfileUser'
import EditProfil from '../Views/Buyer/Editprofil/EditProfil'
import ListProdukAdmin from '../Views/Admin/ListProduk/ListProdukAdmin'
import { DashboardBuyer } from '../Views/Buyer/DashboardBuyer/DashboardBuyer'
import { ListProduct } from '../Views/Seller/Product/ListProduct/ListProduct'
import { EditProduct } from '../Views/Seller/Product/EditProduct/EditProduct'

>>>>>>> 16684c932ddd324baa35c7ac76d44f07d1037c13

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterUser />} />
                <Route path="/login" element={<LoginUser />} />
                <Route path="/login-admin" element={<LoginAdmin />} />
<<<<<<< HEAD

                <Route path="/" element={<LandingPage />} />
                <Route path="/search/keyword=:keyword&type=:type&sort=:sort&category=:category&location=:location&minprice=:minprice&maxprice=:maxprice" element={<Search />} />
                <Route path='/product/:id_product' element={<DetailProduct />} />
                <Route path='/seller/:username_seller' element={<DetailSeller />} />
                <Route path='/complete-profile' element={<CompleteProfile />} />

                <Route path='/dashboard' element={<Dashboard />} />

                <Route path='/dashboard/product' element={<Navigate to="/dashboard/product/list" />} />
                <Route path='/dashboard/product/list' element={<ListProduct />} />
                <Route path='/dashboard/offer' element={<Navigate to="/dashboard/offer/list" />} />
                <Route path='/dashboard/offer/list' element={<ListOffer />} />
                <Route path='/dashboard/notification' element={<Navigate to="/dashboard/notification/list" />} />
                <Route path='/dashboard/notification/list' element={<ListNotification />} />
                <Route path='/dashboard/favorit' element={<Navigate to="/dashboard/favorit/list" />} />
                <Route path='/dashboard/favorit/list' element={<ListFavorit />} />
                <Route path='/dashboard/profile' element={<Navigate to="/dashboard/profile/edit" />} />
                <Route path='/dashboard/profile/edit' element={<EditProfile />} />
=======
                <Route path='/lengkapi-profil' element={<ComplateProfil />} />
                <Route path='/profil-user' element={<ProfileUser />} />
                <Route path="/search/keyword=:keyword&type=:type&sort=:sort&category=:category&location=:location&minprice=:minprice&maxprice=:maxprice" element={<Search />} />

                <Route path='/tambah-produk' element={<AddProduct/>} />
                <Route path='/product/:id_product' element={<DetailProduct />} />
                <Route path='/edit-profil' element={<EditProfil/>} />
>>>>>>> 16684c932ddd324baa35c7ac76d44f07d1037c13

                <Route path='/list-produk-admin' element={<ListProdukAdmin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers