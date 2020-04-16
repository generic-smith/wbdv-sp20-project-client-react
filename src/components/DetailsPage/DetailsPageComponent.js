import React from "react";
import LogoBar from "../ViewerProfile/LogoBar";
import god from "../ViewerProfile/morgan_freeman_is_god.jpg";
import userService from "../../services/UserService";
import {loginUser, logout} from "../../actions/userActions";
import {connect} from "react-redux";
import mediaService from "../../services/MediaService"
import {addMedia} from "../../actions/mediaActions";

class DetailsPageComponent extends React.Component {

  componentDidMount() {
    const mediaId = this.props.match.params.mediaId;
    this.props.profileRetrieve().then(e => this.putInWork(this.props.user.id, mediaId));
  }

  putInWork(uid, mid) {
    this.props.getMediaInfoForMe(uid, mid).then(e => this.setState({movie: e}, () => this.dynamicDispatch()))
  }

  dynamicDispatch() {
    if (this.state.movie.type === "TV") {
      this.findNumSeasonsAndEpisodes();
      return;
    }
    else {
      return;
    }
  }

  findNumSeasonsAndEpisodes() {
    fetch(`https://api.themoviedb.org/3/tv/${this.state.movie.mediaId}?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US`)
        .then(response => response.json())
        .then(response => this.setState({seasons: response.number_of_seasons}, () => this.updateEpisodes()))
  }

  updateEpisodes() {
    const seasonOn = this.state.movie.season;
    fetch(`https://api.themoviedb.org/3/tv/${this.state.movie.mediaId}/season/${seasonOn}?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US`)
        .then(response => response.json())
        .then(response => this.setState({episodes: response.episodes.length}))
  }


  updateMediaLocally(media) {
    this.setState({movie: media});
  }


  goBack = () => {
    this.props.history.push(`/home`);
  };

  state ={
    movie:{},
    seasons:1,
    episodes:1
  }

  render() {
    return (
        <div className="details-page body stretch-down">
          {/*<LogoBar username={this.props.username}/>*/}
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <button className="btn btn-danger" onClick={this.goBack}>Back
                </button>
              </div>
            </div>
            <div className="container row details-page-details stretch-down">
              <div className="details-page-title"><h2>{this.state.movie.title}</h2>
                <img className={"card-image-top"}
                     src={`https://image.tmdb.org/t/p/w200${this.state.movie.posterPath}`} alt="Poster" width={187} height={300}/>
              </div>

              <div className="col-md-3">
              </div>
              <div className="col-md-9  details-page-options ">
                <div className="row details-page-option">
                  <div className="col-md-11">
                    <h3>Description</h3>
                    <p>
                      {this.state.movie.description}
                    </p>

                  </div>
                </div>
                {this.state.movie.type === "MOVIE" &&
                <div className="row details-page-option">
                  <div className="col-md-4">
                    <h3>Movie Status</h3>
                  </div>
                  <div className="col-md-3 dropdown">
                    <select value={this.state.movie.watched} onChange={e => {
                      const seen = e.target.value;
                      let ns = {movie: {...this.state.movie, watched: seen}};
                      this.setState(ns, () => this.props.updateMedia(this.props.user.id, this.state.movie.mediaId, this.state.movie, this))
                    }} class="form-control">
                      <option value={true}>Have Seen</option>
                      <option value={false}>Want to see</option>
                    </select>
                  </div>
                </div>}
                {this.state.movie.type === "TV" &&
                <div className="row details-page-option">
                  <div className="col-md-4">
                    <label>&nbsp;</label>
                    <h3>TV Status</h3>
                  </div>
                  <div className="col-md-3 dropdown">
                    <label>Season</label>
                    <select value={this.state.movie.season} onChange={e => {
                      const season = parseInt(e.target.value);
                      let ns = {movie: {...this.state.movie, season: season}};
                      this.setState(ns, () => this.props.updateMedia(this.props.user.id, this.state.movie.mediaId, this.state.movie, this).then(() =>this.updateEpisodes()))
                    }} className="form-control">
                      {Array.from(Array(this.state.seasons), (e, i) => {
                        return <option value={i + 1}>Season {i + 1}</option>
                      })}
                    </select>
                  </div>
                  <div className="col-md-3 dropdown">
                    <label>Episode</label>
                    <select value={this.state.movie.episode} onChange={e => {
                      const episode = parseInt(e.target.value);
                      let ns = {movie: {...this.state.movie, episode: episode}};
                      this.setState(ns, () => this.props.updateMedia(this.props.user.id, this.state.movie.mediaId, this.state.movie, this))
                    }} className="form-control">
                      {Array.from(Array(this.state.episodes), (e, i) => {
                        return <option value={i + 1}>Episode {i + 1}</option>
                      })}
                    </select>
                  </div>
                </div>
                }
                <div className="row details-page-option">
                  <div className="col-md-4">
                    <h3>Rating</h3>
                  </div>
                  <div className="col-md-3 dropdown">
                    <select value={this.state.movie.rating} onChange={e => {
                      const rating = parseInt(e.target.value);
                      let ns = {movie: {...this.state.movie, rating: rating}};
                      this.setState(ns, () => this.props.updateMedia(this.props.user.id, this.state.movie.mediaId, this.state.movie, this))
                    }} defaultValue={0} className="form-control">
                      <option value={-2}>Very Bad</option>
                      <option value={-1}>Bad</option>
                      <option value={0}>Meh</option>
                      <option value={1}>Good</option>
                      <option value={2}>Very Good</option>
                      {this.state.movie.type === "MOVIE" && <option value={3}>Best Movie Ever</option>}
                      {this.state.movie.type === "TV" && <option value={3}>Best Show Ever</option>}
                    </select>
                  </div>
                </div>
                <div className="row details-page-option">
                  <div className="col-md-2">
                    <h3>Comments?</h3>
                  </div>

                  <div className="col-2">

                  </div>
                  <div className="col">
                    <textarea value={this.state.movie.comments} onChange={e => {
                      const seen = e.target.value;
                      let ns = {movie: {...this.state.movie, comments: seen}};
                      this.setState(ns, () => this.props.updateMedia(this.props.user.id, this.state.movie.mediaId, this.state.movie, this))
                    }}className="form-control" rows="5" id="comment"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
  }

}

const stateToPropertyMapper = (state) => ({
  media: state.media.media,
  user: state.user.user
});

const dispatcherToPropertyMapper = (dispatch) => ({
  profileRetrieve: () =>
      userService.profileRetrieve()
          .then(user => dispatch(loginUser(user))),
  getMediaInfoForMe: (uid, mid) =>
      mediaService.getMedia(uid, mid),
  updateMedia: (uid, mid, media, that) =>
      mediaService.updateMedia(uid, mid, media)
          .then(result => that.updateMediaLocally(media))


});

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(DetailsPageComponent)












