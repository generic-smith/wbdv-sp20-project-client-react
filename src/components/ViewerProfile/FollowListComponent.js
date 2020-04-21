import React from "react"
import Dropdown from "react-bootstrap/Dropdown";
import userService from "../../services/UserService"
import SearchItem from "./SearchItem";
import FollowSearchItem from "./FollowSearchItem";
import {loginUser, removeFromFollowlist} from "../../actions/userActions";
import {connect} from "react-redux";
import mediaService from "../../services/MediaService";
import FollowListItem from "./FollowListItem";

class FollowListComponent extends React.Component {


    state = {
        person: "",
        users: []
    };

    searchUsers = (lookingFor) => {
        userService.searchUsers(lookingFor, this.props.user.username).then(results => this.setState({users: results}))
    }

    addThisUser = (user) => {
        this.setState({person: "", users: []});
        this.props.addUser(this.props.user.id, user);
    }

    deleteThisUser = (username) => {
        this.props.removeFromFollowlist(this.props.user.id, username);
    }


    render() {
        let that = this;
        return (
            <div className="follow-list stretch-down-2">
                <div className="text-center mt-1"><h5>Your Follow List</h5></div>
                <div className="ml-2 mr-2">
                    <input className="form-control" type="text"
                           placeholder={"Search For People To Follow"}
                           value={this.state.person}
                           onChange={e => {
                               this.setState({person: e.target.value});
                               {
                                   e.target.value.length === 0 && this.setState({users: []})
                               }
                               {
                                   e.target.value.length > 0 && this.searchUsers(e.target.value)
                               }
                           }}/>
                </div>
                {this.state.users && this.state.users.length > 0 &&
                <div className={"ml-2 pos-a dropdown-content-2"}>
                    {this.state.users.map(entry =>
                        <FollowSearchItem class="search-item"
                                          user={entry}
                                          addUser={this.addThisUser}/>)}
                </div>}
                {this.props.user && this.props.user.followList &&
                <div className="mt-2 list-group">
                    {Object.entries(this.props.user.followList).map(
                        ([key, value]) =>
                            <FollowListItem
                                username={key}
                                id={value}
                                removeFromFollowlist={this.deleteThisUser}/>
                    )
                    }
                </div>}
            </div>
        )
    }

}

const stateToPropertyMapper = (state) => ({
    user: state.user.user
});

const dispatcherToPropertyMapper = (dispatch) => ({
    addUser: (uid, user) =>
        userService.addUserToFollowList(uid, user)
            .then(response => dispatch(loginUser(response))),
    removeFromFollowlist: (uid, username) =>
        userService.removeFromFollowlist(uid, username)
            .then(user => dispatch(removeFromFollowlist(user)))

});

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(FollowListComponent)
