import React, {useEffect, useState} from 'react';
import Video from "../components/Video";
import {youtube} from "../service/youtube";
import {useLocation} from "react-router-dom";

export default function Videos() {
  const [videos, setVideos] = useState<VideosType>([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
      if (!query) {
        youtube.get(`/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US`)
          .then(res => {
            const newVideos: VideosType = [];
            res.data.items.map((item: any) => newVideos.push({
              ...item.snippet,
              thumbnails: item.snippet.thumbnails.default.url
            }));
            setVideos(newVideos);
          })
          .catch(console.log)
      } else {
        youtube.get(`/search?part=snippet&maxResults=25&q=${query}`)
          .then(res => {
            const newVideos: VideosType = [];
            res.data.items.map((item: any) => newVideos.push({
              ...item.snippet,
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
            thumbnails={item.thumbnails}
            title={item.title}
            channelTitle={item.channelTitle}
            publishedAt={item.publishedAt}
          />
        )
      }
    </main>
  );
}

type VideosType = {
  channelId: string,
  channelTitle: string,
  description: string,
  publishedAt: string,
  thumbnails: string,
  title: string
}[]