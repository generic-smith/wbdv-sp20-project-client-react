import React from "react";
import "./Styling.css";
class LogoBar extends React.Component {

    render() {
        return (
            <div className="row">

                <div className="col"></div>
                <div className="col">
                    <h2 className="text-center">
                        LogoPlaceholder
                        <i className={"logo fa fa-video-camera"}></i>
                    </h2>
                </div>
                <div className="col text-right align-middle">
                    <button type="button" className="btn btn-light login">Login</button>
                    <button type="button" className="btn btn-light profile">Profile</button>
                </div>



            </div>
        )
    }
}

export default LogoBar
