import { Button } from 'react-bootstrap'
import React from 'react'

const DummyAuth = () => {
    return (
        <div>
            <h2>DummyAuth</h2>
            <Button onClick={() => localStorage.setItem('role', 'user')}>Login User</Button><br /><br />
            <Button onClick={() => localStorage.setItem('role', 'admin')}>Login Admin</Button><br /><br />
            <Button onClick={() => localStorage.removeItem('role')}>Delete Auth</Button>
        </div>
    )
}

export default DummyAuth