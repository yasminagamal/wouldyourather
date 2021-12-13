import { addAnswerToQuestion, loadAllQuestions, addNewQuestion } from "./questionsActions"
import { loadAllUsers, userAddsQuestion } from "./usersActions"
import { _getQuestions, _getUsers, _saveQuestionAnswer, _saveQuestion } from "../_DATA"



export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function loadDataFromAPI() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(loadAllUsers(users))
        dispatch(loadAllQuestions(questions))
      })
  }
}


export function handleAddQuestion(optionOneText, optionTwoText, author){
  return(dispatch) => {
    saveQuestion({
      optionOneText,
      optionTwoText,
      author
    }).then((question) => {
      dispatch(addNewQuestion(question))
      dispatch(userAddsQuestion(question))
    })
  }
}

export function addAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then(() => {
      dispatch(addAnswerToQuestion({ authedUser, qid, answer }))
      dispatch(addAnswerToQuestion({ authedUser, qid, answer }))
    })
  }
}

export function saveQuestion(info) {
  return _saveQuestion(info)
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info)
}
