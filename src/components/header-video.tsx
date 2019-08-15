import React from 'react';
import YouTube from 'react-youtube';
 
class HeaderVideo extends React.Component {
  render() {
    const opts = {

      width: 800,
      height:333,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
              controls: 0,
      rel: 0,
      showinfo: 0
      }
    };
 
    return (
      <YouTube
        videoId="1fI31TMMZmE"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}


export default HeaderVideo;