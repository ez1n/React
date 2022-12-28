import axios from "axios";

export const youtube = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_URL
})