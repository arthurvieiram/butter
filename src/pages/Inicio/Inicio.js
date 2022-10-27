import React from "react";
import "./Inicio.css"
import { Link } from "react-router-dom";

function Inicio() {

    return (
        <div className="baseInicio">
            <div className="boxHeader">
            <img className = "logo_butter" src = "/images/logo_butter.png" alt =" logo_butter" />
                
                <div className = "botoesInicioFilmes">
                    <Link to="Inicio" className="acessoInicio"> Início </Link>
                    <Link to="Filmes" className="acessoFilmes"> Filmes </Link>
                </div>
                    
                    <div className="botoesAcessoUsuario">
                        <Link to="Perfil" className="acessoPerfil"> Perfil </Link>
                        <Link to="Login" className="logOut"> Logout </Link>
                    </div>
            
            </div>
            <div className="paginaInicio">

                <div className="textosInicio">
                
                    <h3 className="texto1"> Nosso compromisso com você é a entrega do melhor serviço de streaming ao manter o profissionalismo em um trabalho mais eficiente. Assista aos melhores filmes de onde e quando quiser! </h3>
                    <h4 className="texto2"> Somos uma empresa de universitários com o objetivo de aperfeiçoar a experiência de nossos usuários no universo digital. </h4>
                </div>
            
                <div className ="maisAssistidos">
                    <h1 className="tituloMaisAssistidos"> Filmes mais assistidos </h1>
                        <div className="boxMaisAssistidosWrapper">
                            <div className="boxMA1"></div>
                            <div className="boxMA2"></div>
                            <div className="boxMA3"></div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Inicio;