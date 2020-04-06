import React from "react";
import LogoBar from "./LogoBar";
import './Styling.css';
import WatchingListComponent from "./WatchingListComponent";
import FollowListComponent from "./FollowListComponent";
import WatchingGridComponent from "./WatchingGridComponent";
import {connect} from "react-redux";
import {Provider} from "react-redux";
import "../../../node_modules/font-awesome/css/font-awesome.css"
import userReducer from "../../reducers/userReducer";
import {combineReducers, createStore} from "redux";
import mediaReducer from "../../reducers/mediaReducer";
import mediaService from "../../services/MediaService";
import {addMedia, findWatchlist} from "../../actions/mediaActions";


class ViewerProfileMainComponent extends React.Component {

  state = {
    layout: "grid"
  };

  render() {
    return (

          <div className="body">
            <LogoBar username={this.props.user.username}/>

            {/*<div className="row border border-dark">
                    <QueryBar/>
                </div>*/}

            <div className="row mt-2">
              <div className="col-8 stretch-down">

                {this.state.layout === "grid" &&
                <div className="m-2">
                  <WatchingGridComponent/>
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


});

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(ViewerProfileMainComponent)
