import React from "react";
import "./PaginaDeFilme.css"

function PaginaDeFilme() {

    return (   
        <div className="basePaginaDeFilme">
            <div className="imagem">
                <img className = "poster" src = "/images/interistelar.png" alt =" poster" />
            </div>

            <div className="outrasOpcoes">
                <div className="sair">
                
                </div>

                <div className="dadosWrapper">
                    <div className="dadoNome">

                    <h3 className="nome"> Interistelar</h3>
                    </div>

                    <div className="dadoDiretor"> 

                    <h3 className="diretor"> Christopher Nolan </h3>
                    </div>

                    <div className="dadoAno">

                    <h3 className="ano"> Ano de Estreia: 2014 </h3>
                    </div>
                </div>

                <div className="favoritar">
            
                </div>
            </div>
        </div>
    )
}

export default PaginaDeFilme;