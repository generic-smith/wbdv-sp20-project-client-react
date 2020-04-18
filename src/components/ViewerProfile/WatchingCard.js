import React from "react";
import god from "./morgan_freeman_is_god.jpg"
import {Link} from "react-router-dom";
import {addMedia, findWatchlist} from "../../actions/mediaActions";
import mediaService from "../../services/MediaService";
import {connect, createDispatchHook} from "react-redux";
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
        <div className="watching-card col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
          <div className="card">
            {this.props.media.posterPath == null &&
            <img className={"card-image-top"}
                 src={god} alt="Poster" width={187} height={300} onMouseOver=""/>
            }
            {this.props.media.posterPath != null &&
            <img onClick={this.openEditor} className={"card-image-top"} onMouseOver=""
                 src={`https://image.tmdb.org/t/p/w200${this.props.media.posterPath}`}
                 alt="Poster"
                 width={187}
                 height={300}/>
            }
            <div className={"card-body"}>
                <Link to={`/home/details/${this.props.media.mediaId}`}>
              <a className={"card-text"}>
                  {this.props.media.title}
              </a>
                </Link>
                <button type="button" className="remove-media"><i className="fa fa-trash remove-text"
                           onClick={() =>
                           {this.props.removeFromWatchlist(this.props.user.id, this.props.media.id);}}></i></button>
            </div>
          </div>
        </div>
    )
  }

}


export default WatchingCard
