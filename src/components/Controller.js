import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './HomePage';
import OfferPage from './OfferPage';
import HistoryPage from './HistoryPage';
import CartPage from './CartPage';
const Controller = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" render={(props)=> <HomePage {...props}/>}/>
                <Route exact path="/offers" render={(props)=> <OfferPage {...props}/>}/>
                <Route exact path="/history" render={(props)=> <HistoryPage {...props}/>}/>
                <Route exact path="/cart" render={(props)=> <CartPage {...props}/>}/>
            </Switch>
        </Router>
    )
}

export default Controller;