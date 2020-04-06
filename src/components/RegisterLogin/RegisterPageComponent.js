import React, {useState} from "react";
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";
import userService from "../../services/UserService"
import {createUser} from "../../actions/userActions";
import {connect} from "react-redux";
import Alert from 'react-bootstrap/Alert'

const ErrorMessage = (msg) => {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Registration Failed</Alert.Heading>
                <p>
                    {msg.msg}
                </p>
            </Alert>
        );
    }
    return <div/>
}

function SuccessMessage(msg) {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <Alert variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Registration Success</Alert.Heading>
                <p>
                    {msg.msg}
                </p>
            </Alert>
        );
    }
    return <div/>
}

class RegisterPageComponent extends React.Component {

    state = {
        user: {username: "", password: ""},
        pass1: "",
        pass2: "",
        passNotMatch: false
    };


    refresh = () => {
        if (this.props.registerSuccess === 1) {
            this.setState(prevstate => ({
                ...prevstate,
                pass1: "",
                pass2: "",
                user: {password: "", username: ""}}))
        }
        else {
            this.setState(prevstate => ({
                ...prevstate,
                user: {...prevstate.user, username: ""}}))
        }
    }

    verifyAndSend = () => {
        if (this.state.pass1 !== this.state.pass2 || (this.state.pass1 === "")) {
            this.setState({passNotMatch: true})
        } else {
            this.setState(prevstate => ({
                ...prevstate,
                user: {...prevstate.user, password: prevstate.pass1}
            }), () => this.props.createUser(this.state.user).then(this.refresh));
        }
    }


    render() {

        return (
            <div className="container">
                {this.state.passNotMatch && <ErrorMessage msg="The two passwords do not match or one of them is empty"/>}
                {this.props.registerSuccess === 0 && <ErrorMessage msg="Account with that username already exists"/>}
                {this.props.registerSuccess === 1 && <SuccessMessage msg="Account successfully registered"/>}
                <h1>Register</h1>
                <form>
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-2 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-username"
                                   id="usernameFld"
                                   placeholder="Pikachu"
                                   value={this.state.user.username}
                                   onChange={e => {
                                       const newUser = e.target.value
                                       this.setState(ps => ({
                                           ...ps,
                                           user: {...ps.user, username: newUser}}))
                                   }}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-2 col-form-label" >
                            Password
                        </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-field wbdv-password"
                                   id="passwordFld" placeholder="123qwe#$%"
                                   value={this.state.pass1}
                                   onChange={e => {
                                       const pass1 = e.target.value
                                       this.setState(ps => ({
                                           ...ps,
                                           pass1: pass1}))
                                   }}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-2 col-form-label">
                            Verify Password
                        </label>
                        <div className="col-sm-10">
                            <input type="password"
                                   value={this.state.pass2}
                                   onChange={e => {
                                const pass2 = e.target.value
                                this.setState(ps => ({
                                    ...ps,
                                    pass2: pass2}))
                            }} className="form-control wbdv-field wbdv-password"
                                   id="verifyPasswordFld" placeholder="123qwe#$%"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button type={"button"} className="btn btn-primary btn-block wbdv-login" id="registerBtn"
                                    onClick={this.verifyAndSend}>Register?</button>
                        </div>
                    </div>
                    <Link to="/login"> Login </Link>
                </form>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    registerSuccess: state.user.registerSuccess
})

const dispatcherToPropertyMapper = (dispatch) => ({
    createUser: (user) =>
        userService.createUser(user)
            .then(response => dispatch(createUser(response)))
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(RegisterPageComponent)
