import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid'

function Africa() {
    const HeritageContext = useContext(heritageContext);
    const Africa = HeritageContext.Africa;
    const getAfrica = HeritageContext.getAfrica;
    

    useEffect(() => {
        getAfrica()
    },[])

    
    
    
    return (
        <div>  
            {
                Africa.map(item => {
                    return(
                        <div key={uuid()}>
                        <h1>{`Africa: ${item.name}`}</h1>
                        <p>{item.region.name}</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Africa
