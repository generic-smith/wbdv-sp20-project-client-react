import React from "react";
import god from "./morgan_freeman_is_god.jpg"
import {Link} from "react-router-dom";
import "../../../node_modules/font-awesome/css/font-awesome.css"

class WatchingCard extends React.Component {
  constructor(props) {
    super(props);
  }

  openEditor = () => {
    this.props.history.push(`home/details/${this.props.media.mediaId}`);
  };

  render() {
    return (
        <div
            className="watching-card col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card ml-auto mr-auto">
            {this.props.media.posterPath == null &&
            <img className={"card-image-top"}
                 src={god} alt="Poster" width={187} height={300}
                 onMouseOver=""/>
            }
            {this.props.media.posterPath != null &&
            <img onClick={this.openEditor} className={"card-image-top"}
                 onMouseOver=""
                 src={`https://image.tmdb.org/t/p/w200${this.props.media.posterPath}`}
                 alt="Poster"
                 width={187}
                 height={300}/>
            }
            <div className="d-flex p-1">
              <div className="our-card-body text-truncate">
                {!this.props.viewOnly &&
                <Link to={`/home/details/${this.props.media.mediaId}`}>
                  <a data-toggle="tooltip" title={this.props.media.title}
                     className={"card-text"}>{this.props.media.title}</a>
                </Link>}

                {this.props.viewOnly &&
                <Link
                    to={`/user/${this.props.uid}/watchlist/${this.props.media.mediaId}`}>
                  <a className={"card-text"}>{this.props.media.title}</a>
                </Link>}
              </div>

              {!this.props.viewOnly &&
              <button type="button" className="btn remove-media ml-auto">
                <i className="fa fa-trash remove-text"
                   onClick={() => {
                     this.props.removeFromWatchlist(this.props.user.id,
                         this.props.media.id);
                   }}/></button>}
            </div>
          </div>
        </div>

    )
  }

}

export default WatchingCard
