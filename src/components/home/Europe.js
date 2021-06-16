import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';

function Europe() {
    const HeritageContext = useContext(heritageContext);
    const Europe = HeritageContext.Europe;
    const getEurope = HeritageContext.getEurope;
    

    useEffect(() => {
        getEurope()
    },[])

    
      
    
    
    

    
    
    return (
        <section className='subMain-container'>  
            <div className='explore-container'>
                <p className='explore'>Explore Europe and North America</p>
                <p className='explore-subtext'>Historic Architecture  and stunning landscapes</p>
            </div>
            {
                Europe.map(item => {
                    return(
                        <div className='site-container' key={uuid()}>
                            <div className='site-image'>
                                <img  alt={item.name} src={item.image_url}></img>
                            </div>
                            <p className='site-country'>{item.states[0].name}</p>
                            <p className='site-name' >{item.name}</p>
                            <div className='bucketlist'>Save to Bucketlist</div>
                            <div className='visited'>Save to Visited</div>
                            <div className='read-more'>Read More...</div>
                        </div>
                    )
                })
            }
            <div className='seeMore'>
                <p>See More From Europe and North America</p>
            </div>

        </section>
    )
}

export default Europe;
