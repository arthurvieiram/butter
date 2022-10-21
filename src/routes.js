import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Filmes from "./pages/Filmes";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/login" component = { Login } />
                <Route path = "/cadastro" component = { Cadastro } />
                <Route path = "/inicio" component = { Inicio } />
                <Route path = "/filmes" component = { Filmes } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;