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

            <div className="row float-right mr-3">

              <input type="text" placeholder="Search movie in your list"/>
              <button >Search</button>
            </div>
          </div>
        </div>
    )
  }

}

export default SearchBar;


