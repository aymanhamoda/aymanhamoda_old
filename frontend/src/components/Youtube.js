import React from 'react'
import youtubes from '../data/youtubes'
import Meta from './Meta'
import { Image, ListGroupItem } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'

const Youtube = ({ offMeta }) => {
  return (
    <>
      {!offMeta && <Meta title="Clinical Pharmacy Youtube" />}
      <h1>Youtube</h1>

      <div
        className="row justify-content-around"
        style={{ flexDirection: 'row' }}>
        {youtubes.map((youtube) => (
          <ListGroupItem style={{ pading: '5px' }} key={youtube._id}>
            <LinkContainer to={`youtube/${youtube.url}`}>
              <Image src={youtube.image} />
            </LinkContainer>
          </ListGroupItem>
        ))}
      </div>
      <a href="https://www.youtube.com/channel/UCX51EQqFhYolW3-Wqo1-VRQ/">
        <h3 style={{ textAlign: 'right', color: 'tomato' }}>See more ..</h3>{' '}
      </a>
    </>
  )
}

export default Youtube
