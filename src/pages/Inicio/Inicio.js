import React from "react";
import "./Inicio.css"
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { BsTelephone, BsInstagram } from "react-icons/bs";

function Inicio() {

    return (
        <div className="baseInicio">
            
            <div className="boxHeaderInicio">
            <img className = "logoButter" src = "/images/logo_butter.png" alt =" logo_butter" />
                
                <div className = "botoesInicioFilmes">
                    <Link to="Inicio" className="acessoInicio"> Início </Link>
                    <Link to="Filmes" className="acessoFilmes"> Filmes </Link>
                </div>
                    
                    <div className="botoesAcessoUsuario">
                        <Link to="Filmes" className="acessoFilmes"> <BiSearchAlt /> </Link>
                        <Link to="Perfil" className="acessoPerfil"> <CgProfile /> </Link>
                        <Link to="Login" className="logOut"> <TbLogout /> </Link>
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

            <div className="boxFooterInicio">
                <div className="copyRight"> © 2022 Butter Inc. </div>
                <div className="textoPrincipal"> Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG | CNPJ: 51.514.718/0001-37 </div>
                <div className="contatoCPE">
                    <p style = {{color:"white"}}> <BsTelephone/> (31) 3003-7070 </p>
                    <a href="https://www.instagram.com/cpe.jr/" className="contatoInstagram">
                    <div className ="simboloIg"> <BsInstagram/> 
                    </div> <div style = {{color:"black"}}> - </div>@cpe.jr </a>
                </div> 
            </div>

        </div>
    )
}

export default Inicio;