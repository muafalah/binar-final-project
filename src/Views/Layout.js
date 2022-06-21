import React from 'react'
import FooterDefault from '../Components/Footer/FooterDefault/FooterDefault'
import NavbarAdmin from '../Components/Navbar/NavbarAdmin/NavbarAdmin'
import NavbarBuyer from '../Components/Navbar/NavbarBuyer/NavbarBuyer'
import NavbarDefault from '../Components/Navbar/NavbarDefault/NavbarDefault'
import NavbarSeller from '../Components/Navbar/NavbarSeller/NavbarSeller'

const Layout = (props) => {

    const Default = () => {
        return (
            <>
                <header>
                    <NavbarDefault />
                </header>
                <main>
                    {props.children}
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
                    {props.children}
                </main>
                <footer>
                    <FooterDefault />
                </footer>
            </>
        )
    }

    const Buyer = () => {
        return (
            <>
                <header>
                    <NavbarBuyer />
                </header>
                <main>
                    {props.children}
                </main>
                <footer>
                    <FooterDefault />
                </footer>
            </>
        )
    }

    const Seller = () => {
        return (
            <>
                <header>
                    <NavbarSeller />
                </header>
                <main>
                    {props.children}
                </main>
                <footer>
                    <FooterDefault />
                </footer>
            </>
        )
    }

    return (
        <>
            {props.role === "default" ? Default() : null}
            {props.role === "admin" ? Admin() : null}
            {props.role === "buyer" ? Buyer() : null}
            {props.role === "seller" ? Seller() : null}
        </>
    )
}

export default Layout