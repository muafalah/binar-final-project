import React from 'react'

const Default = ({ children }) => {
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

const Layout = {
    Default,
}

export default Layout