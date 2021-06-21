import React,{useContext} from 'react';
import hamOpen from '../../assets/icons/icon-hamburger.svg';
import hamClose from '../../assets/icons/icon-close.svg';
import heritageContext from '../context/Heritage/heritageContext';
import {Link} from 'react-router-dom';


function Navbar() {

    const HeritageContext = useContext(heritageContext);

    const {displayMenu,closeMenu,ulDisplay,DisplayCloseIcon,DisplayOpenIcon,isSubmitted, Submitform} = HeritageContext;

    //local storage
    const signin = JSON.parse(localStorage.getItem('SignIn'));

    const refreshPage = ()=>{
        window.location.reload();
       closeMenu()
     }



    return (
        <nav>
            <div className='navcontainer'>
            <div className='logo'>H-X</div>
            <ul style={ulDisplay()}>
                <li onClick={closeMenu}><Link className='myLink' to='/Bucketlist'>Bucketlist</Link></li>
                <li onClick={closeMenu}><Link className='myLink'  to='/Visited'>Visited</Link></li>
                {isSubmitted ? '' : <li onClick={closeMenu}><Link className='myLink' to='/SignUp'>Register</Link></li>}
                {isSubmitted ? <li onClick={refreshPage}><Link className='myLink'  to='/'>Logout</Link></li> : <li onClick={closeMenu}><Link className='myLink'  to='/Login'>Login</Link></li>}
                {isSubmitted && <li>{`Hello, ${signin.mainusername}`}</li> }
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
