import React, { useContext, useEffect, useRef, useState ,forwardRef} from "react";
import hamOpens from "../../assets/icons/icon-hamburger.svg";
import hamClose from "../../assets/icons/icon-close.svg";
import heritageContext from "../context/Heritage/heritageContext";
import { Link } from "react-router-dom";
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
          duration:3,
          x:0,
          ease:'power3.easeinOut'

      })

    }, [hamOpen])

  useEffect(() => {
    
    gsap.fromTo(navLogo.current, {
        x:-190,
        ease:'power3.easeinOut'
    },{
        duration:1.5,
        x:0,
        ease:'power3.easeinOut'

    })

    
}, [])



useEffect(() => {


    gsap.fromTo(hamIcon.current, {
      x:190,
      ease:'power3.easeinOut'
  },{
      duration:1.5,
      x:0,
      ease:'power3.easeinOut'

  })


  
}, [])


  return (
    <nav>
      <div className="navcontainer" >
        <div className="logo" ref={navLogo}>H-X</div>
        <ul style={ulDisplay()} ref={navMenu}> 
          <li onClick={closeMenu}>
            <Link className="myLink" to="/Bucketlist">
              Bucketlist
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link className="myLink" to="/Visited">
              Visited
            </Link>
          </li>
          {isSubmitted ? (
            ""
          ) : (
            <li onClick={closeMenu}>
              <Link className="myLink" to="/SignUp">
                Register
              </Link>
            </li>
          )}
          {isSubmitted ? (
            <li onClick={refreshPage}>
              <Link className="myLink" to="/">
                Logout
              </Link>
            </li>
          ) : (
            <li onClick={closeMenu}>
              <Link className="myLink" to="/Login">
                Login
              </Link>
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
