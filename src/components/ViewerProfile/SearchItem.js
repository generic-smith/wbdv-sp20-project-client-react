import React from "react";
import {Link} from "react-router-dom";

class SearchItem extends React.Component {

  render() {
    return (
        <div className={"row m-1 d-flex"}>
            <Link to={`/home/details/${this.props.media.mediaId}`}>
          <div className="col-12" style={{color: "#ff9900"}}>{this.props.media.title}</div>
            </Link>
          <button onClick={() => this.props.addThisId(this.props.media.mediaId)}
                  className="col-3">+
          </button>
        </div>
    )
  }

}

export default SearchItem


