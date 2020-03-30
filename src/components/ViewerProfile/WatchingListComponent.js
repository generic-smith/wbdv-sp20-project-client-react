import React from "react";
import SearchBar from "./SearchBar"
import WatchingRow from "./WatchingRow";


class WatchingListComponent extends React.Component {

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
        <div>

            <SearchBar
                addMedia={this.addMedia}
            />

          <div className="watch-list stretch-down row">
              {console.log(this.state.media.length > 0)}
            {this.state.media.length > 0 && this.state.media.map(function (media, index) {
                  return (
                      <WatchingRow
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

export default WatchingListComponent
