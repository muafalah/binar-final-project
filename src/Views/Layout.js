import React from 'react'
import FooterDefault from '../Components/Footer/FooterDefault'
import NavbarDefault from '../Components/Navbar/NavbarDefault'

const Default = ({ children }) => {
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

const Layout = {
    Default,
}

export default Layout