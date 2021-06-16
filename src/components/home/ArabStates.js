import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid'

function ArabStates() {
    const HeritageContext = useContext(heritageContext);
    const Arab = HeritageContext.Arab;
    const getArab = HeritageContext.getArab;
    

    useEffect(() => {
        getArab()
    },[])
    
    
    return (
        <div>  
            {
                Arab.map(item => {
                    return(
                        <div key={uuid()}>
                        <h1 >{`Arab: ${item.name}`}</h1>
                        <p>{item.region.name}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ArabStates;
