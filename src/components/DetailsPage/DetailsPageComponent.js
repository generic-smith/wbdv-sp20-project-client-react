import React from "react";
import LogoBar from "../ViewerProfile/LogoBar";
import god from "../ViewerProfile/morgan_freeman_is_god.jpg";

class DetailsPageComponent extends React.Component {

  goBack = () => {
    this.props.history.push(`/home`);
  };

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
              <div className="details-page-title"><h2>{this.props.title}</h2>
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
                <img className={"card-image-top"}
                     src={god} alt="Poster" width={187} height={300}/>
              </div>
              <div className="col-md-9  details-page-options ">
                <div className="row details-page-option">
                  <div className="col-md-11">
                    <h3>Description</h3>
                    <small>
                      The FitnessGram Pacer Test is a multistage aerobic
                      capacity test that progressively
                      gets more difficult as it continues. The 20 meter pacer
                      test will begin in 30 seconds.
                      Line up at the start. The running speed starts slowly but
                      gets faster each minute
                      after you hear this signal bodeboop. A sing lap should be
                      completed every time you
                      hear this sound. ding Remember to run in a straight line
                      and run as long as possible.
                      The second time you fail to complete a lap before the
                      sound, your test is over. The
                      test will begin on the word start. On your mark. Get
                      ready!… Start.
                    </small>
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













