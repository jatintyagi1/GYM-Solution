import React from 'react';
import YouTube from 'react-youtube';
import './youtubeVideo.css'; // Import the CSS file

const YoutubeVideo = () => {
  // YouTube video options
  const opts = {
    height: '400',
    width: '800',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0, // Change to 1 to autoplay the video
    },
  };

  // Extract the video ID from the YouTube video link
  const videoUrl = 'https://youtu.be/ruX4Le0kBng?si=7t1mSX1MaKcugw4k';
  const videoId = videoUrl.split('youtu.be/')[1];

  return (
    <div className='video-full-wrapper'>
      <h1>FITNESS + WELLNESS INDIA</h1>
      <div className='youtube-video-container'>
        <YouTube videoId={videoId} opts={opts} className='youtube-video-player' />
      </div>
    </div>
  );
}

export default YoutubeVideo;
