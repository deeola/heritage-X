import React,{useEffect, useContext, useState} from 'react';
import heritageContext from '../context/Heritage/heritageContext';

function Details({ match }) {

    const HeritageContext = useContext(heritageContext);

    const Regions = HeritageContext.Regions;

    const [data, setData] = useState([])

    useEffect(() => {
        const id = match.params.id;
        const newdata = Regions.filter(item => item.id == Number(id) );

        setData(newdata)
        console.log(newdata)
        console.log(Regions)
    },[])

    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default Details;
