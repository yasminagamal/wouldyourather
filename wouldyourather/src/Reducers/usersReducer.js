import { LOAD_ALL_USERS, USER_ADDS_ANSWER, USER_ADDS_QUESTION } from "../Actions/usersActions";

export function users(state = {}, action) {
    switch (action.type) {
        case LOAD_ALL_USERS:
            return {
                ...state,
                ...action.users
            }
        case USER_ADDS_ANSWER:
            return {
                ...state,
                ...action.answer
            }
        case USER_ADDS_QUESTION:
            return {
                ...state,
                ...action.question
            }
        default:
            return state
    }
}