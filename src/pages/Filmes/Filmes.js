import React from "react";
import "./Filmes.css"
import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import {Button} from "react-bootstrap";

function Filmes() {
    return (
        <div className = "baseFilmes">

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

            <div className = "paginaFilmes">
                <div className = "filmesAcao">
                    <h1 className = "tituloAcao"> Ação </h1>
                    <div className = "boxFilmesWrapper">
                        <Button variant = 'link' onClick = {() => {alert("Interstellar \nAno: 2014  \nDiretor: Christopher Nolan\n \n Favoritar ♡")}}  className = "boxFilmeC1"><img className = "interistelar1" src = "/images/interistelar.png" alt =" interistelar1" /></Button>
                        <Button variant = 'link' onClick = {() => {alert("Top Gun: Maverick \nAno: 2022  \nDiretor: Jerry Bruckheimer\n \nFavoritar ♡ ")}}  className = "boxFilmeC1"><img className = "topgun" src = "/images/topgun.png" alt =" topgun" /></Button>
                        <Button variant = 'link' onClick = {() => {alert("The Delta Force \nAno: 1986  \nDiretor: Menahem Golan\n \nFavoritar ♡")}}  className = "boxFilmeC1"><img className = "deltaforce" src = "/images/deltaforce.png" alt =" deltaforce" /></Button>
                    </div>
                </div>

                <div className = "filmesComedia">
                    <h1 className = "tituloComedia"> Comédia </h1>
                    <div className = "boxFilmesCWrapper">
                        <Button variant = 'link' onClick = {() => {alert("Minha Mãe É uma Peça 3 \nAno: 2016  \nDiretor: Susana Garcia \n \nFavoritar ♡")}}  className = "boxFilmeC1"><img className = "minhamae" src = "/images/minhamae.png" alt =" minhmae" /></Button>
                        <Button variant = 'link' onClick = {() => {alert("O Auto da Compadecida \nAno: 2000  \nDiretor: Guel Arraes\n \nFavoritar ♡")}}  className = "boxFilmeC1"><img className = "auto" src = "/images/auto.png" alt =" auto" /></Button>
                        <Button variant = 'link' onClick = {() => {alert("Ace Ventura: Pet Detective \nAno: 1994  \nDiretor: Tom Shadyac\n \nFavoritar ♡")}}  className = "boxFilmeC1"><img className = "ace" src = "/images/ace.png" alt =" ace" /></Button>
                    </div>  
                </div>
            </div>

            <div className="boxFooterFilmes">
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

export default Filmes;