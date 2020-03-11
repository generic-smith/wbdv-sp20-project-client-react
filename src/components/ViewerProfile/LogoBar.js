import React from "react";

class LogoBar extends React.Component {

    render() {
        return (
            <div className="row border border-dark">

                <div className="col"></div>
                <div className="col">
                    <h2 className="text-center">
                        LogoPlaceholder
                    </h2>
                </div>
                <div className="col text-right align-middle">
                    <span className="mr-1">
                        Login
                    </span>
                    <span className="ml-1">
                        Profile
                    </span>
                </div>



            </div>
        )
    }
}

export default LogoBar