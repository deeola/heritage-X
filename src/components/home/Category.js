import React,{useContext} from 'react';
import heritageContext from '../context/Heritage/heritageContext';

function Category() {
    const HeritageContext = useContext(heritageContext);

    const Categories = HeritageContext.Categories;
    return (
        <div>
            {
                Categories.map(item => {
                    return(
                        <div>
                        <img src={item.image_url} alt=''></img>
                        <h4>{item.name}</h4>
                        <p>{item.category.name}</p>
                    </div>
                    )
                })

            } 
            
        </div>
    )
}

export default Category;
