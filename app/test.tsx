import { VideoView, useVideoPlayer } from "expo-video";
import React from "react";

const TestRoute = () => {
  const player = useVideoPlayer(
    "https://d1a0mm0kd3u3qz.cloudfront.net/7fe3cd0a-2941-4c7b-becb-7f1ec3c4ac38/posts/5f04ab6415c64f12b1d0304fd830e413-1732870959047.mp4",
    (player) => {
      player.showNowPlayingNotification = false;
      player.staysActiveInBackground = false;
    }
  );
  return (
    <VideoView
      style={{ flex: 1 }}
      contentFit="contain"
      player={player}
      startsPictureInPictureAutomatically={false}
      allowsVideoFrameAnalysis={false}
    />
  );
};

export default TestRoute;
