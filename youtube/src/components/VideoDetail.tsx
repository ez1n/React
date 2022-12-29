import React, {useEffect} from 'react';
import {useRecoilState, useSetRecoilState} from "recoil";
import {currentVideoState, videoState, VideosType} from "../recoil/video";
import {useLocation} from "react-router-dom";
import {youtube} from "../service/youtube";

export default function VideoDetail() {
  const [currentVideo, setCurrentVideo] = useRecoilState(currentVideoState);
  const setVideos = useSetRecoilState(videoState);
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

    youtube.get(`/search?type=video&relatedToVideoId=${videoId}&maxResults=25`)
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
    <>
      <iframe
        width="100%"
        height="500"
        id="player"
        src={currentVideo.url}
      />

      <section className='mt-5'>
        <p className='flex-wrap m-3 text-3xl text-white font-bold whitespace-pre-wrap'>{currentVideo.title}</p>
        <p className='flex-wrap m-3 text-xl text-white'>{currentVideo.channelTitle}</p>
        <p className='flex-wrap m-3 text-white whitespace-pre-wrap'>{currentVideo.description}</p>
      </section>
    </>
  );
}

