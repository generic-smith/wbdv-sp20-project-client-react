import React from 'react';
import MediaService, {getAdvertData} from "../../services/MediaService";

import LogoBar from "../ViewerProfile/LogoBar";
import '../ViewerProfile/Styling.css';
import FollowListItem from "../ViewerProfile/FollowListItem";

class AdvertiserPageComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      media: {},
      password:'',
      username:'',
      userType: '',
      confirmed:'',
      update: false
    }

  }


  componentDidMount() {
    MediaService.getAdvertData().then(results => this.setState({media: results}));
  }


  logout = () => {
    this.props.logout();
    this.props.history.push("/login");
  }


  render() {
    return(
        <div>
          <div>
            <h1>Advertiser View</h1>
          <ul>
            {this.state.media &&
            Object.entries(this.state.media).map(
                  ([key, value]) =>
                      <li>
                        Title = {key} Count = {value}
                      </li>)
            }
          </ul>
          </div>
        </div>
    )
  }

}


export default AdvertiserPageComponent
