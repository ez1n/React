import React, {useEffect} from 'react';
import VideoDetail from "../components/VideoDetail";
import Video from "../components/Video";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {currentVideoState, videoState, VideosType} from "../recoil/video";
import {youtube} from "../service/youtube";
import {useLocation} from "react-router-dom";

export default function Watch() {
  const [videos, setVideos] = useRecoilState(videoState);
  const setCurrentVideo = useSetRecoilState(currentVideoState);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const videoId = params.get('v');

  useEffect(() => {
    youtube.get(`/videos?id=${videoId}`)
      .then(res => {
        const v = res.data.items[0];
        setCurrentVideo({
          id: v.id,
          url: `http://www.youtube.com/embed/${v.id}`,
          title: v.snippet.title,
          channelTitle: v.snippet.channelTitle,
          description: v.snippet.description
        })
      })
      .catch(console.log)

    youtube.get(`/search?type=video&relatedToVideoId=${videoId}&maxResults=10`)
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
  }, [videoId]);

  return (
    <div className='flex w-full max-w-7xl box-border'>
      <section className='w-0.6 m-2'>
        <VideoDetail/>
      </section>

      <ol className='grid grid-rows-1 gap-3 w-0.4 m-2'>
        {videos.map((item, index) =>
          <Video
            key={index}
            type={true}
            id={item.id}
            thumbnails={item.thumbnails}
            title={item.title}
            description={item.description}
            channelTitle={item.channelTitle}
            publishedAt={item.publishedAt}
          />
          )}
      </ol>
    </div>
  );
}

