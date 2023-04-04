import React from "react";

import VideoItem from "./VideoItem";
import * as api from "../../services/api";

import './VideoList.scss';

function VideoList(props) {
  let videoList = api.getVideoList();

  return (<ul className="box-container">
    {videoList.map((video,index)=>(
      <VideoItem key={video.video_id}
      title ={video.title} 
      thumbnail={video.thumb_img}  
      channelId={video.channelId}
      channelTitle={video.channel_title} 
      videoId={video.video_id}
      profileImg={video.profile_img} 
      viewCount = {video.view_count} 
      createdTime = {video.created_time}/>
    ))}
  </ul>);
}

export default VideoList;