import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';

function Latin() {
    const HeritageContext = useContext(heritageContext);
    const {Latin, getLatin, storeTaskInLocalStorages, storeTaskInLocalStoragesVisited} = HeritageContext
    

    useEffect(() => {
        getLatin()
    },[])


    
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
                        <div className='site-container' key={uuid()}>
                            <div className='site-image'>
                                <img  alt={item.name} src={item.image_url}></img>
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

            <Link className='seeMoreLink'  to='/Latino'><p className='seeMore'>See More From Latin America and Caribbean</p></Link>

        </section>
    )
}

export default Latin;
