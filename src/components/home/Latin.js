import React, {useState, useContext, useEffect} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid'

function Latin() {
    const HeritageContext = useContext(heritageContext);
    const Latin = HeritageContext.Latin;
    const getLatin = HeritageContext.getLatin;
    

    useEffect(() => {
        getLatin()
    },[])


    
    return (
        <div>  
            {
                Latin.map(item => {
                    return(
                        <div key={uuid()}>
                        <h1 >{`Latin: ${item.name}`}</h1>
                        <p>{item.region.name}</p>
                        </div>
                        
                    )
                })
            }

        </div>
    )
}

export default Latin;
