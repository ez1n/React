import React from 'react';

interface PropsType {
  thumbnails: string,
  title: string,
  channelTitle: string,
  publishedAt: string
}

export default function Video (props: PropsType) {
  return (
    <section className='cursor-pointer transition duration-700 hover:scale-102'>
      <img src={props.thumbnails} alt={props.title} className='w-full h-40'/>
      <p className='text-zinc-200 text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis'>{props.title}</p>
      <p className='text-gray-400 text-sm'>{props.channelTitle}</p>
      <p className='text-gray-400 text-xs'>{props.publishedAt}</p>
    </section>
  );
};