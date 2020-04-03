import React from "react";
import SearchBar from "./SearchBar"
import WatchingCard from "./WatchingCard";
import userService from "../../services/UserService"
import mediaService from "../../services/MediaService"
import {createUser} from "../../actions/userActions";
import {addMedia, findWatchlist} from "../../actions/mediaActions";
import {connect} from "react-redux";

class WatchingGridComponent extends React.Component {

  componentDidMount() {
    this.props.findWatchlist(this.props.user.id)
  }

  fixUp = (media) => {
    this.props.addMedia(this.props.user.id, media)
  };

  render() {
    return (
        <div className="ml-3">

          <SearchBar
              addMedia={this.fixUp}
          />

          {
            /*
            USE THIS TO CREATE USER IN DATABASE - IT WONT WORK THE FIRST TIME WITHOUT IT
            <button onClick={() => this.props.createUser(this.props.user)}>
                create user
            </button>

             */
          }

          <div className="watch-grid stretch-down row mt-2 pt-1">

            {this.props.media.length > 0 && this.props.media.map(
                function (media, index) {
                  return (
                      <WatchingCard
                          media={media}
                      />
                  )
                }
            )}

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
  createUser: (user) =>
      userService.createUser(user)
      .then(actualUser => dispatch(createUser(actualUser))),
  addMedia: (uid, media) =>
      mediaService.addMedia(uid, media)
      .then(response => dispatch(addMedia(media))),
  findWatchlist: (uid) =>
      mediaService.findWatchlist(uid)
      .then(actualMedia => dispatch(findWatchlist(actualMedia)))

});

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(WatchingGridComponent)
