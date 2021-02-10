import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import useStyles from "./videoItem.Style.js";

const VideoItem = ({ video, onVideoSelect }) => {
  const classes = useStyles();

  return (
    <div 
    onClick={() => onVideoSelect(video)} 
    className={classes.videoSelect}>
      <CardMedia className={classes.img}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
      </CardMedia>
      <Typography gutterBottom className={classes.videoText}>
        <div>{video.snippet.title}</div>
      </Typography>
    </div>
  );
};
export default VideoItem;
