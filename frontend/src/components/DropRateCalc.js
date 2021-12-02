import React, { useState } from 'react'
import { Howl, Howler } from 'howler'
import { Row, Col, Container } from 'react-bootstrap'
import CountSound from '../sounds/clock-ticking.mp3'

const DropRateCalc = () => {
  const [status, setStatus] = useState('Click start at any drop')
  const [rate, setRate] = useState(0)
  const [time, setTime] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const Sound = new Howl({
    src: CountSound,
    loop: true,
    volume: 2,
  })

  const startCount = () => {
    if (
      status === 'Click start at any drop' ||
      status === 'Ready for restart'
    ) {
      setStatus('Count 6 drops after first drop then click end')
      Sound.play()
      setInterval(() => {
        setSeconds((seconds) => seconds + 0.1)
      }, 100)
    }
  }

  const endCount = () => {
    Howler.volume(0)
    if (status === 'Count 6 drops after first drop then click end') {
      setStatus('Finish')
      setTime(seconds)
      setRate(1080 / seconds)
    }
  }

  const resetCount = () => {
    window.location.reload()
  }

  return (
    <>
      <Container>
        <Col className='text-center py-6'>
          <h1 style={{ color: 'tomato' }}>{status}</h1>
        </Col>
        <Row className='text-center py-6'>
          <Col className='text-center py-6'>
            <h1>
              {status === 'Finish' || status === 'Ready for restart'
                ? time.toFixed(2)
                : seconds.toFixed(2)}{' '}
              seconds
            </h1>
          </Col>
        </Row>

        <Row>
          <Col className='text-center py-6'>
            <button
              className='btn btn-primary'
              style={{ width: 100 }}
              onClick={startCount}
            >
              <h1>Start</h1>
            </button>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            <button
              className='btn btn-success'
              style={{ width: 100 }}
              onClick={endCount}
            >
              <h1>End</h1>
            </button>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3'>
            <button
              className='btn btn-info'
              style={{ width: 100 }}
              onClick={resetCount}
            >
              <h1>Reset</h1>
            </button>
          </Col>
        </Row>
        <Col className='text-center py-3'>
          <h1>Rate is {rate.toFixed(2)} ml/hr </h1>
        </Col>
      </Container>
    </>
  )
}

export default DropRateCalc
