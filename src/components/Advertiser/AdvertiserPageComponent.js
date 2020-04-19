import React from 'react';
import MediaService, {getAdvertData} from "../../services/MediaService";

class AdvertiserPageComponent extends React.Component {

  state = {
    media:{}
  };


  mediaList = getAdvertData;

  render() {
    console.log(this.mediaList)
    return(
        <div>
          <div>
          <ul>
            {this.media.length > 0 &&
            this.mediaList.map((media) =>
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
