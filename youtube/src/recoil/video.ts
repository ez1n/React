import {atom} from "recoil";

export const videoState = atom({
  key: 'videoState',
  default: <VideosType>[]
})

export const currentVideoState = atom({
  key: 'currentVideoState',
  default: <VideoType>{}
})

export type VideosType = {
  id: string,
  channelId: string,
  channelTitle: string,
  description: string,
  publishedAt: string,
  thumbnails: string,
  title: string
}[]

export type VideoType = {
  id: string,
  url: string,
  title: string,
  channelTitle: string,
  description: string
}