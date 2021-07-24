import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Footer from "./pages/Footer"

export default function Routes() {
    return (
        <Router>
            <Home />
            <Switch>
                <Route path="/" exact component={Clients} />
                <Route exact path="/products" component={Products} />
            </Switch>
            <Footer />
        </Router>
    )
}
