import React, { useState, useEffect } from 'react'
import { Button, Modal, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player'

const FilePreview = ({ fileToPreview, handleClose }) => {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>{fileToPreview}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {fileToPreview.search(/\.mp4/) > 0 ? (
          <ReactPlayer url={fileToPreview} playing controls width="100%" />
        ) : (
          <Image src={fileToPreview} fluid />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Update Changes
        </Button>
      </Modal.Footer>
    </div>
  )
}

export default FilePreview
