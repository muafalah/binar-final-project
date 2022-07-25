import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { getUserVerification } from '../Redux/features/authUser'

const BuyerAuth = () => {
    const dispatch = useDispatch()
    const { dataUserVerification } = useSelector(state => state.authUserReducer)
    useEffect(() => {
        dispatch(getUserVerification())
    }, [])

    if (JSON.parse(localStorage.getItem("TokenSecondGadget"))) {
        if (dataUserVerification) {
            if (dataUserVerification.data.fullName) {
                if (dataUserVerification.data.roles[0].roleId == 1) {
                    return <Outlet />
                } else {
                    if (dataUserVerification.data.roles[0].roleId == 3) {
                        return <Navigate to="/admin/category/list" />
                    } else {
                        localStorage.removeItem("TokenSecondGadget")
                        return <Navigate to="/login" />
                    }
                }
            } else {
                <Navigate to="/complete-profile" />
            }
        }
    } else {
        return <Navigate to="/login" />
    }
}

const SellerAuth = () => {
    const { dataUserVerification } = useSelector(state => state.authUserReducer)

    if (dataUserVerification) {
        if (dataUserVerification.data.roles.length > 1) {
            if (dataUserVerification.data.roles[1].roleId == 2) {
                return <Outlet />
            } else {
                localStorage.removeItem("TokenSecondGadget")
                return <Navigate to="/login" />
            }
        } else {
            if (dataUserVerification.data.roles[0].roleId == 1) {
                return <Navigate to="/dashboard/transaction/list" />
            } else {
                if (dataUserVerification.data.roles[0].roleId == 3) {
                    return <Navigate to="/admin/category/list" />
                } else {
                    localStorage.removeItem("TokenSecondGadget")
                    return <Navigate to="/login" />
                }
            }
        }
    } else {
        return <Navigate to="/register" />
    }
}

const AdminAuth = () => {
    const dispatch = useDispatch()
    const { dataUserVerification } = useSelector(state => state.authUserReducer)
    useEffect(() => {
        dispatch(getUserVerification())
    }, [])

    if (JSON.parse(localStorage.getItem("TokenSecondGadget"))) {
        if (dataUserVerification) {
            if (dataUserVerification.data.roles[0].roleId == 3) {
                return <Outlet />
            } else {
                if (dataUserVerification.data.roles.length > 1) {
                    if (dataUserVerification.data.roles[1].roleId == 2) {
                        return <Navigate to="/dashboard/product/list" />
                    } else {
                        localStorage.removeItem("TokenSecondGadget")
                        return <Navigate to="/login" />
                    }
                } else {
                    if (dataUserVerification.data.roles[0].roleId == 1) {
                        return <Navigate to="/dashboard/transaction/list" />
                    } else {
                        localStorage.removeItem("TokenSecondGadget")
                        return <Navigate to="/login" />
                    }
                }
            }
        }
    } else {
        return <Navigate to="/login" />
    }
}

const CheckAuth = () => {
    if (JSON.parse(localStorage.getItem("TokenSecondGadget"))) {
        return <Navigate to="/" />
    } else {
        return <Outlet />
    }
}

const CompleteProfile = () => {
    const { dataUserVerification } = useSelector(state => state.authUserReducer)

    if (JSON.parse(localStorage.getItem("TokenSecondGadget"))) {
        if (dataUserVerification) {
            if (dataUserVerification.data.fullName) {
                return <Navigate to="/" />
            } else {
                <Outlet />
            }
        }
    } else {
        return <Navigate to="/login" />
    }
}

const Protector = {
    BuyerAuth,
    SellerAuth,
    AdminAuth,
    CheckAuth,
    CompleteProfile,
}

export default Protector