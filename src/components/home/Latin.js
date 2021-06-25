import React, {useContext, useEffect,useRef} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


function Latin() {
    const HeritageContext = useContext(heritageContext);
    const {Latin, getLatin, storeTaskInLocalStorages, storeTaskInLocalStoragesVisited} = HeritageContext;

    //ANIMATION
    let revealRefs = useRef([]);
    revealRefs.current = [];
    

    useEffect(() => {
        getLatin()
        // eslint-disable-next-line
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

        // eslint-disable-next-line
    },[revealRefs.current])

    const addToRefs = (el) => {
        if(el && !revealRefs.current.includes(el)){
            revealRefs.current.push(el)
        }

    }


    
    return (
        <section className='subMain-container'>  
            <div className='explore-container'>
                <p className='explore'>Explore Latin America and Caribbean</p>
                <p className='explore-subtext'>Amazing landscape and beautiful marine Wildlife</p>
            </div>
            <div className='grid-container'>
            {
                Latin.map(item => {
                    return(
                        <div className='site-container' key={uuid()} ref={addToRefs}>
                            <div className='site-image'>
                            <Link className='myLinks' to={`${item.id}`}><img  alt={item.name} src={item.image_url}></img></Link>
                            </div>
                            <p className='site-country'>{item.states[0].name}</p>
                            <p className='site-name' >{item.name}</p>
                            <div className='read-more'><Link className='myLinks' to={`${item.id}`}>Read more...</Link></div>
                            <div className='bucketlist' onClick={() => {storeTaskInLocalStorages(item) }}>Save to Bucketlist</div>
                            <div className='visited' onClick={() => {storeTaskInLocalStoragesVisited(item) }}>Save to Visited</div>
                        </div>
                    )
                })
            }
            </div>

            <Link className='seeMoreLink'  to='/Latino'><p className='seeMore'>See More From Latin America and Caribbean <i className="fas fa-chevron-right"></i></p></Link>

        </section>
    )
}

export default Latin;
