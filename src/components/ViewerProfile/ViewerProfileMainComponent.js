import React from "react";
import LogoBar from "./LogoBar";
import './Styling.css';
import WatchingListComponent from "./WatchingListComponent";
import FollowListComponent from "./FollowListComponent";
import WatchingGridComponent from "./WatchingGridComponent";
import "../../../node_modules/font-awesome/css/font-awesome.css"

import QueryBar from "./QueryBar";

class ViewerProfileMainComponent extends React.Component {

    state = {
        layout: "grid"
    };

    render() {
        return (
            <div className="body">
                <LogoBar/>

                {/*<div className="row border border-dark">
                    <QueryBar/>
                </div>*/}

                <div className="row mt-2">
                    <div className="col-8 stretch-down">

                        {this.state.layout === "list" &&
                        <div className="m-2">
                            <WatchingListComponent/>
                        </div>
                        }

                        {this.state.layout === "grid" &&
                        <div className="m-2">
                            <WatchingGridComponent/>
                        </div>
                        }
                    </div>
                    <div className="col-4 stretch-down">
                        <FollowListComponent/>
                    </div>
                </div>

            </div>

        )
    }
}

export default ViewerProfileMainComponent
