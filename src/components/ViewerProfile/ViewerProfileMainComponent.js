import React from "react";
import LogoBar from "./LogoBar";
import './Styling.css';
import FollowListComponent from "./FollowListComponent";
import WatchingGridComponent from "./WatchingGridComponent";
import {connect} from "react-redux";
import {Provider} from "react-redux";
import "../../../node_modules/font-awesome/css/font-awesome.css"
import userService from "../../services/UserService"
import {loginUser, logout} from "../../actions/userActions";


class ViewerProfileMainComponent extends React.Component {

  state = {

  };


  componentDidMount() {
      this.props.profileRetrieve();
      return;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
     if (prevProps.user.id !== this.props.user.id) {
         this.props.profileRetrieve();
     }
  }

    logout = () => {
      this.props.logout();
      this.props.history.push("/login");
  }


    render() {
    return (

          <div className="body">
            <LogoBar
                logout={this.logout}
                uid={this.props.uid}
                history={this.props.history}
                username={this.props.user.username}
                userId={this.props.user.id}/>

            <div className="row mt-2 ml-1 mr-1 mb-2">
              <div className="col-9">
                <div className="m-2">
                  <WatchingGridComponent
                      uid={this.props.uid}
                      user={this.props.user}
                      history={this.props.history}/>
                </div>
              </div>
              <div className="col-3">
                <FollowListComponent
                    user={this.props.user}/>
              </div>
            </div>

          </div>

    )
  }
}

const stateToPropertyMapper = (state) => ({
    media: state.media.media,
    user: state.user.user
});

const dispatcherToPropertyMapper = (dispatch) => ({
    logout: () =>
        userService.logoutUser()
            .then(response => dispatch(logout())),
    profileRetrieve: () =>
        userService.profileRetrieve()
            .then(user => dispatch(loginUser(user)))

});

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(ViewerProfileMainComponent)
