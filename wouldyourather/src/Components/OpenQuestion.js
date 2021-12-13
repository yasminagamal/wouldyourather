import { Component } from 'react';
import { connect } from 'react-redux';

class OpenQuestion extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}
function mapStateToProps({ authUser, questions, users }) {
    const user = users
    const qIds = Object.keys(questions)
    const UnAnsweredQuestions = Object.values(questions).filter((question) =>
        !question.optionOne.votes.includes(authUser) && !question.optionTwo.votes.includes(authUser))
    const AnsweredQuestions = Object.values(questions).filter((question) =>
        question.optionOne.votes.includes(authUser) || question.optionTwo.votes.includes(authUser))
    return {
        user,
        qIds,
        UnAnsweredQuestions,
        AnsweredQuestions,
        authUser
    }

}

export default connect(mapStateToProps)(OpenQuestion);