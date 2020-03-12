import React from "react";

const init = {
  queryData: [
    {_id: "123", title: "Movie a1"},
    {_id: "234", title: "Movie a2"},
    {_id: "345", title: "Movie a3"}
  ]
};

class SearchBar extends React.Component {
  state = init;

  render() {
    return (
        <div className="col search-bar d-flex">
          <div className="col">
            Your Watch List
          </div>
          <div className="col">

            <div className="row float-right">
              <div className="mr-3"> Search</div>
              <input type="text"/>
            </div>
          </div>
        </div>
    )
  }

}

export default SearchBar;


