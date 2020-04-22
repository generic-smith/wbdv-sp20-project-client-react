import React from "react";
import "./Styling.css";
import {Link} from "react-router-dom";

class LogoBar extends React.Component {

  toProfile = () => {
      this.props.history.push(`/profile/${this.props.username}`)
  }

  giveMeUsername = () => {
      if (this.props.username === undefined || this.props.username === null) {
          return "Placehold";
      }
      else {
          return this.props.username;
      }
  }

  render() {
    return (
        <div className="d-flex">

              <button className="ml-3 mt-2 mr-2 btn btn-danger" onClick={() => this.props.history.goBack()}>Back</button>
            {this.props.userType === "Admin" && <button className={"ml-3 ml-2 mt-2 btn btn-light"} onClick={() => this.props.history.push("/admin")}>Admin Page</button> }


            <h2 className="text-center">
                The Watchlist
            </h2>

          <div className="text-right align-middle ml-2">
              <div className="row float-right mr-1">
                  <h5 className="text-center mr-2 d-none d-sm-block"> Logged in as {this.giveMeUsername().charAt(0).toUpperCase() + this.giveMeUsername().slice(1)} </h5>
                  {/*{this.props.username.charAt(0).toUpperCase() + this.props.username.slice(1)} </h5>*/}

                  <button type="button" onClick={this.props.logout} className="btn btn-light profile d-none d-md-block">Log Out</button>

                  {this.props.userId !== -1 &&  <button type="button" onClick={() => this.toProfile()} className="btn btn-light profile d-none d-md-block">Profile</button>}
              </div>
          </div>


        </div>
    )
  }
}

export default LogoBar
