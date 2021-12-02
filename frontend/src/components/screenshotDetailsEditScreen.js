import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import Message from './Message'
import { Form, Button, ListGroupItem, ListGroup } from 'react-bootstrap'

export default function Screenshot({ match }) {
  const screenshotId = match.params.id

  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [screenshotDetails, setScreenshotDetails] = useState([])
  const [error, setError] = useState('')

  const [subtitle, setSubtitle] = useState('')
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState('')
  const [reload, setReload] = useState(1)

  useEffect(() => {
    try {
      axios
        .get(`/api/screenshots/${screenshotId}`)
        .then((res) => setTitle(res.data.screenshot.title))

      axios
        .get(`/api/screenshots/${screenshotId}`)
        .then(
          (res) => setScreenshotDetails(res.data.screenshot.details),
          setLoading(false),
          setError('')
        )
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }, [reload, screenshotId])

  const createScreenshotDetails = (e) => {
    setReload(reload + 1)
    e.preventDefault()
    axios
      .post(`/api/screenshots/${screenshotId}`, { subtitle, image, caption })
      .then((res) => console.log(res.data))
  }

  const deleteScreenshotDetails = (id) => {
    setReload(reload + 1)
    axios
      .delete(`/api/screenshots/${screenshotId}`, {
        data: {
          id,
        },
      })
      .then((res) => console.log(res.data))
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <h1>{title}</h1>
          <ListGroup className='text-black bg-info'>
            {screenshotDetails.map((details) => (
              <div>
                <ListGroupItem key={details._id}>
                  <h2>{details.subtitle}</h2>
                  <p>{details.image}</p>
                  <p>{details.caption}</p>

                  <Button onClick={() => deleteScreenshotDetails(details._id)}>
                    {' '}
                    delete
                  </Button>
                </ListGroupItem>
              </div>
            ))}
          </ListGroup>

          <h1>Add new Details</h1>
          <Form onSubmit={createScreenshotDetails}>
            <Form.Group controlId='subtitle'>
              <Form.Control
                type='name'
                placeholder='Enter new subtitle name'
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Control
                type='name'
                placeholder='Enter new image URL'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='caption'>
              <Form.Control
                type='name'
                placeholder='Enter new caption'
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </Form>
        </>
      )}
    </>
  )
}
