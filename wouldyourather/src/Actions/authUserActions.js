export const LOGIN = 'LOGIN' 
export const LOGOUT = 'LOGOUT'

export function login(authUserId){
    return{
        type: LOGIN,
        authUserId
    }
}

export function logout(){
    return{
        type: LOGOUT
    }
}