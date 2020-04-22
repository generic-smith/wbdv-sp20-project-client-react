import React from "react";
import "../ViewerProfile/Styling.css"
import {connect} from "react-redux";
import userService from "../../services/UserService";
import {findUserByUsername, updateUser} from "../../actions/userActions";

class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password:'',
            userType: '',
            confirmed:'',
            update: false,
            viewOnly: false
        }

    }


    componentDidMount() {
        userService.profileRetrieve().then(response => {
            if (Object.keys(response).length === 0 && this.props.username === "") {
                this.props.history.push("/home")
            }
            else if (this.props.username !== response.username && this.props.username !== "") {
                this.setState({viewOnly: true})
            }
            else if (this.props.username === "") {
                this.props.username = response.username;
            }
        });
        this.props.findUserByUsername(this.props.username);
        userService.findUserByUsername(this.props.username).then(response => {
            this.setState({password: response.password, userType: (response.userType !== null) ? response.userType : 'User',
            confirmed: response.password})
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.update){
            {/** leave it here for now to refresh the whole page after user updates information**/}
            window.location.reload();
         // this.props.findUserByUsername(this.props.username);
         //    this.setState({update: false})
        }

    }

    goBack = () => {
        this.props.history.push(`/home`);
    };


    setUpdate() {
        this.setState(prevState => ({
            update: !prevState.update
        }))
    }

    logOut(){
        this.props.history.push(`/login`)
    }

    render() {
        return (
            <div className={"container"}>

                <div className={"d-flex"}>
                <button className="btn btn-danger mt-2 mb-2 mr-2" onClick={this.goBack}><i className="fa fa-arrow-left"></i>
                </button>
                <h1><b>Profile</b></h1>
                </div>
            <hr/>
                <div className={"form-group"}>
                    <div className={"profile-username form-inline"}>
                    <h5 >Username</h5>
                    <input className={"form-control col-5 form-username"} readOnly
                    value={this.props.username}/>
                    </div>
                    {!this.state.viewOnly && <div className={"profile-password form-inline"}>
                        <h5>Password</h5>
                        <input type="password" className={"form-control col-5 form-password"}
                               value={this.state.password}
                        onChange={(e) => {
                            this.setState({password: e.target.value })
                        }}/>
                    </div>}
                    {!this.state.viewOnly && <div className={"profile-confirmed-password form-inline"}>
                        <h5 >Verify Password</h5>
                        <input type={"password"} className={"form-control col-5 form-confirmed"}
                               value={this.state.confirmed}
                               onChange={(e) => this.setState({confirmed: e.target.value})}/>
                        {this.state.password !== '' && this.state.password === this.state.confirmed &&
                        <div className={"alert alert-success match-alert"} role={"alert"}>
                            Password matched
                        </div>}
                        {this.state.confirmed !== '' && this.state.password !== this.state.confirmed &&
                        <div className="alert alert-danger match-alert" role="alert">
                            Password does not match
                        </div>}
                    </div>}
                    <div className={"profile-type form-inline"}>
                        <h5>User Type</h5>
                        <select className={"form-control form-type col-3"}
                                value={this.state.userType}
                        onChange={(e) => this.setState({userType: e.target.value})}>
                            <option value={"User"}>User</option>
                            <option value={"Advertiser"}>Advertiser</option>
                            <option value={"Admin"} hidden={true}>Admin</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-success btn-lg btn-block profile-update"
                    onClick={() => {
                        if(this.state.password === this.state.confirmed && this.state.password !== ""){
                                this.props.updateUser(this.props.user.id, {...this.props.user, password: this.state.password, userType: this.state.userType})
                                    .then(() => this.setUpdate())
                                    .then(() => alert("Successfully Updated!"));

                            }
                        else if(this.state.confirmed === ''){
                            alert("Please verify your password")
                        }
                        else{
                            alert("Password not matched, update failed")
                        }

                    }}>Update</button>
                    <button type="button" className="btn btn-danger btn-lg btn-block profile-cancel"
                    onClick={() => this.logOut()}>Log Out</button>
                </div>
            </div>
        )
    }

}
const stateToPropertyMapper = (state) => {
    return {
        user: state.user.user
    }
}
const dispatchToPropertyMapper = (dispatch) => ({
        updateUser: (uid, user) =>
            userService.updateUser(uid, user)
                .then(user => dispatch(updateUser(user))),
        findUserByUsername: (username) =>
            userService.findUserByUsername(username)
                .then(user => dispatch(findUserByUsername(user)))
})

export default connect(stateToPropertyMapper,
    dispatchToPropertyMapper)
(ProfileComponent)
