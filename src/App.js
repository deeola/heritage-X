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
import Site from './components/home/Site';
import Afro from './components/home/Afro';
import Euro from './components/home/Euro';
import Latino from './components/home/Latino';
import Asias from './components/home/Asias';
import Arabo from './components/home/Arabo';
import Visited from './components/visited/Visited';
import Bucketlist from './components/bucketlist/Bucketlist';


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
        <Route path='/Afro' exact component={Afro} />
        <Route path='/Euro' exact component={Euro} />
        <Route path='/Latino' exact component={Latino} />
        <Route path='/Asias' exact component={Asias} />
        <Route path='/Arabo' exact component={Arabo} />
        <Route path='/Visited'  component={Visited} />
        <Route path='/Bucketlist'  component={Bucketlist} />
        <Route path='/regions/:id'  component={Details} />
        <Route path='/categories/:id'  component={CategoriesDetails} />
        <Route path='/countries/:id'  component={CountriesDetails} />
        <Route path='/:id'  component={Site} />
        

                  
      </Switch>

      </div>
      </Router>
      
    </HeritageState>
    
  );
}


export default App;



 
