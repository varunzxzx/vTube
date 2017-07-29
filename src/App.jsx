import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
const API_KEY = 'AIzaSyAZTd22ROEFa64QFlieFytRANghytHsNho';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideos: ''
    }
  }

  componentWillMount() {
    this.getVideos('programmer');
  }

  getVideos(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideos: videos[0]
      });
    });
  }

  render() {
    const onChange = _.debounce((term) => {this.getVideos(term)}, 500);
    return (
      <div>
        <div className="header">
          <img src="logo/logo.png" alt="V Tube" className="logo"/>
          <SearchBar onInputChange={onChange} />
          <div className="sign">
            <button className="btn btn-warning">SIGN IN</button>
            <button className="btn btn-warning">REGISTER</button>
          </div>
        </div>
        <div className="row">
          <VideoPlayer video={this.state.selectedVideos} />
          <VideoList videos={this.state.videos} onVideoSelect={(video) => {this.setState({selectedVideos: video})}} />
        </div>
      </div>
    );
  }
}

export default App;
