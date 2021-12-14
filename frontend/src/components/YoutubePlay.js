import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import { Row, Col, Image, ListGroupItem } from 'react-bootstrap'

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

        <h1>See also</h1>
        {youtubes.map((youtube) => (
          <ListGroupItem key={youtube._id} style={{ padding: '10px' }}>
            <Image
              onClick={() => setVideo(youtube._id)}
              src={youtube.image}
              fluid
            />
          </ListGroupItem>
        ))}
      </Col>
    </Row>
  )
}

export default YoutubePlay
