import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

function Latino() {
    const HeritageContext = useContext(heritageContext);
    const {getAll, storeTaskInLocalStorages, storeTaskInLocalStoragesVisited} = HeritageContext

    const [Alldata, setAlldata] = useState([])


    const getLatinos = async () => {
        const res =  await  fetch('./data.json');
        const items = await res.json();
        const Latinoss =  items.filter(item => item.region.name === 'Latin America and the Caribbean');
    
        setAlldata(Latinoss)
      }
    
    

    useEffect(() => {
        getLatinos()
        // eslint-disable-next-line
    },[])

    
    return (
        <div className='afro-container'>
            <Navbar />
            <section className='subMain-container'> 
            <div className='grid-container'>
                {
                    Alldata.map(item => {
                        return(
                            <div className='site-container' key={uuid()}>
                                <div className='site-image'>
                                <Link className='myLinks' to={`${item.id}`}><img  alt={item.name} src={item.image_url}></img></Link>
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

            </section>
            <Footer />
        </div>
    )
}

export default Latino;
