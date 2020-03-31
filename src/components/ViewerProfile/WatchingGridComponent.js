import React from "react";
import SearchBar from "./SearchBar"
import WatchingCard from "./WatchingCard";


class WatchingGridComponent extends React.Component {

  state = {
      media: []
  }


    addMedia = (addMedia) => {
      this.setState({
          media: [...this.state.media, addMedia]
      })
  }

  render() {
    return (
        <div className="ml-3">

            <SearchBar
                addMedia={this.addMedia}
            />

          <div className="watch-grid stretch-down row mt-2">
              {console.log(this.state.media.length > 0)}
            {this.state.media.length > 0 && this.state.media.map(function (media, index) {
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
