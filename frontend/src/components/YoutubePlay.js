import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import youtubes from '../data/youtubes'
import { Row, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap'

const YoutubePlay = ({ match }) => {
  const videoId = match.params.id
  const [video, setVideo] = useState('')
  const [activeVideo, setActiveVideo] = useState('')

  useEffect(() => {
    if (!video) {
      setActiveVideo(videoId)
    } else {
      setActiveVideo(video)
    }
  }, [video, videoId])

  return (
    <Row>
      <Col>
        <ListGroupItem>
          <ReactPlayer
            width="500px"
            playing
            control
            url={`https://www.youtube.com/watch?v=${activeVideo} `}
          />
        </ListGroupItem>
      </Col>
      <Col>
        <h1>See also</h1>
        {youtubes.map((youtube) => (
          <ListGroup
            key={youtube._id}
            style={{ padding: '10px', objectFit: 'fill' }}>
            <Image
              onClick={() => setVideo(youtube.url)}
              src={youtube.image}
              fluid
            />
          </ListGroup>
        ))}
      </Col>
    </Row>
  )
}

export default YoutubePlay
