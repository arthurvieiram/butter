import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css"

function Login() {

    return (
        <div className = "base">
            <div className = "container">
                <div>
                    <h1> Entrar </h1>
                    <Form className = "inputs">
                        
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control type="email" placeholder="Endereço de email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="senha">
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Lembrar de mim" />
                        </Form.Group>

                        <Button variant="secondary"> Entrar </Button>

                    </Form>
                </div>
        </div>
    </div>
    )
    
}

export default Login;
