import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Meta from './Meta'
import { Image, ListGroupItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Loader from './Loader'

const Youtube = ({ offMeta }) => {
  const [youtubes, setYoutubes] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    try {
      axios.get('/api/youtube').then((res) => setYoutubes(res.data.youtubes))
    } catch (error) {
      setError(error)
      setYoutubes()
    }
  }, [error])
  return (
    <>
      {!offMeta && <Meta title="Clinical Pharmacy Youtube" />}
      <h1>Youtube</h1>
      {!youtubes ? (
        <Loader />
      ) : (
        <div
          className="row justify-content-around"
          style={{ flexDirection: 'row' }}>
          {youtubes.map((youtube) => (
            <ListGroupItem style={{ pading: '5px' }} key={youtube._id}>
              <LinkContainer to={`youtube/${youtube._id}`}>
                <Image src={youtube.image} />
              </LinkContainer>
            </ListGroupItem>
          ))}
        </div>
      )}
    </>
  )
}

export default Youtube
