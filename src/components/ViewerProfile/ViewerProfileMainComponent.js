import React from "react";
import LogoBar from "./LogoBar";
import './Styling.css';
import WatchingGridComponent from "./WatchingGridComponent";
import FollowListComponent from "./FollowListComponent";
import WatchingListComponent from "./WatchingListComponent"

class ViewerProfileMainComponent extends React.Component {

    state = {
        layout: "list"
    };

    render() {
        return (
            <div className="container">
                <LogoBar/>
                {/*<div className="row border border-dark">*/}
                {/*    <QueryBar/>*/}
                {/*</div>*/}
                <div className="row mt-2">
                    <div className="col-8 border border-dark stretch-down">

                        {this.state.layout === "grid" &&
                        <div className="m-2">
                            <WatchingGridComponent/>
                        </div>
                        }

                        {this.state.layout === "list" &&
                        <div className="m-2">
                            <WatchingListComponent/>
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