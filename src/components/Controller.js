import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './home/HomePage';
import OfferPage from './offer/OfferPage';
import HistoryPage from './history/HistoryPage';
import CartPage from './cartpage/CartPage';
const Controller = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/" render={(props)=> <HomePage {...props}/>}/>
                <Route path="/offers" render={(props)=> <OfferPage {...props}/>}/>
                <Route path="/history" render={(props)=> <HistoryPage {...props}/>}/>
                <Route path="/cart" render={(props)=> <CartPage {...props}/>}/>
            </Switch>
        </Router>
    )
}

export default Controller;