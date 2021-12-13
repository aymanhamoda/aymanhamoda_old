import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ReactPlayer from 'react-player'
import { Row, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap'

const YoutubePlay = ({ match }) => {
  const videoId = match.params.id
  const [video, setVideo] = useState('')
  const [activeVideo, setActiveVideo] = useState('')

  const [youtubes, setYoutubes] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    try {
      axios.get('/api/youtube').then((res) => setYoutubes(res.data.youtubes))
    } catch (error) {
      setError(error)
      setYoutubes()
    }

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
          <ReactPlayer width="500px" playing control url={activeVideo} />
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
