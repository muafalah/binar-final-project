import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FooterDefault from '../Components/Footer/FooterDefault/FooterDefault'
import NavbarAdmin from '../Components/Navbar/NavbarAdmin/NavbarAdmin'
import NavbarDefault from '../Components/Navbar/NavbarDefault/NavbarDefault'
import NavbarUser from '../Components/Navbar/NavbarUser/NavbarUser'
import { getUserVerification } from '../Redux/features/authUser'

const Layout = ({ children }) => {

    const dispatch = useDispatch()
    const { isLoading, isSuccess, isError, dataUserVerification } = useSelector(state => state.authUserReducer)

    useEffect(() => {
        dispatch(getUserVerification())
    }, [])

    const Default = () => {
        return (
            <>
                <header>
                    <NavbarDefault />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <FooterDefault />
                </footer>
            </>
        )
    }

    const User = () => {
        return (
            <>
                <header >
                    <NavbarUser dataUser={dataUserVerification.data} />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <FooterDefault />
                </footer>
            </>
        )
    }

    const Admin = () => {
        return (
            <>
                <header>
                    <NavbarAdmin dataUser={dataUserVerification.data} />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <FooterDefault />
                </footer>
            </>
        )
    }

    return (
        JSON.parse(localStorage.getItem("TokenSecondGadget")) ?
            dataUserVerification ? dataUserVerification.data.roles[0].roleId === 3 ? Admin() : User() : null
            : Default()
    )
}

export default Layout