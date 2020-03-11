import React from "react";
import LogoBar from "./LogoBar";
import './Styling.css';
import WatchingGridComponent from "./WatchingGridComponent";

class ViewerProfileMainComponent extends React.Component {

    render() {
        return(
            <div className="container">
                <LogoBar/>
                <div className="row mt-2">
                    <div className="col-8 border border-dark stretch-down">
                        <div className="m-2">
                            <WatchingGridComponent/>
                        </div>


                    </div>
                    <div className="col-4 stretch-down">

                        <div className="border border-dark negative-margin stretch-down">

                        </div>

                    </div>
                </div>
            </div>
            
        )
    }
}
export default ViewerProfileMainComponent