import "../src/css/style.css";
import Home from "../src/components/home/Home";
import React from "react";
import HeritageState from "./components/context/Heritage/HeritageState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Country from "./components/home/Country";
import Region from "./components/home/Region";
import Category from "./components/home/Category";
import Site from "./components/home/Site";
import Visited from "./components/visited/Visited";
import Bucketlist from "./components/bucketlist/Bucketlist";
import SignUp from "./components/login/SignUp";
import Login from "./components/login/Login";
import Layer from "./components/shared/Layer";

import { Provider } from "react-redux";
import store from "./store";
import Allcontinents from "./components/home/Allcontinents/Allcontinents.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <HeritageState>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" render={(props) => <Home />} />
              <Route path="/countries" exact component={Country} />
              <Route path="/regions" exact component={Region} />
              <Route path="/categories" exact component={Category} />
              <Route path="/:continent" exact component={Allcontinents} />

              {/* <Route path="/Visited" component={Visited} /> */}
              
              <Route path="/Bucketlist" component={Bucketlist} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/Login" component={Login} />
              <Route path="/:id" component={Site} />
            </Switch>
            <Layer />
          </div>
        </Router>
      </HeritageState>
    </Provider>
  );
};

export default App;
