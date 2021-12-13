import { Component } from "react";
import { connect } from "react-redux";
import { login } from "../Actions/authUserActions";
import { FormControl, Select, MenuItem, Typography } from "@mui/material";
import HomePage from "./HomePage";


class Login extends Component {
    state = {
        loggedin: false
    }
    render() {
        //const name = this.props.user
        //const allUsers = this.props.userIds

        if (this.state.loggedin === false) {

            return (
                    <div className='center'>
                        <Typography variant="h3" component="div">
                            Welcome to Would you rather!
                        </Typography >
                        <Typography variant="h9" component="div">
                            Please select your account to login
                        </Typography >
                        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.props.authUserId}
                                onChange={this.handleLogin}
                            >
                                <MenuItem disabled={true}>
                                    please select your account
                                </MenuItem >
                                {this.props.allUsers.map((id) => (
                                    <MenuItem
                                        value={id}
                                        key={id}
                                    >
                                        {this.props.users[id].name}
                                    </MenuItem >
                                ))}
                            </Select>
                        </FormControl>
                    </div>
            )
        }
        else{
            return(<HomePage />)
        }
    }

    handleLogin = (event) => {
        const authUser = event.target.value
        console.log('target: ', authUser)
        this.login(authUser)
    }

    login = (authUserId) => {
        const { dispatch } = this.props;
        console.log('authID: ', authUserId)
        dispatch(login(authUserId))
    }

}
function mapStateToProps({ authUser, users }) {
    const user = users[authUser]
    return {
        allUsers: Object.keys(users),
        users,
        user
    }

}

export default connect(mapStateToProps)(Login)