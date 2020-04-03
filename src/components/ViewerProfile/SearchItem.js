import React from "react";

class SearchItem extends React.Component {

  render() {
    return (
        <div className={"row m-1 d-flex"}>
          <div className="col-9">{this.props.media.title}</div>
          <button onClick={() => this.props.addThisId(this.props.media.mediaId)}
                  className="col-3">+
          </button>
        </div>
    )
  }

}

export default SearchItem


