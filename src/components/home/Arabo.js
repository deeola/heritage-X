import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

function Arabo() {
    const HeritageContext = useContext(heritageContext);
    const {getAll, storeTaskInLocalStoragesVisited, storeTaskInLocalStorages} = HeritageContext

    const [Alldata, setAlldata] = useState([])


    const getArabo = async () => {
        const res =  await  fetch('./data.json');
        const items = await res.json();
        const Arabo =  items.filter(item => item.region.name === 'Arab States');
    
        setAlldata(Arabo)
      }
    
    

    useEffect(() => {
        getArabo()
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
                                <img  alt={item.name} src={item.image_url}></img>
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

export default Arabo;
