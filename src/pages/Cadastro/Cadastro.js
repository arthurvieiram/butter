import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import "./Cadastro.css";
import api from "../../services/api";

function Cadastro() {

    const[nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [locUsuario, setLocUsuario] = useState({
        pais: "", 
        estado: "", 
        endcompleto: "",
    });

    const history = useHistory();

    // async function cadastrar(e) {
    //     e.preventDefault();
    //     if(senha === confsenha){
    //         try {
    //         console.log(nome, cpf, senha, email, telefone, endereco);
    //         const response = await api.post("/usuarios", {nome, cpf, senha, email, telefone, endereco});
            
    //         alert("Cadastrado");
    //         cadastro(response.data.accessToken);
    //         history.push("/home");
    //         } catch (error) {
    //         console.log("deu erro");
    //         console.warn(error);
    //         alert(error.message);
    //         }
    //     }else{
    //         alert("Senhas não são iguais.");
    //     }
    // }

    async function createUser(e) {
        e.preventDefault();
        try {
            const endereco = `${locUsuario.pais},${locUsuario.estado},${locUsuario.endcompleto}`;
            const response = await api.post('/users', {nome, email, senha, endereco});
            alert(`Bem-vindo à Butter, ${response.data.nome}`);
            history.push("login");

        } catch (error) {
            if(error?.response?.status === 403) {
                alert("Endereço de email e/ou senha inválido(s)!");
            }

            else {
                alert(error?.response?.data?.notification);
            }
            console.warn(error);
        }
    }

    // function cadastrar() {
    //     console.log(locUsuario);
    //     history.push("inicio");
    // }

    function handleChange(e) {
        const {name, value} = e.target;
        console.log(locUsuario);
        return setLocUsuario({...locUsuario, [name]:value})
    }

    return (
        <div className = "baseCadastro">

            <div className="boxHeaderCadastro">
            <img className = "logoButter" src = "/images/logo_butter.png" alt =" logo_butter" />
                
                {/* <div className = "botoesInicioFilmes">
                    <Link to="Inicio" className="acessoInicio"> Início </Link>
                    <Link to="Filmes" className="acessoFilmes"> Filmes </Link>
                </div>
                    
                    <div className="botoesAcessoUsuario">
                        <Link to="Filmes" className="acessoFilmes"> <BiSearchAlt /> </Link>
                        <Link to="Perfil" className="acessoPerfil"> <CgProfile /> </Link>
                        <Link to="Login" className="logOut"> <TbLogout /> </Link>
                    </div> */}
            </div>

            <div className = "paginaCadastro">
                <div className = "cadastro">
                    
                    <div className = "boxCadastro">
                    
                    <h1 className = "cadastroTitulo"> Cadastro </h1>
                    
                    <Form className = "inputsCadastro">
                        <h6 className = "dadosgerais"> Dados gerais </h6>

                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Control 
                            type="nome" 
                            placeholder="Nome completo" 
                            onChange = {(e) => setNome(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control 
                            type="email" 
                            placeholder="Endereço de email" 
                            onChange = {(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="senha">
                            <Form.Control 
                            type="password" 
                            placeholder="Senha" 
                            onChange = {(e) => setSenha(e.target.value)}/>
                        </Form.Group>

                        <h6 className = "endereço"> Endereço </h6>

                        <Form.Group className="mb-3" controlId="pais">
                            <Form.Control 
                            type="text" 
                            name="pais"
                            placeholder="País" 
                            onChange = {handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="estado">
                            <Form.Control 
                            type="text"
                            name="estado" 
                            placeholder="Estado" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="endereço">
                            <Form.Control 
                            type="text"
                            name="endcompleto" 
                            placeholder="Endereço completo" 
                            />
                        </Form.Group>

                        <Button variant="secondary" onClick = {(createUser)}> Cadastrar </Button>

                        <Link to="login" className="cadastrado"> Já possui uma conta? Entre agora! </Link>
                        
                    </Form>

                    </div>

                </div>

            </div>

            <div className="boxFooterCadastro">
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

export default Cadastro;