import React from 'react';

const VideoPlayer = (props) => {
  if(!props.video)
    return <div className="text-center">Loading</div>

  const video = props.video;
  const videoId = video.id.videoId;
  const videoUrl = 'https://www.youtube.com/embed/' + videoId;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="video player" src={videoUrl} className="embed-responsive-item" allowFullScreen="allowFullScreen" frameBorder="0"></iframe>
      </div>
      <div className="details">
        <div className="title">{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoPlayer;
