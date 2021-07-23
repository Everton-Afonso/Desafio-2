import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Clients from "./pages/Clients";
import Produtos from "./pages/Products";
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
                    <Produtos />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}