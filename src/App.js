import React, { useState, Fragment } from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/searchBar/searchBar";
import VideoList from "./components/videoList/videoList";
import VideoDetail from "./components/videoDetail/videoDetail";



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
    <div className="app">
      <Fragment>
        <SearchBar onFormSubmit={handleSubmit} />
        <div className="app_container">
          <div className="app__videoDetail">
            <VideoDetail videoItem={selectedVideos} />
          </div>
          <div className="app__videoList">
            <VideoList handleVideoSelect={setSelectedVideos} videos={videos} />
          </div>
        </div>
      </Fragment>
    </div>
  );
};


export default App;
