import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className='logo'></div>
            <ul>
                <li>Bucketlist</li>
                <li>Visited</li>
                <li>Login</li>
                <p>Welcome, <span id='liNAME'>Adeola</span></p>
            </ul>
        </nav>
    )
}

export default Navbar;
