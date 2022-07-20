import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FooterDefault from '../Components/Footer/FooterDefault/FooterDefault'
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
                    Navbar
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    Footer
                </footer>
            </>
        )
    }

    return (
        <>
            {JSON.parse(localStorage.getItem("TokenSecondGadget")) ?
                dataUserVerification ?
                    <>
                        {dataUserVerification.data.roles.length === 1 ?
                            dataUserVerification.data.roles[0].roleName === "BUYER" ?
                                User()
                                :
                                dataUserVerification.data.roles[0].roleName === "ADMIN" ?
                                    User()
                                    :
                                    null
                            :
                            null
                        }
                        {dataUserVerification.data.roles.length === 2 ?
                            dataUserVerification.data.roles[1].roleName === "SELLER" ?
                                User()
                                :
                                null
                            :
                            null
                        }
                    </>
                    :
                    null
                :
                Default()
            }
        </>
    )
}

export default Layout