import React from "react";
import SearchBar from "./SearchBar"
import WatchingRow from "./WatchingRow";


class WatchingListComponent extends React.Component {

  state = {
      media: []
  }



    changeMedia = (addMedia) => {
      this.setState({
          media: [...this.state.media, addMedia]
      })
  }

  render() {
    return (
        <div>

            <SearchBar
                changeMedia={this.changeMedia}
            />

          <div className="watch-list">
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