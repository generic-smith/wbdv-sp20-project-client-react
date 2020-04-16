import React from "react";
import {Link} from "react-router-dom";

class FollowSearchItem extends React.Component {

    render() {
        return (
            <div className={"row m-1 d-flex"}>
                <Link to={`/user/${this.props.user.id}`}>
                    <div className="col-12" style={{color: "#ff9900"}}>{this.props.user.username}</div>
                </Link>
                <button onClick={() => this.props.addUser(this.props.user)} className="col-3">+
                </button>
            </div>
        )
    }
}

export default FollowSearchItem
