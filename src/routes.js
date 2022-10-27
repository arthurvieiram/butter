import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Filmes from "./pages/Filmes";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import PaginaDeFilme from "./pages/PaginaDeFilme";

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path = "/login" component = { Login } />
                <Route path = "/cadastro" component = { Cadastro } />
                <Route path = "/perfil" component = { Perfil } />
                <Route path = "/inicio" component = { Inicio } />
                <Route path = "/filmes" component = { Filmes } />
                <Route path = "/paginadefilme" component = { PaginaDeFilme } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;