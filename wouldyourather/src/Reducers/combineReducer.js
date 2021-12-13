import { combineReducers } from 'redux'
import authUser from './authUserReducer'
import { questions } from './questionsReducer'
import { users } from './usersReducer'

export default combineReducers(
    {
        users,
        questions,
        authUser
    }
)