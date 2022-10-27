import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Login.css"

function Login() {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    function login() {
        history.push("inicio")
    }

    return (
        <div className = "baseLogin">

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
                            onChange = {(e) => setPassword(e.target.value)} />
                        </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <div className = "componentes">
                                <Form.Check type="checkbox" label="Lembrar de mim" />
                                <Link to="cadastro" className="esqueceusenha"> Esqueceu sua senha? </Link>
                            </div>
                            </Form.Group>

                        <Button variant="secondary" onClick = {(login)}> Entrar </Button>
                        
                    </Form>

                    <Link to="cadastro" className="cadastrar"> Novo por aqui? Cadastre-se e assista a filmes agora! </Link>

                    </div>

                </div>
    </div>
    )
}

export default Login;
