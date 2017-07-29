import React, { Component } from 'react';
import VideoListItems from './VideoListItems';

class VideoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoItems: '',
      videoLis: ''
    }
  }

  passVideoItems() {
    const thiss = this.state.videoItems;
    const videoLis = thiss.map((video) => {
      return <VideoListItems key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect}/>
    });
    this.setState({videoLis});
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      this.setState({videoItems: this.props.videos});
      this.passVideoItems()
    }, 0.1);
  }

  render() {
    return (
      <ul className="list-group col-md-4">
        {this.state.videoLis}
      </ul>
    );
  }

}

export default VideoList;
