import React from "react";
import "./Styling.css";
import {Link} from "react-router-dom";

class LogoBar extends React.Component {

  render() {
    return (
        <div className="d-flex">


              {this.props.uid !== 1 && <button className="ml-3 mt-2 mr-2 btn btn-danger" onClick={() => this.props.history.goBack()}>Back
              </button>

             }


            <h2 className="text-center">
              LogoPlaceholder
              <i className={"logo fa fa-video-camera"}/>
            </h2>

          <div className="text-right align-middle ml-2">
              <div className="row float-right mr-1">
                  <h5 className="text-center mr-2 d-none d-sm-block"> Logged in as {this.props.username.charAt(0).toUpperCase() + this.props.username.slice(1)} </h5>
                  {/*{this.props.username.charAt(0).toUpperCase() + this.props.username.slice(1)} </h5>*/}

                  <button type="button" onClick={this.props.logout} className="btn btn-light profile d-none d-md-block">Log Out</button>
                    <button type="button" className="btn btn-light profile d-none d-md-block">Profile</button>
              </div>
          </div>


        </div>
    )
  }
}

export default LogoBar
