import React from "react";
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";
import userService from "../../services/UserService"
import {loginUser} from "../../actions/userActions";
import {connect} from "react-redux";
import { useHistory } from 'react-router-dom';

class LoginPageComponent extends React.Component {

    state = {
        username: "",
        password: ""
    }


    render() {
        return (
            <div className="container">
                <h1>Sign In</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="username"
                                   value={this.state.username}
                                   placeholder="Sean" onChange={e => {
                                       console.log(this.props.user)
                                const user = e.target.value
                                this.setState(ps => ({
                                    ...ps,
                                    username: user}))
                            }} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-field wbdv-password"
                                   id="password" value={this.state.password}
                                   placeholder="123qwe#$%"
                                   onChange={e => {
                                       const pass = e.target.value
                                       this.setState(ps => ({
                                           ...ps,
                                           password: pass}))}}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button type="button" className="btn btn-primary btn-block wbdv-login" onClick={() => this.props.login(this.state)}>Sign in</button>
                        </div>
                        <label className="col-sm-2 col-form-label"></label>
                        <label className="col-sm-10" id="signUp">
                            <Link to="/register">Sign Up</Link>
                            {/*
                            <a href="http://localhost:8080/register/register.template.client.html"
                               className="float-right">Cancel</a>
                               */}
                        </label>

                    </div>
                </form>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    user: state.user.user
})

const dispatcherToPropertyMapper = (dispatch) => ({
    login: (user) =>
        userService.loginUser(user)
            .then(response => dispatch(loginUser(response)))
})

export default connect(stateToPropertyMapper,
    dispatcherToPropertyMapper)
(LoginPageComponent)
