import { Component } from "react";
import { connect } from "react-redux";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { addAnswer } from "../Actions/actions_index";
import ErrorPage from "./ErrorPage";



class QuestionCard extends Component {

    state = {
        answer: ''
    }

    handleAnswerChange = (event) => {
        console.log('selected answer - before: ', event.target.value);
        this.setState({ answer: event.target.value })
        console.log('selected answer - after: ', this.state);
    }
    handleAnswerSubmit = (event) => {
        event.preventDefault()
        this.setState({ answer: event.target.value })
        console.log('items sent: ', this.props.authUser, this.props.qid, this.state.answer)
        this.props.dispatch(addAnswer(this.props.authUser, this.props.qid, this.state.answer))
    }
    render() {

        const { question } = this.props;
        if (this.props.trueQuestion === true) {
            const votesQuestion1 = question.optionOne.votes.length;
            const votesQuestion2 = question.optionTwo.votes.length;
            const amountOfAnswers = votesQuestion1 + votesQuestion2;
            const percentageQuestion1 = votesQuestion1 === 0 ? 0 : Math.round((votesQuestion1 / amountOfAnswers) * 100);
            const percentageQuestion2 = votesQuestion2 === 0 ? 0 : Math.round((votesQuestion2 / amountOfAnswers) * 100);
            const barOptionOne = `${percentageQuestion1}%`
            const barOptionTwo = `${percentageQuestion2}%`

            return (
                <div key={this.props.question.id} className='card border-primary mb-3'>
                    <div>
                        {!this.props.answeredQuestions ?
                            <div>
                                <img src={this.props.author.avatarURL} alt='' />
                                <form onSubmit={this.handleAnswerSubmit}>
                                    <h5 className='card-title'>Would you rather ?</h5>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type='radio'
                                            id='optionOne'
                                            value='optionOne'
                                            onChange={this.handleAnswerChange}>
                                        </input>
                                        <label>
                                            {this.props.question.optionOne.text}
                                        </label>
                                        <input
                                            className="form-check-input"
                                            type='radio'
                                            id='optionTwo'
                                            value='optionTwo'
                                            onChange={this.handleAnswerChange}
                                        >
                                        </input>
                                        <label>
                                            {this.props.question.optionTwo.text}
                                        </label>
                                    </div>
                                    <button
                                        className='btn btn-info'
                                        type='submit'
                                        disabled={this.state.answer === ''}>Submit
                                    </button>
                                </form>
                            </div>
                            :
                            <Card variant="outlined" sx={{ width: '75%' }} >
                                <img src={this.props.author.avatarURL} alt='' />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        Would you rather
                                    </Typography>
                                    <Typography gutterBottom variant="body2" component="div" color="text.secondary">
                                        question by: {this.props.question.author}
                                    </Typography>
                                    <Typography variant="h7" component="div" >
                                        {this.props.question.optionOne.text}
                                    </Typography>
                                    {this.props.question.optionOne.votes.includes(this.props.authUser) ?
                                        <div>
                                            <Typography variant="h7" component="div" >
                                                You answered: {this.props.question.optionOne.text}
                                            </Typography> <Badge badgeContent={barOptionOne} color="secondary" />
                                        </div>
                                        : <div> <Typography variant="h7" component="div" >
                                            {this.props.question.optionOne.text}
                                        </Typography> <Badge badgeContent={barOptionOne} color="secondary" />
                                            <Badge badgeContent={barOptionOne} color="primary" /> </div>
                                    }

                                    {this.props.question.optionTwo.votes.includes(this.props.authUser) ?
                                        <div>
                                            <Typography variant="h7" component="div" >
                                                You answered: {this.props.question.optionTwo.text}
                                            </Typography> <Badge badgeContent={barOptionTwo} color="secondary" />
                                        </div>
                                        : <div> <Typography variant="h7" component="div" >
                                            {this.props.question.optionTwo.text}
                                        </Typography> <Badge badgeContent={barOptionTwo} color="secondary" />
                                            <Badge badgeContent={barOptionTwo} color="primary" /> </div>
                                    }
                                </CardContent>
                            </Card>
                        }

                        <Link className='btn btn-info' to='/'>Go back</Link>
                    </div>
                </div>
            )
        }
        else {
            return (<ErrorPage />)
        }
    }
}

function mapStateToProps({ authUser, users, questions }, props) {
    const qid = props.match.params.id;
    const question = questions[qid];
    const author = users[question.author];
    const trueQuestion = question ? true : false;
    const answeredQuestions = !!question ? (question.optionOne.votes.includes(authUser) || question.optionTwo.votes.includes(authUser)) : false;
    const questionResults = answeredQuestions ? (question.optionOne.votes.includes(authUser) ? 'optionOne' : 'optionTwo') : null;

    return {
        user: users,
        qIds: Object.keys(questions),
        qid,
        authUser,
        question,
        trueQuestion,
        answeredQuestions,
        questionResults,
        author

    }
}
export default connect(mapStateToProps)(QuestionCard)