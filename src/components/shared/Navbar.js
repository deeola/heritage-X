import React from 'react';
import hamOpen from '../../assets/icons/icon-hamburger.svg';
import hamClose from '../../assets/icons/icon-close.svg'

function Navbar() {
    return (
        <nav>
            <div className='logo'>H-X</div>
            <ul>
                <li>Bucketlist</li>
                <li>Visited</li>
                <li>Login</li>
                <p>Welcome, <span id='liNAME'>Adeola</span></p>
            </ul>
            <div className='hamIcons'>
                <div className='hamburger'>
                    <img  src={hamOpen} alt='hamburger'></img>
                </div>
                <div className='hamClose'>
                    <img  src={hamClose} alt='closeHamburger'></img>
                </div>
                
                
            </div>
        </nav>
    )
}

export default Navbar;
