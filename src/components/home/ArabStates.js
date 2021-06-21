import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import loadingimage from '../../assets/icons/loadingtwo.gif'


function ArabStates() {
    const HeritageContext = useContext(heritageContext);

    const {Arab, getArab, storeTaskInLocalStorages, storeTaskInLocalStoragesVisited,loading} = HeritageContext

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
                            {
                                     loading ? <img alt='loadinggif' src={loadingimage}></img>  : <img  alt={item.name} src={item.image_url}></img>
                                }
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

            <Link className='seeMore' to='/Arabo'><p>See More From Arab States</p></Link>

        </section>

        </div>
    )
}

export default ArabStates;
