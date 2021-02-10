import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import useStyles from "./videosStyle.js";

const VideoItem = ({ video, handleVideoSelect }) => {
  const classes = useStyles();

  return (
    <div onClick={() => handleVideoSelect(video)} className={classes.videoitem}>
      <CardMedia className={classes.img}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.description}
        />
      </CardMedia>
      <Typography gutterBottom variant="body1" className={classes.videoText}>
        <div>{video.snippet.title}</div>
      </Typography>
    </div>
  );
};
export default VideoItem;
