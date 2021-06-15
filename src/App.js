import '../src/css/style.css';
import Home from '../src/components/home/Home';
import React from 'react';
import HeritageState from './components/context/Heritage/HeritageState';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Test from './components/home/Test';
import Country from './components/home/Country';
import Region from './components/home/Region';
import Category from './components/home/Category';
import Details from './components/home/Details';


function App() {
  return (
    <HeritageState>
      <Router>
        
      <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Home /> } /> 
        <Route  path="/countries" component={Country} /> 
        <Route path="/regions" exact component={Region}  /> 
        <Route  path="/categories" component={Category} /> 
        <Route path='/regions/:id'  component={Details} />

          
      </Switch>
      </div>
      
      </Router>
    </HeritageState>
    
  );
}


export default App;

