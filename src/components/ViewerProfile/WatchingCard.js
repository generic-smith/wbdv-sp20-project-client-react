import React from "react";
//import god from "./morgan_freeman_is_god.jpg"
class WatchingCard extends React.Component {

  render() {
    return (
        <div className="watching-card col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card">
            {/*this.props.media.posterPath == null &&
            <img className={"card-image-top"}
                 src={god} alt="Poster" width={187} height={300}/>
            */}
            {this.props.media.posterPath != null &&
            <img className={"card-image-top"}
                 src={`https://image.tmdb.org/t/p/w200${this.props.media.posterPath}`}
            alt="Poster"/>
            }
            <div className={"card-body"}>
              <i className={"card-text"}>{this.props.media.title}</i>
            </div>
            <div>
              <a href="#">Details</a>
            </div>

          </div>
        </div>
    )
  }

}

export default WatchingCard
