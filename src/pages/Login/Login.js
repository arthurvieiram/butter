import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import "./Login.css";
import api from "../../services/api";

function Login() {

    const [test, setTest] = useState();
    
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const history = useHistory();

    async function login(e) {
        e.preventDefault();
        try {
            const response = await api.post('/login', {email, senha});
            setTest(response.data);
            alert("Bem-vindo à Butter", response.test?.nome);
            console.log(response);
            console.log(test);
            history.push("inicio");

        } catch (error) {
            if(error.response.status === 403) {
                alert("Endereço de email e/ou senha inválido(s)!");
            }

            else {
                alert(error.response.data.notification);
            }
            console.warn(error);
        }
    }

    return (
        <div className = "baseLogin">

            <div className = "paginaLogin">

            <div className="boxHeaderLogin">
                <img className = "logoButter" src = "/images/logo_butter.png" alt =" logo_butter" />      
            </div>

            <div className = "login">
                    <div className = "boxLogin">
                    <Form className = "inputsLogin">
                        
                        <h1 className = "entrar"> Entrar </h1>

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
                            onChange = {(e) => setSenha(e.target.value)} />
                        </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <div className = "componentes">
                                <Form.Check type="checkbox" label="Lembrar de mim"/>
                                <Link to="cadastro" className="esqueceusenha"> Esqueceu sua senha? </Link>
                            </div>
                            </Form.Group>

                        <Button variant="secondary" onClick = {(login)}> Entrar </Button>
                        
                    </Form>

                    <Link to="cadastro" className="cadastrar"> Novo por aqui? Cadastre-se e assista a filmes agora! </Link>

                    </div>

                </div>
            </div>

            <div className="boxFooterLogin">
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

export default Login;
