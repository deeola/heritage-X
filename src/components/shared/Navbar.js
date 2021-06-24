import React, { useContext, useEffect, useRef, useState ,forwardRef} from "react";
import hamOpens from "../../assets/icons/icon-hamburger.svg";
import hamClose from "../../assets/icons/icon-close.svg";
import heritageContext from "../context/Heritage/heritageContext";
import { Link, NavLink} from "react-router-dom";
import {Power3} from 'gsap'
import {gsap} from "gsap";

function Navbar(props, ref) {
  const HeritageContext = useContext(heritageContext);

  const {
    displayMenu,
    closeMenu,
    ulDisplay,
    DisplayCloseIcon,
    DisplayOpenIcon,
    isSubmitted,
    Submitform,
    hamOpen
  } = HeritageContext;

  //local storage
  const signin = JSON.parse(localStorage.getItem("SignIn"));

  const refreshPage = () => {
    window.location.reload();
    closeMenu();
  };

  //MENU STATES

  //GSAP ANIMATIONS
  const navLogo = useRef(null);
  const hamIcon = useRef(null);
  let navMenu = useRef(null);


    useEffect(() => {
      //NAV ANIMATE



      gsap.fromTo(navMenu.current, {
          x:790,
          ease:'power3.easeinOut'
      },{
          duration:1,
          x:0,
          ease:'power3.easeinOut'

      })

    }, [hamOpen])

  useEffect(() => {
    
    gsap.fromTo(navLogo.current, {
        x:-190,
        ease:'power3.easeinOut'
    },{
        duration:1,
        x:0,
        ease:'power3.easeinOut'

    })

    
}, [])



useEffect(() => {


    gsap.fromTo(hamIcon.current, {
      x:190,
      ease:'power3.easeinOut'
  },{
      duration:1,
      x:0,
      ease:'power3.easeinOut'

  })


  
}, [])


  return (
    <nav>
      <div className="navcontainer" >
        <div className="logo" ref={navLogo}><Link className='logoLink' to='/'>H<span>-</span>X</Link></div>
        <ul style={ulDisplay()} ref={navMenu}> 
          <li onClick={closeMenu}>
            <NavLink className="myLink" activeClassName="actives" to="/Bucketlist">
              Bucketlist
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink className="myLink" activeClassName="actives" to="/Visited">
              Visited
            </NavLink>
          </li>
          {isSubmitted ? (
            ""
          ) : (
            <li onClick={closeMenu}>
              <NavLink className="myLink" activeClassName="actives" to="/SignUp">
                Register
              </NavLink>
            </li>
          )}
          {isSubmitted ? (
            <li onClick={refreshPage}>
              <Link className="myLink" activeClassName="actives" to="/">
                Logout
              </Link>
            </li>
          ) : (
            <li onClick={closeMenu}>
              <NavLink className="myLink" activeClassName="actives" to="/Login">
                Login
              </NavLink>
            </li>
          )}
          {isSubmitted && <li className='usernameLi'>{`Hello, ${signin.mainusername}`}</li>}
        </ul>
        <div className="hamIcons" ref={hamIcon} >
          <div
            style={DisplayOpenIcon()}
            onClick={() => {
              displayMenu();
            }}
            className="hamburger"
          >
            <img src={hamOpens} alt="hamburger"></img>
          </div>
          <div
            style={DisplayCloseIcon()}
            onClick={() => {
              closeMenu();
            }}
            className="hamClose"
          >
            <img src={hamClose} alt="closeHamburger"></img>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default forwardRef(Navbar);
