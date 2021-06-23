import React,{useEffect, useRef, useContext} from 'react';
import Navbar from '../shared/Navbar';
import SelectForm from '../shared/SelectForm';
import heritageContext from '../context/Heritage/heritageContext';

import { gsap } from 'gsap'


function Header() {
    const HeritageContext = useContext(heritageContext);

    const {hamOpen} = HeritageContext;

    let headerRef = useRef(null);
    let heroMain = useRef(null)
    let formAnimate = useRef(null)
    let navMenu = useRef(null);
    let navLogo = useRef(null);

    


    useEffect(() => {
        gsap.to(headerRef, 0, {css:{visibility:'visible'}})

        const hero = heroMain.firstElementChild;
        const heroText = hero.nextSibling;

        //NAV ANIMATE

        // if(hamOpen === false){

        //     gsap.fromTo(navMenu.current,{
        //         duration:5,
        //         // x:1000,
        //         opacity:0,
        //         ease:'power3.inOut'
    
        //     },{
        //         duration:1.5,
        //         // x:0,
        //         opacity:1,
        //         ease:'power3.inOut'
    
        //     }, 'start')
        // }
    
            
        //  else if(hamOpen===false){
        //     gsap.fromTo(navMenu.current,{
        //         duration:1.5,
        //         x:-1000,
        //         opacity:0,
        //         ease:'power3.inOut'
    
        //     },{
        //         duration:1.5,
        //         x:0,
        //         opacity:1,
        //         ease:'power3.inOut'
    
        //     }, )
    

        // }

        

        //HERO ANIMATE

        gsap.fromTo(hero, {
            duration:3,
            x:2000,

            ease:'power3.inOut'
        },
        {
            duration:2,
            x:0,
            ease:'power3.inOut'

        }, 'start')

        gsap.fromTo(heroText,{
            duration:1.5,
            x:-1000,
            opacity:0,
            ease:'power3.inOut'

        },{
            duration:1.5,
            x:0,
            opacity:1,
            ease:'power3.inOut'

        }, 'start')


        gsap.fromTo(formAnimate.current,{
            duration:1.5,
            x:-1000,
            opacity:0,
            ease:'power3.inOut'

        },{
            duration:1.5,
            x:0,
            opacity:1,
            ease:'power3.inOut'

        }, 'start')

    }, [])


    useEffect(() => {
        //NAV ANIMATE



        gsap.fromTo(navMenu.current, {
            duration:3,
            x:790,
            ease:'power3.easeinOut'
        },{
            duration:3,
            x:0,
            ease:'power3.easeinOut'

        })

        console.log(navMenu.current, hamOpen)
    
    

    }, [hamOpen])

    


    return (
        <header ref={el => headerRef = el}>
            <Navbar ref={navMenu} />
            <div className='navLine' ></div>
            <div className='hero-container' >
                <div className='hero-text' ref={el => heroMain= el}>
                    <h1>HERITAGE<span>-X.</span></h1>
                    <p className='Hero-subheading'> Bringing UNESCO World Heritage Sites To Your Doorstep.</p>
                </div>
                <SelectForm ref={formAnimate} />
            </div>
            
            
        </header>
    )
}

export default Header
