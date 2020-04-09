import React from "react";
import LogoBar from "./LogoBar";
import './Styling.css';
import WatchingListComponent from "./WatchingListComponent";
import FollowListComponent from "./FollowListComponent";
import WatchingGridComponent from "./WatchingGridComponent";
import {connect} from "react-redux";
import {Provider} from "react-redux";
import "../../../node_modules/font-awesome/css/font-awesome.css"
import userService from "../../services/UserService"
import {loginUser} from "../../actions/userActions";


class ViewerProfileMainComponent extends React.Component {

  state = {
    layout: "grid"
  };

  componentDidMount() {
          this.props.profileRetrieve();
          return;
  }


    render() {
    return (

          <div className="body">
            <LogoBar username={this.props.user.username}/>

            <div className="row mt-2">
              <div className="col-8 stretch-down">

                {this.state.layout === "grid" &&
                <div className="m-2">
                  <WatchingGridComponent
                      {...this.props}
                      history={this.props.history}/>
                </div>
                }

                {this.state.layout === "list" &&
                <div className="m-2">
                  <WatchingListComponent/>
                </div>
                }

              </div>
              <div className="col-4 stretch-down">
                <FollowListComponent/>
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
    profileRetrieve: () =>
        userService.profileRetrieve()
            .then(user => dispatch(loginUser(user)))

});

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(ViewerProfileMainComponent)
