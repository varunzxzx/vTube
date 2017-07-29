import React,{ Component } from 'react';

class VideoListItems extends Component {

  render() {
    //console.log(this.props.video);
    const ImgUrl = this.props.video.snippet.thumbnails.default.url;
    const VideoTitle = this.props.video.snippet.title;
    const onVideoSelect = this.props.onVideoSelect;
    return(
      <li className="list-group-item" onClick={() => {onVideoSelect(this.props.video)}}>
        <div className="video-list media">

          <div className="media-left">
            <img src={ImgUrl} alt={VideoTitle} className="media-object"/>
          </div>

          <div className="media-body">
            <div className="media-heading">{VideoTitle}</div>
          </div>

        </div>
      </li>
    );
  }
}

export default VideoListItems;
