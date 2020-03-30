import React from "react";

class WatchingRow extends React.Component {

  render() {
    return (
        <div className="col-xl-3">
            <div className="card" >

            <img className={"card-image-top"}
                 src={`https://image.tmdb.org/t/p/w200${this.props.media.poster_path}`}/>
                 <div className={"card-body"}>
                     <i className={"card-text"}>{this.props.media.title}</i>
                 </div>

        </div>
        </div>
    )
  }

}

export default WatchingRow
