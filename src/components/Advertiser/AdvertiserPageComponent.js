import React from 'react';
import MediaService, {getAdvertData} from "../../services/MediaService";

class AdvertiserPageComponent extends React.Component {

  state = {
    mediae:[]
  };

  componentDidMount() {
    this.setState({mediae: getAdvertData()});
  }


  render() {
    console.log(this.state.mediae)
    return(
        <div>
          <div>
          <ul>
            {this.state.mediae.length > 0 &&
            this.state.mediae.map((media) =>
              <li>{media.title} {media.count}</li>
            )

            }
          </ul>
          </div>
        </div>
    )
  }

}


export default AdvertiserPageComponent
