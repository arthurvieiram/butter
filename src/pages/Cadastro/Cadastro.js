import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Cadastro.css"

function Cadastro() {

    const[nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    function cadastro() {
        history.push("inicio")
    }

    return (
        <div className = "base">
                <div className = "cadastro">
                    
                    <div className = "box">
                    
                    <h1 className = "cadastro"> Cadastro </h1>
                    
                    <Form className = "inputs">
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
                            onChange = {(e) => setPassword(e.target.value)}/>
                        </Form.Group>

                        <h6 className = "endereço"> Endereço </h6>

                        <Form.Group className="mb-3" controlId="pais">
                            <Form.Control 
                            type="pais" 
                            placeholder="País" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="uf">
                            <Form.Control 
                            type="uf" 
                            placeholder="Estado" 
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="endereço">
                            <Form.Control 
                            type="endereço" 
                            placeholder="Endereço completo" 
                            />
                        </Form.Group>

                        <Button variant="secondary" onClick = {(cadastro)}> Cadastrar </Button>
                        
                    </Form>

                    </div>

                </div>
    </div>
    )

}

export default Cadastro;