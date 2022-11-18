import React, { useState, useEffect } from "react";
import { getUsuario_id } from "../../services/auth";
import "./Perfil.css"
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import api from "../../services/api";

function Perfil() {

    const [dadosUsuario, setDadosUsuario] = useState();
    // const [favUsuario, setFavUsuario] = useState();

    // async function getFilmesFav() {
    //     try {
    //         const usuarioId = getUsuario_id();
    //         const response = await api.get(`/filmesfav/${usuarioId}`);
    //         console.log(response);
    //         setFavUsuario(response.data[0]); 
    //     } catch (error) {
    //         alert(error.message);
    //     }
    // }

    async function getDadosUsuario() {
        try {
            const usuarioId = getUsuario_id();
            const response = await api.get(`/users/${usuarioId}`);
            setDadosUsuario(response.data[0]); 
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        getDadosUsuario();
    },[]);

    // useEffect(() => {
    //     getFilmesFav();
    // },[]);

    return (
        <div className = "basePerfil">

            <div className="boxHeaderPerfil">
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
                    <div className = "imgUsuario">
                        <img className = "icone" src = "/images/icone2.png" alt =" icone" />
                    </div>
                    <h1 className = "nomeUsuario"> { dadosUsuario?.nome } </h1>
                    <div className = "dadosUsuario">
                        <h2 className = "email"> { dadosUsuario?.email } </h2>
                        <h2 className = "endereco"> { dadosUsuario?.endereco } </h2>
                    </div>
                </div>

                <div className = "filmesFavoritados">
                    <h1 className = "tituloFilmesFav"> Filmes Favoritados </h1>
                    <div className="boxFavoritosWrapper">
                        <div className = "FilmesFavoritados"> jndvjsnd </div>
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