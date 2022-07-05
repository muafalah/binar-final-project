import React from 'react'
import FooterDefault from '../Components/Footer/FooterDefault/FooterDefault'
import NavbarDefault from '../Components/Navbar/NavbarDefault/NavbarDefault'
import NavbarUser from '../Components/Navbar/NavbarUser/NavbarUser'
import { dataUser } from './DataDummy'

const Layout = ({ children }) => {

    const role = "user"

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
                    <NavbarUser dataUser={dataUser} />
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
            {role === "default" ? Default() : null}
            {role === "user" ? User() : null}
            {role === "Admin" ? User() : null}
        </>
    )
}

export default Layout