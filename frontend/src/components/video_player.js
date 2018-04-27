import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
    render(){
        return(
           <ReactPlayer url='http://youtu.be/9gtXFJLVGcU?t=2s' playing width='auto'
           height='102.5vh' muted={true} loop={true}
           config={{
            youtube: { 
                preload: true }}}/>
        )
    }
}

export default VideoPlayer 