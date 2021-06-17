import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router'

function Africa() {
    const HeritageContext = useContext(heritageContext);
    const Africa = HeritageContext.Africa;
    const getAfrica = HeritageContext.getAfrica;
    const getAll = HeritageContext.getAll;


    //REACT HISTORY
    const history = useHistory();
    

    useEffect(() => {
        getAfrica()
    },[])

    // const Afro = () => {

    //     history.push({
    //         pathname:  "/Africas"
    //      });
        
    // }
    
    
    return (
        <section className='subMain-container'>  
            <div className='explore-container'>
                <p className='explore'>Explore Africa</p>
                <p className='explore-subtext'>Wildlife, Medinas and Ancient Wonders</p>
            </div>
            {
                Africa.map(item => {
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

                <Link className='seeMore' to='/Afro'><p>See More From Africa</p></Link>
 

        </section>
    )
}

export default Africa