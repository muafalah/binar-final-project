import React, { useState } from 'react'
import FooterAdmin from '../Components/Footer/FooterAdmin/FooterAdmin'
import FooterDefault from '../Components/Footer/FooterDefault/FooterDefault'
import FooterUser from '../Components/Footer/FooterUser/FooterUser'
import NavbarAdmin from '../Components/Navbar/NavbarAdmin/NavbarAdmin'
import NavbarDefault from '../Components/Navbar/NavbarDefault/NavbarDefault'
import NavbarUser from '../Components/Navbar/NavbarUser/NavbarUser'

const Layout = ({ children }) => {

    const [Auth, setAuth] = useState(localStorage.getItem('role'))

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

    const Admin = () => {
        return (
            <>
                <header>
                    <NavbarAdmin />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <FooterAdmin />
                </footer>
            </>
        )
    }

    const User = () => {
        return (
            <>
                <header>
                    <NavbarUser />
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <FooterUser />
                </footer>
            </>
        )
    }

    return (
        <div>
            {Auth === null ? Default() : null}
            {Auth === "user" ? User() : null}
            {Auth === "admin" ? Admin() : null}
        </div>
    )
}

export default Layout