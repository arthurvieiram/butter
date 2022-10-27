import React from "react";
import "./Inicio.css"

function Inicio() {

    return (
        <div className="baseInicio">
            <div className="paginaInicio">

                <div className="textosInicio">
                
                    <h3 className="texto1"> Nosso compromisso com você é a entrega do melhor serviço de streaming ao manter o profissionalismo em um trabalho mais eficiente. Assista aos melhores filmes de onde e quando quiser! </h3>
                    <h4 className="texto2"> Somos uma empresa de universitários com o objetivo de aperfeiçoar a experiência de nossos usuários no universo digital. </h4>
                </div>
            
                <div className ="maisAssistidos">
                    <h1 className="tituloMaisAssistidos"> Filmes mais assistidos </h1>
                        <div className="boxMaisAssistidosWrapper">
                            <div className="boxMA1"></div>
                            <div className="boxMA2"></div>
                            <div className="boxMA3"></div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Inicio;