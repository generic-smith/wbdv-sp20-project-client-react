import React from "react";
import {Link} from "react-router-dom";
import "../ViewerProfile/Styling.css"

class FollowListItem extends React.Component {

    render() {
        return (
            <div className={"ml-2 mr-2 mt-1 mb-1 list-group-item follower-item d-flex"}>
                <Link to={`/user/${this.props.id}`}>
                    <h6 className="mt-2">{this.props.username}</h6>
                </Link>
                <button onClick={() => this.props.removeFromFollowlist(this.props.username)} className={"btn remove-follower ml-auto"}><i className="fa fa-trash"></i></button>
            </div>
        )
    }
}

export default FollowListItem
