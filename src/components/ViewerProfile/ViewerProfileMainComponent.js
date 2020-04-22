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

  adminPageBugFix = () => {
      if (this.props.user === undefined) {
          window.location.reload();
      }
  }


    render() {
      this.adminPageBugFix();
    return (

          <div className="body">
              {console.log(this.props)}
            <LogoBar
                logout={this.logout}
                uid={this.props.uid}
                history={this.props.history}
                username={this.props.user.username}
                userType={this.props.user.userType}
                userId={this.props.user.id}/>

            <div className="row mt-2 ml-1 mr-1 mb-2">
              <div className="col">
                <div className="m-2">
                  <WatchingGridComponent
                      uid={this.props.uid}
                      user={this.props.user}
                      history={this.props.history}/>
                </div>
              </div>
                {this.props.user.id !== -1 &&
              <div className="col-3 d-none d-sm-block">
                <FollowListComponent
                    user={this.props.user}/>
              </div>}
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
