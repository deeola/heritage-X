import React,{useEffect, useContext, useState} from 'react';
import heritageContext from '../context/Heritage/heritageContext';

function CountriesDetails({ match }) {

    const HeritageContext = useContext(heritageContext);

    const Countries = HeritageContext.Countries;

    const [data, setData] = useState([])

    useEffect(() => {
        const id = match.params.id;
        const newdata = Countries.filter(item => item.id == Number(id) );

        setData(newdata)
        
    },[])
    
    return (
        <div>
            {data.length !== 0 && data.map(item => {

                return (
                    <div>
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

export default CountriesDetails;
