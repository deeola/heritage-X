import React,{useContext, useEffect, useState} from 'react';
import heritageContext from '../context/Heritage/heritageContext';
import {Link} from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import uuid from 'react-uuid';



function Visited() {
    const HeritageContext = useContext(heritageContext);
    const {isSubmitted, Submitform,storeTaskInLocalStorages} = HeritageContext;


    const [Visited, setVisited] = useState([])
    useEffect(() => {
        const visit = JSON.parse(localStorage.getItem('visited'));
        setVisited(visit);
    }, [])

    //REMOVE
    const removeTaskFromLocalStoragesVisited = (items) => {
        let visited;
        if (localStorage.getItem("visited") === null) {
          visited = [];
      
          //notify that there is no bucketlist
        } else {
          visited = JSON.parse(localStorage.getItem("visited"));
        }

      
        visited.forEach( (task, index) => {
          if (items.id === task.id) {

            visited.splice(index, 1);
          }
        });
      
        localStorage.setItem("visited", JSON.stringify(visited));
        setVisited(visited);
      }

    

    return (
        
        <div className='afro-container'>
            <Navbar />
            <section className='subMain-container'>
              {
                isSubmitted ? 
                  Visited.length !== 0 ?  Visited.map(item => {
                      return(
                          <div className='site-container' key={uuid()}>
                              <div className='site-image'>
                              <img  alt={item.name} src={item.image_url}></img>
                              </div>
                              
                              <p className='site-country'>{item.states[0].name}</p>
                              <p className='site-name' >{item.name}</p>
                              <div className='visited remove'  onClick={() => {removeTaskFromLocalStoragesVisited(item) }} >Remove</div>
                              <div className='bucketlist' onClick={() => {storeTaskInLocalStorages(item) }} >Save to Buckelist</div>
                              
                              <div className='read-more'  ><Link to={`${item.id}`}>Read more...</Link></div>
                          </div>
                      )
                  }) : <div>Your Visit List is empty</div>

                  : <div>Kindly login to View Visit List</div>

              }  
            

            </section>
            <Footer />

        </div>
    )
}

export default Visited;
