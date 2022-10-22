import React from "react";
import { useHistory } from "react-router-dom";

function Inicio() {

    const history = useHistory();

    return (
        <div>
            <h1> Inicio </h1>
            <button onClick={() => 
                {history.push("login")} 
            } 
            > 
                Login
            </button>
        </div>
    )
}

export default Inicio;