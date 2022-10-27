import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Cadastro.css"

function Cadastro() {

    const[nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [locUsuario, setLocUsuario] = useState({
        pais: "", 
        estado: "", 
        endcompleto: "",
    });

    const history = useHistory();

    function cadastrar() {
        console.log(locUsuario);
        history.push("inicio");
    }

    function handleChange(e) {
        const {name, value} = e.target;
        console.log(locUsuario);
        return setLocUsuario({...locUsuario, [name]:value})
    }

    return (
        <div className = "baseCadastro">
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
                            onChange = {(e) => setPassword(e.target.value)}/>
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

                        <Button variant="secondary" onClick = {(cadastrar)}> Cadastrar </Button>

                        <Link to="login" className="cadastrado"> Possui cadastro ? </Link>
                        
                    </Form>

                    </div>

                </div>
    </div>
    )

}

export default Cadastro;