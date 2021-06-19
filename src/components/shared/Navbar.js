import React,{useContext} from 'react';
import hamOpen from '../../assets/icons/icon-hamburger.svg';
import hamClose from '../../assets/icons/icon-close.svg';
import heritageContext from '../context/Heritage/heritageContext';
import {Link} from 'react-router-dom';


function Navbar() {

    const HeritageContext = useContext(heritageContext)
    
    const displayMenu = HeritageContext.displayMenu;
    const closeMenu = HeritageContext.closeMenu;
    const ulDisplay = HeritageContext.ulDisplay;
    const DisplayCloseIcon = HeritageContext.DisplayCloseIcon;
    const DisplayOpenIcon = HeritageContext.DisplayOpenIcon;


    return (
        <nav>
            <div className='navcontainer'>

            <div className='logo'>H-X</div>
            <ul style={ulDisplay()}>
                <li><Link to='/Bucketlist'>Bucketlist</Link></li>
                <li><Link to='/Visited'>Visited</Link></li>
                <li><Link to='/SignUp'>Register</Link></li>
                <p>Welcome, <span id='liNAME'>Adeola</span></p>
            </ul>
            <div className='hamIcons'>
                <div style={DisplayOpenIcon()}
          onClick={() => {
            displayMenu();
          }} className='hamburger'>
                    <img  src={hamOpen} alt='hamburger'></img>
                </div>
                <div style={DisplayCloseIcon()}
          onClick={() => {
            closeMenu();
          }} className='hamClose'>
                    <img  src={hamClose} alt='closeHamburger'></img>
                </div>
                
                
            </div>

            </div>
        </nav>
    )
}

export default Navbar;
