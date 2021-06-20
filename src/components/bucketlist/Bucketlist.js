import React,{useContext, useEffect, useState} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import {Link} from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import uuid from 'react-uuid';



function Bucketlist() {
    const HeritageContext = useContext(heritageContext);
    const {isSubmitted, Submitform,storeTaskInLocalStoragesVisited} = HeritageContext;

    const [Bucketlist, setBucketList] = useState([])
    useEffect(() => {
        const Bucket = JSON.parse(localStorage.getItem('buckets'));
        setBucketList(Bucket);
    }, [])

    //REMOVE

    const removeTaskFromLocalStorages = (items) => {
        let buckets;
        if (localStorage.getItem("buckets") === null) {
          buckets = [];
      
          //notify that there is no bucketlist
        } else {
          buckets = JSON.parse(localStorage.getItem("buckets"));
        }

      
        buckets.forEach( (task, index) => {
          if (items.id === task.id) {
              console.log(buckets)

            buckets.splice(index, 1);
            console.log(buckets)
          }
        });
      
        localStorage.setItem("buckets", JSON.stringify(buckets));
        setBucketList(buckets);
      }
    

    return (
        
        <div className='afro-container'>
            <Navbar />
            <section className='subMain-container'>  
            {
                Bucketlist.length !== 0 && isSubmitted ? Bucketlist.map(item => {
                    return(
                        <div className='site-container' key={uuid()}>
                            <div className='site-image'>
                            <img  alt={item.name} src={item.image_url}></img>
                            </div>
                            
                            <p className='site-country'>{item.states[0].name}</p>
                            <p className='site-name' >{item.name}</p>
                            <div className='bucketlist remove' onClick={() => { removeTaskFromLocalStorages(item)}} >Remove</div>
                            <div className='visited' onClick={() => {storeTaskInLocalStoragesVisited(item) }}>Save to Visited</div>
                            <div className='read-more'  ><Link to={`${item.id}`}>Read more...</Link></div>
                        </div>
                    )
                }) : <div>Please login or signup to see your bucketlist</div>
            }

            </section>
            <Footer />

        </div>
    )
}

export default Bucketlist
