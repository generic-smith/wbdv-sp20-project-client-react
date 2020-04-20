import React from "react";
import UserService from "../../services/UserService";
import {deleteUser, findAllUsers, findUserByUsername, updateUser} from "../../actions/userActions";
import {connect} from "react-redux";
import "../ViewerProfile/Styling.css";
import "../../../node_modules/font-awesome/css/font-awesome.css"

class AdminPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            userType: '',
            editingUser: '',
            update: false,
            searchUsername: '',
            search: false,
            searchUser: []

        }
    }

    componentDidMount() {
        this.props.findAllUsers()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.update) {
            this.props.findAllUsers();
            this.setState({update: false})
        }


    }

    setUsername(username) {
        this.setState({username: username})
    }

    setPassword(password) {
        this.setState({password: password})
    }

    setUserType(type) {
        this.setState({userType: type})
    }

    edit(user) {
        this.setState({editingUser: user.id})
    }

    setUpdate() {
        this.setState(prevState => ({
            update: !prevState.update
        }))
    }

    setSearch() {
        this.setState(prevState => ({
            search: !prevState.search
        }))
    }

    searchUserbyName(username) {
        const namelist = this.getUsernames();
        if (namelist.includes(username)){
            UserService.findUserByUsername(username)
                .then(user => {
                    this.setState({searchUser: user})
                })
        }
        else if(username === '') {
            this.setState({searchUser:[]})
        }

        else{
            alert("No result found")
        }
    }

    getUsernames(){
        const namelist =[];
        this.props.users.map((user) =>
        namelist.push(user.username));
        return namelist;
    }

    cancelSearch(){
        this.setState({searchUsername: ''})
        this.setState({searchUser:[]})
    }
    logOut(){
        this.props.history.push(`/login`)
    }

    render() {
        return (
            <div className="container">
                <h1 className="admin-title"><b>User Admin</b></h1>
                <button type="button" className="btn btn-dark log-out" onClick={() => {this.logOut()}}>Log Out</button>
                <hr/>
                <div className={" row admin-head"}>
                    <h4 className={"col-4"}><b>Username</b></h4>
                    <h4 className={"col-4"}><b>Password</b></h4>
                    <h4><b>User Type</b></h4>
                    <input className={"form-control col-2 search"}
                           value={this.state.searchUsername}
                           onChange={(e) =>
                               this.setState({searchUsername: e.target.value})} placeholder="Search For User"/>
                    {this.state.searchUser.length === 0 &&
                    <button type="button" className="btn btn-dark search-user"
                            onClick={() => {
                                {this.searchUserbyName(this.state.searchUsername)};
                                this.setSearch();

                            }}><i className="fa fa-search"></i></button>}
                    {this.state.searchUser.length !== 0 &&
                    <button type="button" className="btn btn-dark search-user"
                    onClick={() => {this.cancelSearch()}}><i className="fa fa-times"></i></button>}
                </div>
                <hr/>

                <div className={"list-group"}>
                    {this.state.searchUser.length === 0 && this.props.users && this.props.users.length > 0 &&
                    this.props.users.map((user =>
                            <div className={"list-group-item single-user"}>
                                {this.state.editingUser !== user.id &&
                                <h5 className={"username col-4"}>{user.username}</h5>}
                                {this.state.editingUser !== user.id &&
                                <h5 className={"password col-4"}>{user.password}</h5>}
                                {this.state.editingUser !== user.id &&
                                <h5 className={"usertype col-3"}>{user.userType}</h5>}

                                {this.state.editingUser === user.id &&
                                <div className={"form-inline"}>
                                    <input className={"form-control col-2 change-username"}
                                           value={this.state.username}
                                           onChange={(e) =>
                                               this.setState({username: e.target.value})}/>

                                    <input className={"form-control col-2 change-password"}
                                           value={this.state.password}
                                           onChange={(e) =>
                                               this.setState({password: e.target.value})}/>

                                    <select className={"form-control col-2 change-type"}
                                            value={this.state.userType}
                                            onChange={(e) =>
                                                this.setState({userType: e.target.value})}
                                    >
                                        <option value={"User"}>User</option>
                                        <option value={"Advertiser"}>Advertiser</option>
                                        <option value={"Admin"}>Administrator</option>
                                    </select>
                                    <button type="button" className="btn btn-dark save-user"
                                            onClick={() => {
                                                user.username = this.state.username;
                                                user.password = this.state.password;
                                                user.userType = this.state.userType;
                                                this.props.updateUser(user.id, user);
                                                this.setUpdate();
                                                alert("Successfully saved!");
                                                this.setState({editingUser: ''})

                                            }
                                            }>
                                        <i className="fa fa-check"></i></button>
                                </div>
                                }

                                {this.state.editingUser !== user.id &&
                                <button type="button" className="btn btn-dark edit-user"
                                        onClick={() => {
                                            this.setUsername(user.username);
                                            this.setPassword(user.password);
                                            this.setUserType(user.userType);
                                            this.edit(user)
                                        }}><i className="fa fa-pencil"></i></button>}
                                {this.state.editingUser !== user.id &&
                                <button type="button" className="btn btn-dark delete-user"
                                        onClick={() => {
                                            this.props.deleteUser(user.id);
                                            this.setUpdate();
                                            alert("Successfully deleted!")
                                        }}><i
                                    className="fa fa-trash"></i></button>}
                            </div>
                    ))}

                    {this.state.searchUser.length !== 0 &&

                    <div className={"list-group-item single-user search-user-format"}>
                        {this.state.editingUser !== this.state.searchUser.id &&
                        <h5 className={"username col-4"}>{this.state.searchUser.username}</h5>}
                        {this.state.editingUser !== this.state.searchUser.id &&
                        <h5 className={"password col-4"}>{this.state.searchUser.password}</h5>}
                        {this.state.editingUser !== this.state.searchUser.id &&
                        <h5 className={"usertype col-3"}>{this.state.searchUser.userType}</h5>}

                        {this.state.editingUser === this.state.searchUser.id &&
                        <div className={"form-inline"}>
                            <input className={"form-control col-2 change-username"}
                                   value={this.state.username}
                                   onChange={(e) =>
                                       this.setState({username: e.target.value})}/>

                            <input className={"form-control col-2 change-password"}
                                   value={this.state.password}
                                   onChange={(e) =>
                                       this.setState({password: e.target.value})}/>

                            <select className={"form-control col-2 change-type"}
                                    value={this.state.userType}
                                    onChange={(e) =>
                                        this.setState({userType: e.target.value})}
                            >
                                <option value={"User"}>User</option>
                                <option value={"Advertiser"}>Advertiser</option>
                                <option value={"Admin"}>Administrator</option>
                            </select>
                            <button type="button" className="btn btn-dark save-user"
                                    onClick={() => {
                                        this.state.searchUser.username = this.state.username;
                                        this.state.searchUser.password = this.state.password;
                                        this.state.searchUser.userType = this.state.userType;
                                        this.props.updateUser(this.state.searchUser.id, this.state.searchUser);
                                        this.setUpdate();
                                        alert("Successfully saved!");
                                        this.setState({editingUser: ''})

                                    }
                                    }>
                                <i className="fa fa-check"></i></button>
                        </div>
                        }

                        {this.state.editingUser !== this.state.searchUser.id &&
                        <button type="button" className="btn btn-dark edit-user"
                                onClick={() => {
                                    this.setUsername(this.state.searchUser.username);
                                    this.setPassword(this.state.searchUser.password);
                                    this.setUserType(this.state.searchUser.userType);
                                    this.edit(this.state.searchUser)
                                }}><i className="fa fa-pencil"></i></button>}
                        {this.state.editingUser !== this.state.searchUser.id &&
                        <button type="button" className="btn btn-dark delete-user"
                                onClick={() => {
                                    this.props.deleteUser(this.state.searchUser.id);
                                    this.setUpdate();
                                    alert("Successfully deleted!")
                                }}><i
                            className="fa fa-trash"></i></button>}


                    </div>
                    }
                </div>



            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        users: state.user.users
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findAllUsers: () => {
            UserService.findAllUsers()
                .then(allUsers => dispatch(findAllUsers(allUsers)))
        },

        updateUser: (uid, user) => {
            UserService.updateUser(uid, user)
                .then(user => dispatch(updateUser(user)))
        },
        deleteUser: (uid) => {
            UserService.deleteUser(uid)
                .then(user => dispatch(deleteUser(user)))
        },
        // findUserByUsername:(username) =>{
        //     UserService.findUserByUsername(username)
        //         .then(user => dispatch(findUserByUsername(user)))
        // }
    }
}
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(AdminPageComponent);
