import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home"
import Produtos from "./Pages/Produtos";
import Sobre from "./Pages/Sobre";
import Header from "./Components/Header";
// import Lista from "./Components/Lista"
// import Atributos from "./Components/Atributos"
// import Compras from "./Components/Compras"
// import Colors from "./Components/Colors"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/produtos">
                    <Produtos />
                </Route>
                <Route path="/Sobre">
                    <Sobre />
                </Route>
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>)
};

export default App;