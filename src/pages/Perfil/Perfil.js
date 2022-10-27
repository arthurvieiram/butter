import React from "react";
import "./Perfil.css"

function Perfil() {
    return (
        <div className = "basePerfil">
            <div className = "paginaPerfil">
                <div className = "Usuario">
                    <div className = "boxUsuario"></div>
                    <h1 className = "nomeUsuario"> Nome </h1>
                    <div className = "dadosUsuario">
                        <h2 className = "idade"> Idade </h2>
                        <h2 className = "email"> Email </h2>
                        <h2 className = "endereco"> Endereço completo </h2>
                    </div>
                </div>

                <div className = "filmesFavoritados">
                    <h1 className = "tituloFilmesFav"> Filmes Favoritados </h1>
                    <h4 className = "verTodos"> Ver todos </h4>
                    <div className="boxFavoritosWrapper">
                            <div className = "boxFV1"></div>
                            <div className = "boxFV2"></div>
                            <div className = "boxFV3"></div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil;