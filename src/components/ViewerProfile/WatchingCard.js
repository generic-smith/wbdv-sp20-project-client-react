import React from "react";
import god from "./morgan_freeman_is_god.jpg"
import {Link} from "react-router-dom";
class WatchingCard extends React.Component {

  openEditor = () => {
    this.props.history.push(`home/details/${this.props.media.mediaId}`);
  };

  render() {
    return (
        <div className="watching-card col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card">
            {this.props.media.posterPath == null &&
            <img className={"card-image-top"}
                 src={god} alt="Poster" width={187} height={300}/>
            }
            {this.props.media.posterPath != null &&
            <img onClick={this.openEditor} className={"card-image-top"}
                 src={`https://image.tmdb.org/t/p/w200${this.props.media.posterPath}`}
                 alt="Poster"/>
            }
            <div className={"card-body"}>
                <Link to={`/home/details/${this.props.media.mediaId}`}>
              <i className={"card-text"}>
                  {this.props.media.title}

              </i>
                </Link>
            </div>
          </div>
        </div>
    )
  }

}

export default WatchingCard
