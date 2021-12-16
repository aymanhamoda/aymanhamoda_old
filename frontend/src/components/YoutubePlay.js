import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import FilePreview from './FilePreview'
import { Row, Col, Image, ListGroup } from 'react-bootstrap'

const YoutubePlay = ({ match }) => {
  const videoId = match.params.id

  const [activeVideo, setActiveVideo] = useState(videoId)
  const [youtubes, setYoutubes] = useState([])
  const [error, setError] = useState('')
  const [show, setShow] = useState(true)
  const [admin, setAdmin] = useState(false)
  const [media, setMedia] = useState(false)
  const [fileToPreview, setFileToPreview] = useState('')
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const handleClose = () => {
    setShow(false)
    setActiveVideo('')
  }

  const previewVideo = (e) => {
    setFileToPreview(e.url)
    setMedia(e)
    setShow(true)
  }
  useEffect(() => {
    // get all videos

    try {
      axios.get('/api/youtube').then((res) => setYoutubes(res.data.youtubes))
    } catch (error) {
      setError(error)
      setYoutubes([])
    }

    //get video ID url
    try {
      axios.get(`/api/youtube/${activeVideo}`).then((res) => setMedia(res.data))
    } catch (error) {
      setError(error)
      setYoutubes([])
    }

    if (userInfo) {
      if (userInfo.isAdmin) {
        setAdmin(true)
      }
    }
  }, [videoId, activeVideo])

  return (
    <Row>
      <Col>
        <FilePreview
          handleClose={handleClose}
          fileToPreview={fileToPreview}
          media={media}
          show={show}
          admin={admin}
        />

        <h1>See also</h1>
        {youtubes.map((youtube) => (
          <div
            className="row justify-content-around"
            style={{ flexDirection: 'row' }}>
            <ListGroup key={youtube._id} style={{ padding: '10px' }}>
              <Image
                onClick={() => previewVideo(youtube)}
                src={youtube.image}
              />
            </ListGroup>
          </div>
        ))}
      </Col>
    </Row>
  )
}

export default YoutubePlay
