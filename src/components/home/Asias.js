import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router'

function Asias() {
    const HeritageContext = useContext(heritageContext);
    const getAll = HeritageContext.getAll;

    const [Alldata, setAlldata] = useState([])


    const getAsias = async () => {
        const res =  await  fetch('./data.json');
        const items = await res.json();
        const Asia =  items.filter(item => item.region.name === 'Asia and the Pacific');
    
        setAlldata(Asia)
      }
    
    

    useEffect(() => {
        getAsias()
    },[])

    
    return (
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
                            <div className='bucketlist'>Save to Bucketlist</div>
                            <div className='visited'>Save to Visited</div>
                            <div className='read-more' onClick={getAll} ><Link to={`${item.id}`}>Read more...</Link></div>
                        </div>
                    )
                })
            }

        </section>
    )
}

export default Asias;
