import React from "react";
import {Link} from "react-router-dom";
import "../ViewerProfile/Styling.css"

class FollowListItem extends React.Component {

    render() {
        return (
            <div className={"m-1 ml-3 list-group-item col-10 follower-item"}>
                <Link to={`/user/${this.props.id}`}><h6 className={"follower-name"}>{this.props.username}</h6></Link>
                <button className={"btn remove-follower"}><i className="fa fa-trash"></i></button>
            </div>
        )
    }
}

export default FollowListItem
