import React,{useContext} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import {Link} from 'react-router-dom';

function Country() {

    const HeritageContext = useContext(heritageContext);

    const Countries = HeritageContext.Countries;
    return (
        <div>
           {
                Countries.map(item => {
                    return(
                        <div>
                        <img src={item.image_url} alt=''></img>
                        <h4>{item.name}</h4>
                        <p>{item.category.name}</p>
                        <Link to={`/countries/${item.id}`}>Click me</Link>
                    </div>
                    )
                })

            } 
        </div>
    )
}

export default Country;
