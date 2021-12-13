import { LOGIN, LOGOUT } from "../Actions/authUserActions";

export default function authUser(state = '', action) {
    switch (action.type) {

        case LOGIN:
            return action.authUserId

        case LOGOUT:
            return ''

        default:
            return state
    }
}