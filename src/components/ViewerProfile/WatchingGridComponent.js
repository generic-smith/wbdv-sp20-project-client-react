import React from "react";
import SearchBar from "./SearchBar"
import WatchingCard from "./WatchingCard";
import userService from "../../services/UserService"
import mediaService from "../../services/MediaService"
import {createUser} from "../../actions/userActions";
import {addMedia, findWatchlist} from "../../actions/mediaActions";
import {connect, createDispatchHook} from "react-redux";

class WatchingGridComponent extends React.Component {

  componentDidMount() {
          this.props.findWatchlist(this.props.user.id)

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.user.id !== this.props.user.id) {
        this.props.findWatchlist(this.props.user.id);
    }

  }

    fixUp = (media) => {
      if (this.props.user.id !== 11) {
          this.props.addMedia(this.props.user.id, media)
      }
      else {
          this.props.addMediaLocally(media);
      }
  };

  render() {
    let that = this;
    return (

        <div className="ml-3">

          <SearchBar
              addMedia={this.fixUp}
          />
          <div className="watch-grid stretch-down row mt-2 pt-1">

            {this.props.media.length > 0 && this.props.media.map(
                function (media, key) {
                  return (
                      <WatchingCard
                          history={that.props.history}
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
  addMediaLocally: (media) =>
    dispatch(addMedia(media)),
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
