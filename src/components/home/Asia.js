import React, {useState, useContext, useEffect, useRef} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


function Asia() {
    const HeritageContext = useContext(heritageContext);
    const {Asia, getAsia, storeTaskInLocalStorages, storeTaskInLocalStoragesVisited} = HeritageContext


    let revealRefs = useRef([]);
    revealRefs.current = [];
    

    useEffect(() => {
        getAsia()
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
        <section className='subMain-container'>  
            <div className='explore-container'>
                <p className='explore'>Explore Asia and the Pacific</p>
                <p className='explore-subtext'>Rugged Landscape and fascinating history</p>
            </div>
            <div className='grid-container'>
            {
                Asia.map(item => {
                    return(
                        <div className='site-container' key={uuid()} ref={addToRefs}>
                            <div className='site-image'>
                                <img  alt={item.name} src={item.image_url}></img>
                            </div>
                            <p className='site-country'>{item.states[0].name}</p>
                            <p className='site-name' >{item.name}</p>
                            <div className='read-more'  ><Link className='myLinks' to={`${item.id}`}>Read more...</Link></div>
                            <div className='bucketlist' onClick={() => {storeTaskInLocalStorages(item) }}>Save to Bucketlist</div>
                            <div className='visited' onClick={() => {storeTaskInLocalStoragesVisited(item) }}>Save to Visited</div>
                        </div>
                    )
                })
            }
            </div>
            <Link className='seeMoreLink'  to='/Asias'><p className='seeMore'>See More From Asia and the Pacific</p></Link>

        </section>
    )
}

export default Asia;
