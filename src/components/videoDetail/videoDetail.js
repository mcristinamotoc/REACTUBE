import React, { Fragment } from "react";
import useStyles from './videoDetail.Style.js'


const VideoDetail = ({ videoItem }) => {
  const classes = useStyles()

  if (!videoItem)
    return (
      <div>
        <h2>Enter a search keyword and choose a video of your preference</h2>
      </div>
    );

  return (
    <Fragment>
      <div className={classes.videoDetail}>
        <iframe
          title="Youtube video"
          width="854"
          height="480"
          src={`https://www.youtube.com/embed/${videoItem.id.videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className={classes.videoText}>
        <h4>{videoItem.snippet.title}</h4>
        <p>{videoItem.snippet.channelTitle}</p>
        <p>{videoItem.snippet.description}</p>
      </div>
    </Fragment>
  );
};
export default VideoDetail;
