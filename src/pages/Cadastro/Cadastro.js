import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Cadastro.css"

function Cadastro() {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    return (
        <div className = "base">
                <div className = "cadastro">
                    <div className = "box">
                    <Form className = "inputs">
                        
                        <h1 className = "cadastrar"> Cadastrar </h1>

                        <h6 className = "dados_gerais"> Dados dados gerais </h6>

                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Control 
                            type="nome" 
                            placeholder="Nome completo" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control 
                            type="email" 
                            placeholder="Endereço de email" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="senha">
                            <Form.Control 
                            type="password" 
                            placeholder="Senha" 
                            />
                        </Form.Group>

                        <h6 className = "endereço"> Endereço </h6>

                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Control 
                            type="nome" 
                            placeholder="Nome completo" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control 
                            type="email" 
                            placeholder="Endereço de email" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="senha">
                            <Form.Control 
                            type="password" 
                            placeholder="Senha" 
                            />
                        </Form.Group>


                        
                    </Form>

                    </div>

                </div>
    </div>
    )

}

export default Cadastro;