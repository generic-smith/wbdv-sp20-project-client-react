import React from "react";
import {Link} from "react-router-dom";

class FollowListItem extends React.Component {

    render() {
        return (
            <div className={"m-1 ml-3"}>
            <Link to={`/user/${this.props.id}`}>{this.props.username}</Link>
            </div>
        )
    }
}

export default FollowListItem
