import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handlevideoselect }) => {
  const renderedVideos = videos.map((video) => (
    <VideoItem
      handlevideoselect={handlevideoselect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <Grid container spacing={1}>
      {renderedVideos}
    </Grid>
  );
};

export default VideoList;
