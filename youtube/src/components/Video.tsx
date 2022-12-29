import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

interface PropsType {
  type?: boolean,
  id: string,
  thumbnails: string,
  title: string,
  description: string,
  channelTitle: string,
  publishedAt: string
}

export default function Video(props: PropsType) {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  const clickVideo = () => {
    navigate(`/watch?${query ? `q=${query}&` : ''}v=${props.id}`);
  }

  return (
    <li onClick={clickVideo} className={`${props.type && 'flex'} w-full cursor-pointer transition duration-700 hover:scale-102`}>
      <img src={props.thumbnails} alt={props.title} className={`${props.type ? 'w-0.4': 'w-full'} h-40`}/>
      <div className='m-2'>
        <p className={`text-zinc-200 text-lg font-bold overflow-hidden text-ellipsis ${props.type ? 'leading-6 h-12' : 'whitespace-nowrap'}`}>{props.title}</p>
        <p className='text-gray-400 text-sm overflow-hidden text-ellipsis whitespace-nowrap'>{props.channelTitle}</p>
        <p className='text-gray-400 text-xs'>{props.publishedAt}</p>
      </div>
    </li>
  );
};