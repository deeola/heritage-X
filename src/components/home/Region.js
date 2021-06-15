import React,{useContext} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import {Link} from 'react-router-dom';


function Region() {

    const HeritageContext = useContext(heritageContext);

    const Regions = HeritageContext.Regions;
    return (
        <div>
            {
                Regions.map(item => {
                    return(
                        <div>
                        <h4>{item.states[0].name}</h4>
                        <img src={item.image_url} alt=''></img>
                        <h4>{item.name}</h4>
                        <p>{item.category.name}</p>
                        <Link to={`/regions/${item.id}`}>Click me</Link>
                    </div>
                    )
                })

            }
            
        </div>
    )
}

export default Region;
