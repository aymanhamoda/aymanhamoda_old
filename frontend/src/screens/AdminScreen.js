import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import Upload from '../components/Upload'

const AdminScreen = () => {
  const [files, setFiles] = useState([])
  const [folderName, setFolderName] = useState('')

  const handleFolderName = (f) => {
    if (folderName) {
      setFolderName(`${folderName}/${f}`)
    } else {
      setFolderName(f)
    }
  }

  useEffect(() => {
    axios
      .get(`/api/uploadedfiles?folderPath=${folderName}`)
      .then((res) => setFiles(res.data))
  }, [folderName])

  return (
    <>
      <h1>Current Folder: {!folderName ? 'uploads' : folderName} </h1>
      <Button variant="success" onClick={() => setFolderName('')}>
        Back
      </Button>
      {files.map((f) => (
        <div key={f}>
          {f.search(/\./) > 0 ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="list-group-item list-group-item-action flex-column align-items-start"
              href={
                folderName
                  ? `https://localhost:3500/uploads/${folderName}/${f}`
                  : `http://localhost:3500/uploads/${f}`
              }
              style={{
                textDecoration: 'underline',
                color: 'blue',
                borderColor: 'black',
                margin: '5px',
              }}>
              <h4 className="mb-1">{f} </h4>
            </a>
          ) : (
            <a
              className="list-group-item list-group-item-action flex-column align-items-start"
              onClick={() => handleFolderName(f)}
              style={{
                textDecoration: 'underline',
                color: 'red',
                borderColor: 'black',
                margin: '5px',
              }}>
              <h4 className="mb-1">{f} </h4>
            </a>
          )}
        </div>
      ))}
      <>
        <Upload uploadTo={folderName} />
      </>
    </>
  )
}

export default AdminScreen
