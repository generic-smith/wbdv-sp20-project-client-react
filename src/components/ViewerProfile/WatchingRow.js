import React from "react";

class WatchingRow extends React.Component {

  render() {
    return (
        <div className="row">
          <div>
            {this.props.media.title}
          </div>
        </div>
    )
  }

}

export default WatchingRow