import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Products from "./pages/Products";
import Footer from "./pages/Footer"

export default function Routes() {
    return (
        <BrowserRouter>
            <Home />
            <Switch>
                <Route path="/" exact>
                    <Clients />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}