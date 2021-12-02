import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { LinkContainer } from 'react-router-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { Form, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function Screenshot() {
  const [loading, setLoading] = useState(true)
  const [screenshots, setScreenshots] = useState([])
  const [error, setError] = useState('')

  const [title, setTitle] = useState('')

  useEffect(() => {
    try {
      axios
        .get('/api/screenshots')
        .then(
          (res) => setScreenshots(res.data.screenshots),
          setLoading(false),
          setError('')
        )
    } catch (error) {
      setLoading(false)
      setError(error)
      setScreenshots([])
    }
  }, [{ title }])

  const createScreenshotTitle = (e) => {
    e.preventDefault()
    axios
      .post('/api/screenshots', { title })
      .then((res) => console.log(res.data))
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className='col'>
          {screenshots.map((screenshots) => (
            <div key={screenshots._id}>
              <LinkContainer to={`/6180/screenshots/edit/${screenshots._id}`}>
                <ListGroup className=' text-black bg-info mb-3'>
                  <ListGroupItem className='d-flex justify-content-between align-items-center'>
                    <h2>{screenshots.title}</h2>
                  </ListGroupItem>
                </ListGroup>
              </LinkContainer>
            </div>
          ))}
          <Form onSubmit={createScreenshotTitle}>
            <Form.Group controlId='title'>
              <Form.Control
                type='name'
                placeholder='Enter new Title name'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Submit
            </Button>
          </Form>
        </div>
      )}
    </>
  )
}
