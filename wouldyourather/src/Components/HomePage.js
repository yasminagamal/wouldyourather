import { Component } from "react";
import { connect } from "react-redux";
import { ButtonGroup, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TimestampSort from "./TimestampSort";


class HomePage extends Component {
    state = {
        showAnswered: false,
        showUnanswered: true
    }
    switchquestions = (event) => {
        const showElement = event.target.getAttribute('value')
        if (showElement === 'showAnswered') {
            this.setState({
                showAnswered: true,
                showUnanswered: false
            })
        }
        else {
            this.setState({
                showAnswered: false,
                showUnanswered: true
            })
        }
        console.log('component state: ', this.state)
    }
    render() {
        return (
            <div>
                <ButtonGroup >
                    <Button variant="outlined" value="showUnanswered" onClick={this.switchquestions}>
                        Unanswered Questions
                    </Button>
                    <Button variant="outlined" value="showAnswered" onClick={this.switchquestions}>
                        Answered Questions
                    </Button>
                </ButtonGroup>
                {(this.props.UnAnsweredQuestions && this.state.showUnanswered === true) &&
                    <div>
                        <h2>Here are your unanswered questions</h2>
                        {this.props.UnAnsweredQuestions.map((question) => (
                            <div key={question.id} className='card border-primary mb-3'>
                                <Card variant="outlined" sx={{ width: '75%' }} >
                                <TimestampSort timestamp={question.timestamp}/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Would you rather
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" color="text.secondary">
                                            question by: {question.author}
                                        </Typography>
                                        <Typography variant="h7" component="div" >
                                            {question.optionOne.text}
                                        </Typography>
                                        <Typography variant="h7" component="div" >
                                            {question.optionTwo.text}
                                        </Typography>
                                        <Link className='btn btn-info' to={`/questions/${question.id}`}>Answer Question</Link>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                        )}

                    </div>}
                {!!this.UnAnsweredQuestions && <div>Congrats! You have answered all questions!</div>}

                {(this.props.AnsweredQuestions && this.state.showUnanswered === false) &&
                    <div>
                        <h2>Here are your answered questions</h2>
                        {this.props.AnsweredQuestions.map((question) => (
                            <div key={question.id}>
                                <Card variant="outlined" sx={{ width: '75%' }} >
                                <TimestampSort timestamp={question.timestamp}/>
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Would you rather
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div" color="text.secondary">
                                            question by: {question.author}
                                        </Typography>
                                        <Typography variant="h7" component="div" >
                                            {question.optionOne.text}
                                        </Typography>
                                        <Typography variant="h7" component="div" >
                                            {question.optionTwo.text}
                                        </Typography>
                                        <Link className='btn btn-info' to={`/questions/${question.id}`}>View Results</Link>
                                    </CardContent>
                                </Card>

                            </div>
                        )
                        )}

                    </div>}
            </div>
        )
    }
}

function mapStateToProps({ authUser, questions }) {
    const UnAnsweredQuestions = Object.values(questions).filter((question) =>
        !question.optionOne.votes.includes(authUser) && !question.optionTwo.votes.includes(authUser))
    const AnsweredQuestions = Object.values(questions).filter((question) =>
        question.optionOne.votes.includes(authUser) || question.optionTwo.votes.includes(authUser))
    return {
        UnAnsweredQuestions,
        AnsweredQuestions,
        questions: questions
    }
}

export default connect(mapStateToProps)(HomePage)