export const LOAD_ALL_USERS = 'LOAD_ALL_USERS'
export const USER_ADDS_ANSWER = 'USER_ADDS_ANSWER'
export const USER_ADDS_QUESTION = 'USER_ADDS_QUESTION'

export function loadAllUsers(users) {
    return {
        type: LOAD_ALL_USERS,
        users
    }
}

export function userAddsAnswer(answer){
    return{
        type: USER_ADDS_ANSWER,
        answer
    }
}

export function userAddsQuestion(question){
    return{
        type: USER_ADDS_QUESTION,
        question
    }
}