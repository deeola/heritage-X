import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';


function ArabStates() {
    const HeritageContext = useContext(heritageContext);
    const Arab = HeritageContext.Arab;
    const getArab = HeritageContext.getArab;
    

    useEffect(() => {
        getArab()
    },[])
    
    
    return (
        <div>  
            <section className='subMain-container'>  
            <div className='explore-container'>
                <p className='explore'>Explore Arab States</p>
                <p className='explore-subtext'>Rich in History and beauty</p>
            </div>
            {
                Arab.map(item => {
                    return(
                        <div className='site-container' key={uuid()}>
                            <div className='site-image'>
                                <img  alt={item.name} src={item.image_url}></img>
                            </div>
                            <p className='site-country'>{item.states[0].name}</p>
                            <p className='site-name' >{item.name}</p>
                            <div className='bucketlist'>Save to Bucketlist</div>
                            <div className='visited'>Save to Visited</div>
                            <div className='read-more'><Link to={`${item.id}`}>Read more...</Link></div>
                        </div>
                    )
                })
            }
            <div className='seeMore'>
                <p>See More From Asia States</p>
            </div>

        </section>

        </div>
    )
}

export default ArabStates;
