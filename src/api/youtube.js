import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: 'video',
    key: "AIzaSyA5ttjos8noJRvfs8W1C8zp7Lk2o2eSuYc",
  }
})
