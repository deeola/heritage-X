import React,{useContext, useEffect, useState} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import {Link} from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import uuid from 'react-uuid';



function Visited() {
    const HeritageContext = useContext(heritageContext);
    const storeTaskInLocalStorages = HeritageContext.storeTaskInLocalStorages;

    const [Visited, setVisited] = useState([])
    useEffect(() => {
        const visit = JSON.parse(localStorage.getItem('visited'));
        setVisited(visit);
    }, [])

    return (
        
        <div className='afro-container'>
            <Navbar />
            <section className='subMain-container'>  
            {
                Visited.length !== 0 && Visited.map(item => {
                    return(
                        <div className='site-container' key={uuid()}>
                            <div className='site-image'>
                            <img  alt={item.name} src={item.image_url}></img>
                            </div>
                            
                            <p className='site-country'>{item.states[0].name}</p>
                            <p className='site-name' >{item.name}</p>
                            <div className='visited' >Remove</div>
                            <div className='bucketlist' onClick={() => {storeTaskInLocalStorages(item) }} >Save to Buckelist</div>
                            
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

export default Visited;
