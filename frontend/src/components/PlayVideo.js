import React from 'react'
import ReactPlayer from 'react-player'

export const PlayVideo = () => {
  return (
    <div>
      <ReactPlayer url="/uploads/calc.mp4" playing controls width="100%" />
    </div>
  )
}
