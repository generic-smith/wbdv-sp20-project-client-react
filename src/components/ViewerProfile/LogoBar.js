import React from "react";
import "./Styling.css";
import {Link} from "react-router-dom";

class LogoBar extends React.Component {

  render() {
    return (
        <div className="row">

          <div className="col">
              {this.props.uid !== 1 && <button className={"btn mt-2 ml-2"}
                                               style={{color: "black", backgroundColor: "white"}}
                                               onClick={() => this.props.history.goBack()}>
                  <i className="fa fa-arrow-left"></i></button>

             }
          </div>
          <div className="col">
            <h2 className="text-center">
              LogoPlaceholder
              <i className={"logo fa fa-video-camera"}/>
            </h2>
          </div>
          <div className="col text-right align-middle">
              <div className="row float-right mr-1">
                  <h5 className="text-center mr-2"> Logged in as {this.props.username.charAt(0).toUpperCase() + this.props.username.slice(1)} </h5>
                  {/*{this.props.username.charAt(0).toUpperCase() + this.props.username.slice(1)} </h5>*/}

                  <button type="button" onClick={this.props.logout} className="btn btn-light profile">Log Out</button>
                    <button type="button" className="btn btn-light profile">Profile</button>
              </div>
          </div>


        </div>
    )
  }
}

export default LogoBar
