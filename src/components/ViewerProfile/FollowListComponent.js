import React from "react"
import Dropdown from "react-bootstrap/Dropdown";
import userService from "../../services/UserService"
import SearchItem from "./SearchItem";
import FollowSearchItem from "./FollowSearchItem";
import {loginUser} from "../../actions/userActions";
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
        this.props.addUser(this.props.user.id, user);
    }


  render() {
        let that = this;
        console.log(this.props.user)
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
            <div className="mt-2">
                {Object.entries(this.props.user.followList).map(
                    ([key, value]) =>
                        <FollowListItem
                            username={key}
                            id={value}/>
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
            .then(response => dispatch(loginUser(response)))

});

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(FollowListComponent)
