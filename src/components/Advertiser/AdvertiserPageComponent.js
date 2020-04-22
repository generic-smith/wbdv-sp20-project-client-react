import React from 'react';
import MediaService, {getAdvertData} from "../../services/MediaService";
import LogoBar from "../ViewerProfile/LogoBar";
import '../ViewerProfile/Styling.css';

class AdvertiserPageComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mediae:[{title: "Ace Ventura", count: 8},
        {title: "Ace", count: 5},
        {title: "Breaking", count: 1}],
      password:'',
      username:'',
      userType: '',
      confirmed:'',
      update: false
    }

  }

  // componentDidMount() {
  //   this.setState({mediae: getAdvertData()});
  //   console.log("Media: " + this.state.mediae)
  // }

  componentDidMount() {
    this.setState({
      mediae: getAdvertData(),
      username: this.props.username
    });


    return;
  }


  logout = () => {
    this.props.logout();
    this.props.history.push("/login");
  }


  render() {
    console.log(this.state.mediae)
    return(
        <div>
          <div>
            <h1>stuff.</h1>
          <ul>
            {this.state.mediae.length > 0 &&
            this.state.mediae.map((media) =>
              <li>
                {media.title} {media.count}
              </li>)}
          </ul>
          </div>
        </div>
    )
  }

}


export default AdvertiserPageComponent
