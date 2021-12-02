import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Meta from './Meta'
import Message from './Message'
import Loader from './Loader'

const Courses = ({ offMeta }) => {
  const [courses, setCourses] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    try {
      axios.get('/api/courses').then((res) => setCourses(res.data.courses))
    } catch (error) {
      setError(error)
      setCourses()
    }
  }, [])

  return (
    <>
      <div>
        {!courses ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            {!offMeta && (
              <Meta
                title="ICU Clinical Pharmacy Courses"
                keywords={courses.map((course) => {
                  return course.title
                })}
              />
            )}
            <h1>Courses</h1>
            <div className="row">
              {courses.map((course) => (
                <div className="col-lg-4">
                  <div
                    className="card text-white bg-info mb-3"
                    key={course._id}>
                    <div className="card-header">
                      <strong>{course.title}</strong>
                    </div>
                    <div className="card-body" style={{ textAlign: 'right' }}>
                      <p className="card-text">
                        {' '}
                        <strong>{course.description}</strong>
                      </p>

                      <a
                        className="btn btn-danger"
                        href={course.urlOffer}
                        varient="danger"
                        style={{ float: 'left' }}>
                        احصل على كوبون
                      </a>
                    </div>
                  </div>{' '}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Courses
