import '../src/css/style.css';
import Home from '../src/components/home/Home';
import React from 'react';
import HeritageState from './components/context/Heritage/HeritageState';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Country from './components/home/Country';
import Region from './components/home/Region';
import Category from './components/home/Category';
import Details from './components/home/Details';
import CategoriesDetails from './components/home/CategoriesDetails';
import CountriesDetails from './components/home/CountriesDetails';


function App() {
  return (
    <HeritageState>
      <Router>
        
      <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home /> } /> 
        <Route  path="/countries" exact component={Country} /> 
        <Route path="/regions" exact component={Region}  /> 
        <Route  path="/categories" exact component={Category} /> 
        <Route path='/regions/:id'  component={Details} />
        <Route path='/categories/:id'  component={CategoriesDetails} />
        <Route path='/countries/:id'  component={CountriesDetails} />
       
          
      </Switch>

      </div>
      
      </Router>
    </HeritageState>
    
  );
}


export default App;

 

