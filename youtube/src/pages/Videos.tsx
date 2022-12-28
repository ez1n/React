import React, {useEffect, useState} from 'react';
import Video from "../components/Video";
import {youtube} from "../service/youtube";

export default function Videos() {
  const [videos, setVideos] = useState<VideosType>([]);

  useEffect(() => {
      youtube.get(`/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
          res.data.items.map((item: any) => setVideos(prev => [...prev, {
            ...item.snippet,
            id: item.id,
            thumbnails: item.snippet.thumbnails.default.url
          }]))
        })
        .catch(console.log)
    },
    []);

  return (
    <main className='grid grid-cols-5 gap-3 p-2 overflow-auto'>
      {
        videos.map(item =>
          <Video
            key={item.id}
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
  id: string,
  channelId: string,
  channelTitle: string,
  description: string,
  publishedAt: string,
  thumbnails: string,
  title: string
}[]