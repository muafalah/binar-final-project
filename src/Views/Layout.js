import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FooterDefault from '../Components/Footer/FooterDefault/FooterDefault'
import NavbarDefault from '../Components/Navbar/NavbarDefault/NavbarDefault'
import NavbarUser from '../Components/Navbar/NavbarUser/NavbarUser'
import { getUserVerification } from '../Redux/features/authUser'

const Layout = ({ children }) => {

    const dispatch = useDispatch()
    const { isLoading, isSuccess, isError, dataUserVerification } = useSelector(state => state.authUserReducer)
    const getData = async () => {
        await dispatch(getUserVerification())
    }
    useEffect(() => {
        getData()
    }, [dispatch])


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
                <header>
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
                        {dataUserVerification.data.roles.length === 1 ? User() : null}
                        {dataUserVerification.data.roles.length === 2 ? User() : null}
                        {dataUserVerification.data.roles.length === 3 ? Admin() : null}
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