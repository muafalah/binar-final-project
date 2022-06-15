import React from 'react'
import NavbarDefault from '../Components/Navbar/NavbarDefault/NavbarDefault'

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
                Footer
            </footer>
        </>
    )
}

const Layout = {
    Default,
}

export default Layout