import React from "react";
import "./Perfil.css"
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { BsTelephone, BsInstagram } from "react-icons/bs";

function Perfil() {
    return (
        <div className = "basePerfil">

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

            <div className = "paginaPerfil">
                <div className = "Usuario">
                <img className = "icone" src = "/images/icone2.png" alt =" icone" />
                    <h1 className = "nomeUsuario"> Nome </h1>
                    <div className = "dadosUsuario">
                        <h2 className = "idade"> Idade </h2>
                        <h2 className = "email"> Email </h2>
                        <h2 className = "endereco"> Endereço completo </h2>
                    </div>
                </div>

                <div className = "filmesFavoritados">
                    <h1 className = "tituloFilmesFav"> Filmes Favoritados </h1>
                    <h4 className = "verTodos"> Ver todos </h4>
                    <div className="boxFavoritosWrapper">
                    <img className = "ace" src = "/images/ace.png" alt =" ace" />
                    <img className = "auto" src = "/images/auto.png" alt =" auto" />
                    <img className = "deltaforce" src = "/images/deltaforce.png" alt =" deltaforce" />
                        </div>
                </div>
            </div>

            <div className="boxFooterPerfil">
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

export default Perfil;