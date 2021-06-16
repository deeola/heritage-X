import React,{useEffect, useContext, useState } from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import uuid from 'react-uuid';

function Site({ match }) {
    
    // const HeritageContext = useContext(heritageContext);

    const [Alldata, setAlldata] = useState([])


    const getAll = async() => {

        const res =  await  fetch('./data.json');
        const items = await res.json();

        const id = match.params.id;
        const newdata = items.filter(item => item.id == Number(id) );

        setAlldata(newdata)
 
    }

    useEffect(() => {
        
        getAll()
        
        
    },[])
    
    return (
        <div>
            {Alldata.length !== 0 && Alldata.map(item => {

                return (
                    <div key={uuid()}>
                        <h1>{item.name}</h1>
                        <h1>{item.latitude}</h1>
                        <h1>{item.longitude}</h1>
                        <h1>{item.region.name}</h1>
                        <img src={item.image_url} alt=''></img>
                        <p>{item.short_description}</p>
                        <h1>{item.states[0].name}</h1>
                        <h1>{item.category.name}</h1>
                        <h1>{item.date_inscribed}</h1>
                    </div>
                        
                        
                        
                )
                
            })}
        </div>
    )
}

export default Site;
