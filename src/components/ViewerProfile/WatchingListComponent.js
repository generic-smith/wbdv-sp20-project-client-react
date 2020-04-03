import React from "react";
import SearchBar from "./SearchBar"
import WatchingCard from "./WatchingRow"

const init = {
  media: [
    {_id: "123", title: "Movie 1"},
    {_id: "234", title: "Movie 2"},
    {_id: "345", title: "Movie 3"}
  ]
};

class WatchingListComponent extends React.Component {

  state = init;

  render() {
    return (
        <div className="row">

          <SearchBar/>

          <div className="watch-list">
            {this.state.media.map(function (media, index) {
                  return (
                      <div></div>
                  )
                }
            )}
          </div>
        </div>

    )
  }
}

export default WatchingListComponent
