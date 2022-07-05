import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import LoginAdmin from '../Views/Auth/LoginAdmin/LoginAdmin'
import LoginUser from '../Views/Auth/LoginUser/LoginUser'
import RegisterUser from '../Views/Auth/RegisterUser/RegisterUser'
import LandingPage from '../Views/General/LandingPage/LandingPage'
import Search from '../Views/General/Search/Search'
import DetailSeller from '../Views/General/DetailSeller/DetailSeller'
import DetailProduct from '../Views/General/DetailProduct/DetailProduct'
import Dashboard from '../Views/User/Dashboard/Dashboard'
import ListProduct from '../Views/User/Product/ListProduct/ListProduct'
import ListOffer from '../Views/User/Offer/ListOffer/ListOffer'
import ListNotification from '../Views/User/Notification/ListNotification/ListNotification'
import ListFavorit from '../Views/User/Favorit/ListFavorit/ListFavorit'
import EditProfile from '../Views/User/Profile/EditProfile/EditProfile'
import DashboardAdmin from '../Views/Admin/DashboardAdmin/DashboardAdmin'
import CompleteProfile from '../Views/General/CompleteProfile/CompleteProfile'
import ListCategoryAdmin from '../Views/Admin/CategoryAdmin/ListCategoryAdmin/ListCategoryAdmin'
import ListCarouselAdmin from '../Views/Admin/CarouselAdmin/ListCarouselAdmin/ListCarouselAdmin'
import ListUserAdmin from '../Views/Admin/UserAdmin/ListUserAdmin/ListUserAdmin'
import ListProductAdmin from '../Views/Admin/ProductAdmin/ListProductAdmin/ListProductAdmin'
import AddProduct from '../Views/User/Product/AddProduct/AddProduct'
import EditProduct from '../Views/User/Product/EditProduct/EditProduct'
import DetailOffer from '../Views/User/Offer/DetailOffer/DetailOffer'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<RegisterUser />} />
                <Route path="/login" element={<LoginUser />} />
                <Route path="/login-admin" element={<LoginAdmin />} />

                <Route path="/" element={<LandingPage />} />
                <Route path="/search/keyword=:keyword&type=:type&sort=:sort&category=:category&location=:location&minprice=:minprice&maxprice=:maxprice" element={<Search />} />
                <Route path='/product/:id_product' element={<DetailProduct />} />
                <Route path='/seller/:username_seller' element={<DetailSeller />} />
                <Route path='/complete-profile' element={<CompleteProfile />} />

                <Route path='/dashboard' element={<Dashboard />} />

                <Route path='/dashboard/product' element={<Navigate to="/dashboard/product/list" />} />
                <Route path='/dashboard/product/list' element={<ListProduct />} />
                <Route path='/dashboard/product/add' element={<AddProduct />} />
                <Route path='/dashboard/product/edit/:id_product' element={<EditProduct />} />
                <Route path='/dashboard/offer' element={<Navigate to="/dashboard/offer/list" />} />
                <Route path='/dashboard/offer/list' element={<ListOffer />} />
                <Route path='/dashboard/offer/detail/id_offer' element={<DetailOffer />} />
                <Route path='/dashboard/notification' element={<Navigate to="/dashboard/notification/list" />} />
                <Route path='/dashboard/notification/list' element={<ListNotification />} />
                <Route path='/dashboard/favorit' element={<Navigate to="/dashboard/favorit/list" />} />
                <Route path='/dashboard/favorit/list' element={<ListFavorit />} />
                <Route path='/dashboard/profile' element={<Navigate to="/dashboard/profile/edit" />} />
                <Route path='/dashboard/profile/edit' element={<EditProfile />} />

                <Route path='/admin' element={<DashboardAdmin />} />

                <Route path='/admin/category' element={<Navigate to="/admin/category/list" />} />
                <Route path='/admin/category/list' element={<ListCategoryAdmin />} />
                <Route path='/admin/product' element={<Navigate to="/admin/product/list" />} />
                <Route path='/admin/product/list' element={<ListProductAdmin />} />
                <Route path='/admin/carousel' element={<Navigate to="/admin/carousel/list" />} />
                <Route path='/admin/carousel/list' element={<ListCarouselAdmin />} />
                <Route path='/admin/user' element={<Navigate to="/admin/user/list" />} />
                <Route path='/admin/user/list' element={<ListUserAdmin />} />

            </Routes>
        </BrowserRouter>
    )
}

export default Routers