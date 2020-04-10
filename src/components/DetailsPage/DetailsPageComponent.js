import React from "react";
import LogoBar from "../ViewerProfile/LogoBar";
import god from "../ViewerProfile/morgan_freeman_is_god.jpg";

class DetailsPageComponent extends React.Component {

  componentDidMount() {
    // only movie for now
    const mediaId = this.props.match.params.mediaId
    fetch(`https://api.themoviedb.org/3/movie/${mediaId}?api_key=8ae10d69b6a533cb7f6179647228aab1&language=en-US`)
        .then(response => response.json())
        .then(movie => {
          this.setState({
            movie: movie
          })
        })
  }



  goBack = () => {
    this.props.history.push(`/home`);
  };
  state ={
    movie:{}
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
              <div className="details-page-title"><h2>{this.state.movie.original_title}</h2>
                <img className={"card-image-top"}
                     src={`https://image.tmdb.org/t/p/w200${this.state.movie.poster_path}`} alt="Poster" width={187} height={300}/>
              </div>

              <div className="col-md-3">
                {/*{this.props.media.posterPath == null &&*/}
                {/*<img className={"card-image-top"}*/}
                {/*     src={god} alt="Poster" width={187} height={300}/>*/}
                {/*}*/}
                {/*{this.props.media.posterPath != null &&*/}
                {/*<img onClick={this.openEditor} className={"card-image-top"}*/}
                {/*     src={`https://image.tmdb.org/t/p/w200${this.props.media.posterPath}`}*/}
                {/*     alt="Poster"/>*/}
                {/*}*/}

              </div>
              <div className="col-md-9  details-page-options ">
                <div className="row details-page-option">
                  <div className="col-md-11">
                    <h3>Description</h3>
                    <p>
                      {this.state.movie.overview}
                    </p>

                  </div>
                </div>
                <div className="row details-page-option">
                  <div className="col-md-4">
                    <h3>Movie Status</h3>
                  </div>
                  <div className="col-md-3 dropdown">
                    <button className="btn btn-primary dropdown-toggle"
                            type="button" data-toggle="dropdown">
                      Watch Status
                      <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                      <li><a href="#">Seen</a></li>
                      <li><a href="#">Not Seen</a></li>
                      <li><a href="#">Want to Watch</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row details-page-option">
                  <div className="col-md-4">
                    <h3>TV Status</h3>
                  </div>
                  <div className="col-md-3 dropdown">
                    <button className="btn btn-primary dropdown-toggle"
                            type="button" data-toggle="dropdown">
                      Season
                      <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 dropdown">
                    <button className="btn btn-primary dropdown-toggle"
                            type="button" data-toggle="dropdown">
                      Episode
                      <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row details-page-option">
                  <div className="col-md-4">
                    <h3>Rating</h3>
                  </div>
                  <div className="col-md-3 dropdown">
                    <button className="btn btn-primary dropdown-toggle"
                            type="button" data-toggle="dropdown">How
                      Good
                      <span className="caret"></span></button>
                    <ul className="dropdown-menu">
                      <li><a href="#">1</a></li>
                      <li><a href="#">0</a></li>
                      <li><a href="#">-1</a></li>
                    </ul>
                  </div>
                </div>
                <div className="row details-page-option">
                  <div className="col-md-2">
                    <h3>Comments?</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
  }

}

export default DetailsPageComponent













