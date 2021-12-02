import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion'
import Loader from './Loader'
import Message from './Message'
import { Card, Image, AccordionCollapse } from 'react-bootstrap'

const Screenshot = () => {
  const [screenshots, setScreenshots] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    try {
      axios
        .get('/api/screenshots')
        .then((res) => setScreenshots(res.data.screenshots))
    } catch (error) {
      setError(error)
      setScreenshots()
    }
  }, [error])

  return (
    <>
      {!screenshots ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Accordion>
            <Card className="text-white bg-dark mb-10">
              {screenshots.map((screenshots) => (
                <Card.Header key={screenshots._id}>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey={screenshots._id}>
                    <h2>
                      <i className="fas fa-angle-double-down"></i>
                      {'  '} {screenshots.title}
                    </h2>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={screenshots._id}>
                    <Accordion>
                      <Card className="card warning  mb-3">
                        {screenshots.details.map((details) => (
                          <Card.Title key={details._id}>
                            <Accordion.Toggle
                              as={Card.Header}
                              variant="link"
                              eventKey={details._id}
                              style={{
                                textColor: 'white',
                                backgroundColor: 'gray',
                              }}>
                              <h3>{details.subtitle}</h3>

                              <Card.Body
                                style={{
                                  color: 'black',
                                  backgroundColor: 'white',
                                }}>
                                <h3>
                                  <i className="fas fa-angle-double-down"></i>
                                  {'  '}
                                  {details.caption}
                                </h3>
                              </Card.Body>
                            </Accordion.Toggle>

                            <AccordionCollapse
                              as={Card.Header}
                              variant="link"
                              eventKey={details._id}>
                              <Image src={details.image} fluid />
                            </AccordionCollapse>
                          </Card.Title>
                        ))}
                      </Card>
                    </Accordion>
                  </Accordion.Collapse>
                </Card.Header>
              ))}
            </Card>
          </Accordion>
        </div>
      )}
    </>
  )
}
export default Screenshot
