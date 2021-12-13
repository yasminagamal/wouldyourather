import '../App.css';
import { connect } from 'react-redux';
import { Component } from 'react';
import { loadDataFromAPI } from '../Actions/actions_index';
import NavigationTab from './NavigationTab';
import LoginComponent from './LoginComponent';
import HomePage from './HomePage';
import NewQuestion from './NewQuestion';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import Question from './Question';
import ErrorPage from './ErrorPage';



class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadDataFromAPI());
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          {console.log('userlogged? ', this.props.loggedUser)}
          {this.props.loggedUser !== '' &&
            <div>
              <NavigationTab />
              <div>
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/newquestion" exact component={NewQuestion} />
                  <Route path="/leaderboard" exact component={Leaderboard} />
                  <Route path="/questions/:id" exact component={Question} />
                  <Route path="/" exact component={LoginComponent} />
                  <Route component={ErrorPage} />
                </Switch>
              </div>
            </div>
          }
          {this.props.loggedUser === '' &&
            <LoginComponent />
          }
        </div>

      </BrowserRouter>

    );
  }
}

function mapStateToProps({ users, questions, authUser }) {
  return {
    users,
    getFromAPI: Object.keys(users).length > 0 && Object.keys(questions).length > 0,
    questions,
    loggedUser: authUser
  }
}
export default connect(mapStateToProps)(App)
