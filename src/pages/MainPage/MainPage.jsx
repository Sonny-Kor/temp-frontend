import React from 'react';

import VideoList from "./VideoList";
import Header from "../../common/Header/Header"
function MainPage(props) {
  return <div className="MainPage">
    <Header/>
    <VideoList />
  </div>;
}


export default MainPage;