import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid'

function Asia() {
    const HeritageContext = useContext(heritageContext);
    const Asia = HeritageContext.Asia;
    const getAsia = HeritageContext.getAsia;
    

    useEffect(() => {
        getAsia()
    },[])

    
      
    
    
    

    
    
    return (
        <div>  
            {
                Asia.map(item => {
                    return(
                        <div key={uuid()}>
                        <h1 >{`Asia: ${item.name}`}</h1>
                        <p>{item.region.name}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Asia;
