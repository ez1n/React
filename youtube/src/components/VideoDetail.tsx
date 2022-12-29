import React from 'react';
import {useRecoilValue} from "recoil";
import {currentVideoState} from "../recoil/video";

export default function VideoDetail() {
  const currentVideo = useRecoilValue(currentVideoState);

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

