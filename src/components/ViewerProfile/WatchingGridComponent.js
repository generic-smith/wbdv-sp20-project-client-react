import React from "react";

class WatchingGridComponent extends React.Component {

    render() {
        return (
            <div className="row border border-dark">
                <div className="col">
                    <div className="text-left">
                        Your Watch List
                    </div>
                </div>
                <div className="col">

                    <div className="row float-right">
                    <div className="mr-3"> Search </div>
                    <input type="text"/>
                    <button className="mr-3 ml-3"> + </button>
                    </div>

                </div>
            </div>

        )
    }
}
export default WatchingGridComponent