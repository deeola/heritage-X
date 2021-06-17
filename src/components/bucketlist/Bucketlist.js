import React,{useContext, useEffect, useState} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import {Link} from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import uuid from 'react-uuid';



function Bucketlist() {
    const HeritageContext = useContext(heritageContext);
    const storeTaskInLocalStoragesVisited = HeritageContext.storeTaskInLocalStoragesVisited;

    const [Bucketlist, setBucketList] = useState([])
    useEffect(() => {
        const Bucket = JSON.parse(localStorage.getItem('buckets'));
        setBucketList(Bucket);
    }, [])

    return (
        
        <div className='afro-container'>
            <Navbar />
            <section className='subMain-container'>  
            {
                Bucketlist.length !== 0 && Bucketlist.map(item => {
                    return(
                        <div className='site-container' key={uuid()}>
                            <div className='site-image'>
                            <img  alt={item.name} src={item.image_url}></img>
                            </div>
                            
                            <p className='site-country'>{item.states[0].name}</p>
                            <p className='site-name' >{item.name}</p>
                            <div className='bucketlist' >Remove</div>
                            <div className='visited' onClick={() => {storeTaskInLocalStoragesVisited(item) }}>Save to Visited</div>
                            <div className='read-more'  ><Link to={`${item.id}`}>Read more...</Link></div>
                        </div>
                    )
                })
            }

            </section>
            <Footer />

        </div>
    )
}

export default Bucketlist
