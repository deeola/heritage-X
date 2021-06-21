import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';

function Asia() {
    const HeritageContext = useContext(heritageContext);
    const {Asia, getAsia, storeTaskInLocalStorages, storeTaskInLocalStoragesVisited} = HeritageContext
    

    useEffect(() => {
        getAsia()
    },[])

    
    return (
        <section className='subMain-container'>  
            <div className='explore-container'>
                <p className='explore'>Explore Asia and the Pacific</p>
                <p className='explore-subtext'>Rugged Landscape and fascinating history</p>
            </div>
            {
                Asia.map(item => {
                    return(
                        <div className='site-container' key={uuid()}>
                            <div className='site-image'>
                                <img  alt={item.name} src={item.image_url}></img>
                            </div>
                            <p className='site-country'>{item.states[0].name}</p>
                            <p className='site-name' >{item.name}</p>
                            <div className='bucketlist' onClick={() => {storeTaskInLocalStorages(item) }}>Save to Bucketlist</div>
                            <div className='visited' onClick={() => {storeTaskInLocalStoragesVisited(item) }}>Save to Visited</div>
                            <div className='read-more'><Link to={`${item.id}`}>Read more...</Link></div>
                        </div>
                    )
                })
            }
            <Link className='seeMore' to='/Asias'><p>See More From Asia and the Pacific</p></Link>

        </section>
    )
}

export default Asia;
