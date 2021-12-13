import { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
    render() {
        // const currentUser = this.props.userIds.filter((id) => (this.props.users[id].id === this.props.authUser))
        // const me = currentUser[0]
        return (
            <div>
                {console.log('users ranked: ', this.props.usersRanked, 'all users: ', this.props.users)}
                {this.props.usersRanked.map((username) =>
                    <span className="border" key={username}>
                        <div className="card-deck">
                            <div className="card">
                                <img className="card-img-top" src={this.props.users[username].avatarURL} alt='' />
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.users[username].name}</h5>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Questions Answered: {(Object.keys(this.props.users[username].answers)).length}</h5>
                                </div><div className="card-body">
                                    <h5 className="card-title">Questions Asked: {(Object.keys(this.props.users[username].questions)).length}</h5>
                                </div>
                            </div>
                            <h1>{this.props.users[username].name + '\'s '}<span className="badge badge-secondary">Score: {((Object.keys(this.props.users[username].answers)).length) + ((Object.keys(this.props.users[username].questions)).length)}</span></h1>

                        </div>
                    </span>
                )
                }
            </div>
        )
    }
}
function mapStateToProps({ authUser, users }) {
    const userIds = Object.keys(users);
    const usersRanked = userIds.sort((x, y) => (Object.keys(users[y].answers).length + users[y].questions.length) - (Object.keys(users[x].answers).length + users[x].questions.length));
    return {
        userIds,
        users,
        usersRanked,
        authUser
    }

}

export default connect(mapStateToProps)(Leaderboard)