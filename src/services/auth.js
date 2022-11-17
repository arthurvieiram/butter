export const TOKEN_KEY = "@novobutter-Token";
export const USUARIO_ID = "user_id";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const getUsuario_id = () => sessionStorage.getItem(USUARIO_ID);


export const login = (token) => {
    sessionStorage.setItem(TOKEN_KEY, token.accessToken);
    sessionStorage.setItem(USUARIO_ID, token.user.user_id);
};
export const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USUARIO_ID);
};
export const cadastro = token => {
    sessionStorage.setItem(TOKEN_KEY, token);
};
