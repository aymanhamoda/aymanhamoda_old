import React from 'react'
import { useState } from 'react'
import { Button, Modal, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { useSelector } from 'react-redux'

const FilePreview = ({ fileToPreview, handleClose, show, admin }) => {
  const deleteFile = () => {
    axios.get(`/api/delete?filePath=${fileToPreview}`)
    handleClose()
  }

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}>
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
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        {admin && (
          <Button variant="primary" type="submit" onClick={() => deleteFile()}>
            Delete file
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default FilePreview
