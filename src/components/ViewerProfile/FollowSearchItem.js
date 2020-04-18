import React from "react";
import {Link} from "react-router-dom";

class FollowSearchItem extends React.Component {

    render() {
        return (
            <div className={"row m-1 mb-2"}>
                    <div className="col-8" style={{color: "#ff9900"}}>{this.props.user.username}</div>
                <button onClick={() => this.props.addUser(this.props.user)} className="btn btn-warning col-4">
                    <i className="fa fa-plus"></i>


                </button>
            </div>
        )
    }
}

export default FollowSearchItem
