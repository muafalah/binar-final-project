import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DummyAuth from '../Views/DummyAuth'
import LandingPage from '../Views/LandingPage/LandingPage'
import LoginAdmin from '../Views/Auth/LoginAdmin/LoginAdmin'
import LoginUser from '../Views/Auth/LoginUser/LoginUser'
import RegisterUser from '../Views/Auth/RegisterUser/RegisterUser'
import ComplateProfil from '../Views/Buyer/Complateprofil/ComplateProfil'
import Search from '../Views/Search/Search'
import DetailProduct from '../Views/DetailProduct/DetailProduct'

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dummy-auth" element={<DummyAuth />} />

                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<RegisterUser />} />
                <Route path="/login" element={<LoginUser />} />
                <Route path="/login-admin" element={<LoginAdmin />} />
                <Route path='/complete-profile' element={<ComplateProfil />} />
                <Route path="/search/keyword=:keyword&type=:type&sort=:sort&category=:category&location=:location&minprice=:minprice&maxprice=:maxprice" element={<Search />} />
                <Route path='/product/:id_product' element={<DetailProduct />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers