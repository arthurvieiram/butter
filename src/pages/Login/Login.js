import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css"

function Login() {
    return (
        <div className = "base">
            <div className = "container">
                <Form>
                    <h1> Entrar </h1>
                    <div className = "inputs">
                    <input></input>
                    <input></input>
                    </div>
                    <button> Entrar </button>
                    </div>
                </Form>
        </div>
    </div>
    )
}

export default Login;
