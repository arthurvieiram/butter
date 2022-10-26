import React from "react";
import "./Inicio.css"

function Inicio() {

    return (
        <div className="baseInicio">
            <div className="textosInicio">
                
                <h1 className="tituloInicio"> Inicio </h1>
                <h4 className="texto1"> Temos o compromisso de entregar qualidade ao manter o profissionalismo em um trabalho mais eficiente! </h4>
                <h5 className="texto2"> A Butter é uma empresa de universitários que estão em busca de colocar seus conhecimentos em prática, visando a entrega de um serviço de streaming excepcional. </h5>
            </div>
            
            <h1 className="tituloMaisAssistidos"> Filmes mais assistidos </h1>
            <div className ="maisAssistidos">
                    <div className="boxMA1"></div>
                    <div className="boxMA2"></div>
                    <div className="boxMA3"></div>
            </div>
        </div>
    )
}

export default Inicio;