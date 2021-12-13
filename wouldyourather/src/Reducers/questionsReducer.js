import { ADD_ANSWER_TO_QUESTION, ADD_NEW_QUESTION, LOAD_ALL_QUESTIONS } from "../Actions/questionsActions";

export function questions(state = {}, action) {
    switch (action.type) {
        case LOAD_ALL_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_ANSWER_TO_QUESTION:
            return {
                ...state,           
                [action.answer.qid]: {
                    ...state[action.answer.qid],
                    [action.answer.answer]: {
                        ...state[action.answer.qid][action.answer.answer],
                        votes: state[action.answer.qid][action.answer.answer].votes.concat([action.answer.authedUser])
                    }
                }
            }

        case ADD_NEW_QUESTION:
            return {
                ...state,
                [action.newQuestion.id]: action.newQuestion
            }
        default:
            return state
    }
}