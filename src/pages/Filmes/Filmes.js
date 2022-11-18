import React, { useEffect, useState } from 'react';
import './index.css';
import "./Filmes.css";
import Modal from './Modal';
import { Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { BiSearchAlt } from "react-icons/bi";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import {Button} from "react-bootstrap";
import api from '../../services/api';

function Filmes() {

    const [openModal, setOpenModal] = useState(false);
    const [filmes, setFilmes] = useState([]);
    const [filmeAtual, setFilmeAtual] = useState({});

    async function getFilme(){
        try {
            const response = await api.get("/filmes");
            setFilmes(response.data);
            console.log(response.data);
        } catch (error) {
            console.warn(error);
        }
    }

    useEffect(() => {
        getFilme();
    },[]);

    console.log(filmes);

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
                    <div className = "boxFilmesWrapper">
                        {filmes.map((filme)=>(
                            <Button variant="link" onClick={() => {
                                setFilmeAtual(filme)
                                setOpenModal(true)
                            }}  className = "boxFilmeC1">
                                <img className = "interistelar1" src = {filme.imagem} alt = {filme.nome} />
                            </Button>
                        ))}
                        {/* <Button variant="link" onClick={() => setOpenModal(true)}  className = "boxFilmeC1"><img className = "interistelar1" src = "/images/interistelar.png" alt =" interistelar1" /></Button>
                        <Button variant="link" onClick={() => setOpenModal(true)}  className = "boxFilmeC1"><img className = "topgun" src = "/images/topgun.png" alt =" topgun" /></Button>
                        <Button variant="link" onClick={() => setOpenModal(true)}  className = "boxFilmeC1"><img className = "deltaforce" src = "/images/deltaforce.png" alt =" deltaforce" /></Button>
                        <Button variant ='link' onClick={() => setOpenModal(true)}  className = "boxFilmeC1"><img className = "minhamae" src = "/images/minhamae.png" alt =" minhmae" /></Button>
                        <Button variant ='link' onClick={() => setOpenModal(true)}  className = "boxFilmeC1"><img className = "auto" src = "/images/auto.png" alt =" auto" /></Button>
                        <Button variant ='link' onClick={() => setOpenModal(true)}  className = "boxFilmeC1"><img className = "ace" src = "/images/ace.png" alt =" ace" /></Button> */}
                        <Modal filme={filmeAtual} open={openModal} onClose={() => setOpenModal(false)} />
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