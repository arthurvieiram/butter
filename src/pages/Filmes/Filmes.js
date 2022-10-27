import React from "react";
import "./Filmes.css"
import { Link } from "react-router-dom"

function Filmes() {
    return (
        <div className = "baseFilmes">

            <div className = "paginaFilmes">
                <div className = "filmesAcao">
                    <h1 className = "tituloAcao"> Ação </h1>
                    <div className = "boxFilmesWrapper">
                        <Link to="inicio" className = "boxFilme1"></Link>
                        <Link to="inicio" className = "boxFilme2"></Link>
                        <Link to="inicio" className = "boxFilme3"></Link>
                    </div>
                </div>

                <div className = "filmesComedia">
                    <h1 className = "tituloComedia"> Comédia </h1>
                    <div className = "boxFilmesCWrapper">
                        <Link to="inicio" className = "boxFilmeC1"></Link>
                        <Link to="inicio" className = "boxFilmeC2"></Link>
                        <Link to="inicio" className = "boxFilmeC3"></Link>
                    </div>  
                </div>
            </div>         
        </div>
    )
}

export default Filmes;