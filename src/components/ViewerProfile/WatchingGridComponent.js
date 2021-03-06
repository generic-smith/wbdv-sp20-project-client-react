import React from "react";
import SearchBar from "./SearchBar"
import WatchingCard from "./WatchingCard";
import mediaService from "../../services/MediaService"
import {
  addMedia,
  findWatchlist,
  removeFromWatchlist
} from "../../actions/mediaActions";
import {connect} from "react-redux";
import ViewerProfileMainComponent from "./ViewerProfileMainComponent";

class WatchingGridComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    viewOnly: false
  }

  componentDidMount() {
    console.log(this.props.searchType + " and " + this.props.searchMediaTitle)

    if (this.props.uid !== -1) {
      this.setState({viewOnly: true},
          () => this.props.findWatchlist(this.props.uid));
    } else if (this.props.user.id !== -1) {
      this.props.findWatchlist(this.props.user.id);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.uid === -1 && this.props.uid !== -1) {
      this.setState({viewOnly: true},
          () => this.props.findWatchlist(this.props.uid));
    } else if (this.props.uid === -1 && this.props.user.id
        !== prevProps.user.id) {
      this.props.findWatchlist(this.props.user.id);
    } else if (this.props.uid !== -1 && prevProps.uid !== this.props.uid) {
      this.props.findWatchlist(this.props.uid);
    }

  }

  fixUp = (media) => {
    if (this.props.user.id !== -1) {
      this.props.addMedia(this.props.user.id, media)
    } else {
      this.props.addMediaLocally(media);
    }
  };

  render() {
    let that = this;
    return (

        <div>
          <SearchBar
              viewOnly={this.state.viewOnly}
              addMedia={this.fixUp}
              history={that.props.history}
              urlSearchType={this.props.urlSearchType}
              urlSearchTitle={that.props.urlSearchTitle}/>
          <div className="watch-grid stretch-down row mt-2 pt-1">

            {this.props.media.length > 0 && this.props.media.map((media) =>
                <WatchingCard
                    viewOnly={this.state.viewOnly}
                    history={that.props.history}
                    uid={that.props.uid}
                    media={media}
                    removeFromWatchlist={this.props.removeFromWatchlist}
                    user={this.props.user}
                />
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
      .then(response => response === 0 ? console.log(response) : dispatch(
          addMedia(media))),
  findWatchlist: (uid) =>
      mediaService.findWatchlist(uid)
      .then(actualMedia => dispatch(findWatchlist(actualMedia))),

  removeFromWatchlist: (uid, mid) =>
      mediaService.removeFromWatchList(uid, mid)
      .then(status => (dispatch(removeFromWatchlist(uid, mid))))

});

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(WatchingGridComponent)
