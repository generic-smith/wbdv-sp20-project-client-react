import React from "react";

class FollowListItem extends React.Component {

    render() {
        return (
            <div>{this.props.user.username}</div>
        )
    }
}

export default FollowListItem
