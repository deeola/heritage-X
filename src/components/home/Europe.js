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
        <div>  
            {
                Europe.map(item => {
                    return(
                        <div key={uuid()}>
                        <h1 >{`Europe: ${item.name}`}</h1>
                        <p>{item.region.name}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Europe;
