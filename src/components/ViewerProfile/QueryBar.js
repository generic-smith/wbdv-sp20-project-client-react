import React from "react";

class QueryBar extends React.Component {

  render() {
    return (
        <div>
          <div className="col">
            Search For New Media:
          </div>
          <input id="newMedia" placeholder="That good good"/>
          <button className="new-media">+</button>
        </div>
    )
  }

}

export default QueryBar