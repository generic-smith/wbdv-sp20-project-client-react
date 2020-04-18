import React from "react";
import {Link} from "react-router-dom";

class SearchItem extends React.Component {

  render() {
    return (
        <div className={"d-flex mt-1 mb-2"}>
            <Link to={`/home/details/${this.props.media.mediaId}`}>
          <div className="pl-2 pt-2 pb-2 pr-4" style={{color: "#ff9900"}}>{this.props.media.title}</div>
            </Link>
          <button onClick={() => this.props.addThisId(this.props.media.mediaId)}
                  className="ml-auto btn btn-warning mr-2"> <i className="fa fa-plus"></i>
          </button>
        </div>
    )
  }

}

export default SearchItem


