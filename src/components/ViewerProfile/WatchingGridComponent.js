import React from "react";
import SearchBar from "./SearchBar"
import WatchingCard from "./WatchingCard"

const init = {
  media: [
    {_id: "123", title: "Movie 1"},
    {_id: "234", title: "Movie 2"},
    {_id: "345", title: "Movie 3"}
  ]
};

class WatchingGridComponent extends React.Component {

  state = init;

  render() {
    return (
        <div>
          <div className="row border border-dark">
            <SearchBar/>
          </div>
          <div className="watch-list">
            {this.state.media.map(function (media, index) {
                  return (
                      <WatchingCard
                          media={media}
                      />
                  )
                }
            )}
          </div>
        </div>

    )
  }
}

export default WatchingGridComponent