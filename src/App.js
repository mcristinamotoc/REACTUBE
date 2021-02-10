import React, { useState, Fragment } from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/searchBar/searchBar";
import VideoList from "./components/videoList/videoList";
import VideoDetail from "./components/videoDetail/videoDetail";
import "./App.css";


const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState(null);

  /* handleSubmit-> is the method that will be executed when a request is made, which will accept a string. 
  The content of this method is the call to the youtube API and its later storage in the state.*/

  const handleSubmit = async (termFromSearchBar) => {
    const {
      data: { items: videos },
    } = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    setVideos(videos);
    console.log("Videos!!", videos);

    setSelectedVideos(videos[0]);
  };

  return (
    
      <Fragment>
        <SearchBar onFormSubmit={handleSubmit} />  
        <div className="app_container">
          <div className="app_videoDetail">
            <VideoDetail videoItem={selectedVideos} />
          </div>
          <div className="app_videoList">
            <VideoList onVideoSelect={setSelectedVideos} videos={videos} />
          </div>
        </div>
      </Fragment>
   
  );
};


export default App;
