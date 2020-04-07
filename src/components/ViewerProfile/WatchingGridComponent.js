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
      if (this.props.user.id != 33301) {
          this.props.findWatchlist(this.props.user.id)
      }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.user.id != this.props.user.id && (this.props.user.id != 33301)) {
          this.props.findWatchlist(this.props.user.id);
      }
  }

    fixUp = (media) => {
      if (this.props.userId != 33301) {
          this.props.addMedia(this.props.user.id, media)
      }
      else {
          addMedia(media);
      }
  };

  render() {
    return (
        <div className="ml-3">

          <SearchBar
              addMedia={this.fixUp}
          />

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
