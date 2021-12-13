export const LOAD_ALL_QUESTIONS = 'LOAD_ALL_QUESTIONS'
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION'

export function loadAllQuestions(questions) {
    return {
        type: LOAD_ALL_QUESTIONS,
        questions
    }
}

export function addNewQuestion(newQuestion) {
    return {
        type: ADD_NEW_QUESTION,
        newQuestion
    }
}

export function addAnswerToQuestion(answer) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        answer
    }
}