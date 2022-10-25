import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css"

function Login() {

    return (
        <div className = "base">
                <div className = "login">
                    <div className = "box">
                    <Form className = "inputs">
                        
                        <h1 className = "entrar"> Entrar </h1>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control type="email" placeholder="Endereço de email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="senha">
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <div className = "componentes">
                                <Form.Check type="checkbox" label="Lembrar de mim" />
                                <Link to="cadastro" className="esqueceusenha"> Esqueceu sua senha? </Link>
                            </div>
                            </Form.Group>

                        <Button variant="secondary"> Entrar </Button>
                        
                    </Form>

                    <Link to="cadastro" className="cadastrar"> Novo por aqui? Cadastre-se e assista a filmes agora! </Link>

                    </div>

                </div>
    </div>
    )

}

export default Login;
