import { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from '../Actions/actions_index';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        questionSubmitted: false
    }

    handleOptionOne = (event) => {
        this.setState({
            optionOneText: event.target.value
        })
        console.log('o1: ', this.state.optionOneText)
    }

    handleOptionTwo = (event) => {
        this.setState({
            optionTwoText: event.target.value
        })
        console.log('o2: ', this.state.optionTwoText)
    }

    handleQuestionSubmit = () => {
        const { dispatch, author } = this.props;
        const { optionOneText, optionTwoText } = this.state
        console.log('variables to be submitted: ', optionOneText, optionTwoText, author)
        dispatch(handleAddQuestion(optionOneText, optionTwoText, author))
        this.setState({
            questionSubmitted: true
        })
    }

    render() {
        if (this.state.questionSubmitted === true) {
            return <div>
                <Alert severity="success">Your new question is posted! Go back to
                    <Link className='navbar-brand' to={'/'}>HomePage</Link>
                </Alert>
            </div>
        }
        return (
            <div>
                <div className='card'>
                    <div className='card-header'>
                        Add a new question:
                    </div>
                    <div className='card-body'>
                        <form className='new-tweet' onSubmit={this.handleQuestionSubmit}>
                            <div className='form-group'>
                                <label>
                                    Option One
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.optionOneText}
                                    onChange={this.handleOptionOne}
                                />
                            </div>
                            <div className='form-group'>
                                <label>
                                    Option Two
                                </label>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.optionTwoText}
                                    onChange={this.handleOptionTwo}
                                />
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary'
                                disabled={(this.state.optionOneText === '' || this.state.optionTwoText === '')}>
                                Submit question
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps({ authUser }) {
    return { author: authUser }
}

export default connect(mapStateToProps)(NewQuestion)