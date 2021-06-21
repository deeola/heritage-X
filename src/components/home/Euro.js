import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

function Euro() {
    const HeritageContext = useContext(heritageContext);
    const {getAll, storeTaskInLocalStorages, storeTaskInLocalStoragesVisited} = HeritageContext

    const [Alldata, setAlldata] = useState([])


    const getAfro = async () => {
        const res =  await  fetch('./data.json');
        const items = await res.json();
        const Euros =  items.filter(item => item.region.name === 'Europe and North America');
    
        setAlldata(Euros)
      }
    
    

    useEffect(() => {
        getAfro()
    },[])

    
    return (
        <div className='afro-container'>
            <Navbar />
            <section className='subMain-container'>  
                {
                    Alldata.map(item => {
                        return(
                            <div className='site-container' key={uuid()}>
                                <div className='site-image'>
                                <img  alt={item.name} src={item.image_url}></img>
                                </div>
                                
                                <p className='site-country'>{item.states[0].name}</p>
                                <p className='site-name' >{item.name}</p>
                                <div className='bucketlist' onClick={() => {storeTaskInLocalStorages(item) }}>Save to Bucketlist</div>
                                <div className='visited' onClick={() => {storeTaskInLocalStoragesVisited(item) }}>Save to Visited</div>
                                <div className='read-more' onClick={getAll} ><Link to={`${item.id}`}>Read more...</Link></div>
                            </div>
                        )
                    })
                }

            </section>
            <Footer />
        </div>
    )
}

export default Euro;
