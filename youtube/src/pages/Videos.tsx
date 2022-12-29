import React, {useEffect, useState} from 'react';
import Video from "../components/Video";
import {youtube} from "../service/youtube";
import {useLocation} from "react-router-dom";
import {useRecoilState} from "recoil";
import {videoState, VideosType} from "../recoil/video";

export default function Videos() {
  const [videos, setVideos] = useRecoilState<VideosType>(videoState);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
      if (!query) {
        youtube.get(`/videos?chart=mostPopular&maxResults=25`)
          .then(res => {
            const newVideos: VideosType = [];
            res.data.items.map((item: any) => newVideos.push({
              ...item.snippet,
              id: item.id,
              thumbnails: item.snippet.thumbnails.default.url
            }));
            setVideos(newVideos);
          })
          .catch(console.log)
      } else {
        youtube.get(`/search?q=${query}&maxResults=25`)
          .then(res => {
            const newVideos: VideosType = [];
            res.data.items.map((item: any) => newVideos.push({
              ...item.snippet,
              id: item.id.videoId,
              thumbnails: item.snippet.thumbnails.default.url
            }));
            setVideos(newVideos);
          })
          .catch(console.log)
      }

    },
    [query]);

  return (
    <main className='grid grid-cols-5 gap-3 p-2 overflow-auto'>
      {
        videos.map((item, index) =>
          <Video
            key={index}
            id={item.id}
            thumbnails={item.thumbnails}
            title={item.title}
            description={item.description}
            channelTitle={item.channelTitle}
            publishedAt={item.publishedAt}
          />
        )
      }
    </main>
  );
}
