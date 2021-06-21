import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import loadingimage from '../../assets/icons/loadingtwo.gif'

function Africa() {
    const HeritageContext = useContext(heritageContext);
    const {Africa, getAfrica, getAll, storeTaskInLocalStoragesVisited, storeTaskInLocalStorages, loading} = HeritageContext;


    //REACT HISTORY
    const history = useHistory();
    

    useEffect(() => {
        getAfrica()
    },[])
    
    return (
        <section className='subMain-container'>  
            <div className='explore-container'>
                <p className='explore'>Explore Africa</p>
                <p className='explore-subtext'>Wildlife, Medinas and Ancient Wonders</p>
            </div>
            <div className='grid-container'>
            {
                Africa.map(item => {

                    return(
                        <div className='site-container' key={uuid()}>
                            <div className='site-image'>
                                {
                                    loading ? <img alt='loadinggif' src={loadingimage}></img> : <img  alt={item.name} src={item.image_url}></img>
                                }
                            
                            </div>
                            <p className='site-country'>{item.states[0].name}</p>
                            <p className='site-name' >{item.name}</p>
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
