import React from "react";

class WatchingCard extends React.Component {

  render() {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="card">

            <img className={"card-image-top"}
                 src={`https://image.tmdb.org/t/p/w200${this.props.media.posterPath}`}/>
                 <div className={"card-body"}>
                     <i className={"card-text"}>{this.props.media.title}</i>
                 </div>

        </div>
        </div>
    )
  }

}

export default WatchingCard
