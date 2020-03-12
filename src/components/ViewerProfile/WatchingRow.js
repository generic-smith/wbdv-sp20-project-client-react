import React from "react";

class WatchingRow extends React.Component {

  render() {
    return (
        <div className="row">
            {this.props.media.title}
            <img src={`https://image.tmdb.org/t/p/w200${this.props.media.poster_path}`}/>
        </div>
    )
  }

}

export default WatchingRow