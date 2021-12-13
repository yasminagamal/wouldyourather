import { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { logout } from "../Actions/authUserActions";


class NavigationTab extends Component {
    

    render() {
        //const user = this.props
        //const loggedIn = !!user ? true : false

        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div>
                    <div>
                        <div>
                            <Link className='navbar-brand' to='/'>Home</Link>
                        </div>
                        <div>
                            <Link className='navbar-brand' to='newquestion' >Add Question</Link>
                        </div>
                        <div>
                            <Link className='navbar-brand' to='leaderboard'>LeaderBoard</Link>
                        </div>
                        <div>
                            <p>{this.props.user.name}</p>
                            <Link className='navbar-brand' to='/' onClick={this.handleLogout}>LogOut</Link>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
    handleLogout = () => {
        console.log(this.props.authUser)
        this.props.dispatch(logout())
        console.log(this.props.authUser)
    }
}
function mapStateToProps({ authUser, users }) {

    const user = users[authUser]
    return {
        user
    }
}

export default connect(mapStateToProps)(NavigationTab)