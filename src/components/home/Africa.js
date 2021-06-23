import React, {useState, useContext, useEffect, useRef} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import loadingimage from '../../assets/icons/loadingtwo.gif';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function Africa() {

    const HeritageContext = useContext(heritageContext);
    const {Africa, getAfrica, getAll, storeTaskInLocalStoragesVisited, storeTaskInLocalStorages, loading} = HeritageContext;


    //REACT HISTORY
    const history = useHistory();

    //ANIMATION

    let refs = useRef(null)
    let revealRefs = useRef([]);
    revealRefs.current = [];





    useEffect(() => {
        getAfrica()
        // ANIMATION

        //ANIMNATE HEADER

        gsap.fromTo(refs,{
            duration:5,
            x:1000,
            opacity:0,
            ease:'power3.inOut'

        },{
            duration:1.5,
            x:0,
            opacity:1,
            ease:'power3.inOut'

        }, 'start')

        
    },[])


    
    useEffect(() => {

        if(revealRefs.current.length !== 0){
            revealRefs.current.forEach( (el, index) => {

            
            
                gsap.fromTo(el, {
                    
                    opacity:0,
                    ease:'power3.easeinOut'
                },
                     {
                    
                    // x:0,
                    duration:1,
                    // ease:'none',
                    opacity:1,
                    ease:'power3.easeinOut',
                    scrollTrigger:{
                        id: `section-${index + 1 }`,
                        trigger:el,
                        start:'top center+=100',
                        toggleActions:'play none'
                    }
    
                })
            })
            

        }

        
        
        
        

    },[revealRefs.current])

    const addToRefs = (el) => {
        if(el && !revealRefs.current.includes(el)){
            revealRefs.current.push(el)
        }

    }

    
    
    return (
        <section className='subMain-container africacontainer' >  
            <div className='explore-container'>
                <p className='explore' ref={el => refs = el}>Explore Africa</p>
                <p className='explore-subtext'>Wildlife, Medinas and Ancient Wonders</p>
            </div>
            <div className='grid-container'>
            {
                Africa.map(item => {

                    return(
                        <div className='site-container' key={uuid()} ref={addToRefs}>
                            <div className='site-image' >
                                {
                                    loading ? <img alt='loadinggif' src={loadingimage}></img> : <img  alt={item.name} src={item.image_url}></img>
                                }
                            
                            </div>
                            <p className='site-country'>{item.states[0].name}</p>
                            <p className='site-name'   >{item.name}</p>
                            <div className='read-more' onClick={getAll} ><Link className='myLinks' to={`${item.id}`}>Read more...</Link></div>
                            <div className='bucketlist' onClick={() => {storeTaskInLocalStorages(item) }}>Save to Bucketlist</div>
                            <div className='visited' onClick={() => {storeTaskInLocalStoragesVisited(item) }}>Save to Visited</div>
                            
                        </div>
                    )
                })
            }


            </div>
            
            
            <Link className='seeMoreLink'  to='/Afro'><p className='seeMore'>See More From Africa</p></Link>
 

        </section>
    )
}

export default Africa
