import React, { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import Meta from './Meta'
import {
  Form,
  Modal,
  Row,
  Col,
  Container,
  FormGroup,
  Button,
  FormLabel,
  Alert,
  ButtonToolbar,
} from 'react-bootstrap'

import drugs from '../data/drugs'
import rateUnits from '../data/rateUnits'

import { Link } from 'react-router-dom'
import FilePreview from './FilePreview'

const RateCalc = () => {
  //extract drug name into Meta keywords
  const drugName = drugs.map((drug) => {
    return drug.label
  })

  const [drug, setDrug] = useState('')
  const [weight, setWeight] = useState('')
  const [inputRateUnit, setInputRateUnit] = useState('')
  const [ampNo, setAmpNo] = useState('')
  const [totalVolume, setTotalVolume] = useState('')
  const [rate, setRate] = useState('')
  const [mgContent, setMgContent] = useState(0)
  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [answer3, setAnswer3] = useState('')

  const [show, setShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }

  const calc = (e) => {
    e.preventDefault()
    if (answer1 || answer2 || answer3) {
      setAnswer1('')
      setAnswer2('')
      setAnswer3('')
    }
    if (!weight || !rate || !inputRateUnit || !drug || !ampNo || !totalVolume) {
      alert('All cells are required')
    } else {
      if (inputRateUnit === 'ml/hr') {
        setAnswer1(
          `Rate is ${(
            (ampNo * mgContent * rate) /
            totalVolume /
            weight
          ).toFixed(2)} mg/kg/hr`
        )
        setAnswer2(
          `Rate is ${((ampNo * mgContent * rate) / totalVolume).toFixed(
            2
          )} mg/hr`
        )
        setAnswer3(
          `Patient needs ${((ampNo * 24 * rate) / totalVolume).toFixed(
            2
          )} amp per day`
        )
      }

      if (inputRateUnit === 'mg/hr') {
        setAnswer1(
          `Rate is ${(
            (totalVolume * rate) /
            ampNo /
            mgContent /
            weight
          ).toFixed(2)} ml/kg/hr`
        )
        setAnswer2(
          `Rate is ${((totalVolume * rate) / ampNo / mgContent).toFixed(
            2
          )} ml/hr`
        )
        setAnswer3(
          `Patient needs ${((ampNo * 24 * rate) / mgContent).toFixed(
            2
          )} amp per day`
        )
      }

      if (inputRateUnit === 'mcg/kg/hr') {
        setAnswer1(
          `Rate is ${
            (rate * weight * totalVolume) / 1000 / mgContent / ampNo
          } ml/hr`
        )
      }
      if (inputRateUnit === 'mcg/kg/min') {
        setAnswer1(
          `Rate is ${(
            (rate * weight * totalVolume * 60) /
            mgContent /
            ampNo /
            1000
          ).toFixed(2)} ml/hr`
        )
      }
      if (inputRateUnit === 'mg/kg/hr') {
        setAnswer1(
          `Rate is ${(
            (rate * weight * totalVolume) /
            mgContent /
            ampNo
          ).toFixed(2)} ml/hr`
        )
      }
      if (inputRateUnit === 'mcg/min') {
        setAnswer1(
          `Rate is ${(
            (rate * 60 * totalVolume) /
            mgContent /
            ampNo /
            1000
          ).toFixed(2)} ml/hr`
        )
      }
    }
  }

  const Reset = () => {
    window.location.reload()
  }

  const handleDrug = (e) => {
    if (e.length !== 0) {
      setDrug(e['0'].label)
      setMgContent(e['0'].mg)
    }
  }

  return (
    <>
      <Meta
        title="Infusion Rate Converter"
        description="a simple tool to convert infusion rate units of specific drug to each other "
        keywords={drugName}
      />
      <FilePreview
        fileToPreview="/uploads/freeVideos/calc.mp4"
        show={show}
        handleClose={handleClose}
      />
      <Row>
        <Col>
          <h1>Infusion Rate Converter </h1>
        </Col>
        <Col style={{ textAlign: 'right' }}>
          <Link onClick={() => setShow(true)} style={{ color: 'green' }}>
            <h3>How?</h3>
          </Link>
        </Col>
      </Row>

      <Container>
        <Form>
          <FormGroup>
            <FormLabel style={{ fontWeight: 'bold' }}>
              Medication Name
            </FormLabel>
            <Typeahead
              placeholder="Enter Medication"
              options={drugs}
              onChange={(e) => handleDrug(e)}
              name="drug"
              id="basic-example"
              data-id={drugs.id}
            />
          </FormGroup>

          <Form>
            <Row>
              <Col>
                <Form.Group controlId="rate">
                  <FormLabel style={{ fontWeight: 'bold' }}>Rate</FormLabel>
                  <Form.Control
                    type="number"
                    placeholder="Enter Rate"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <FormGroup>
                  <FormLabel style={{ fontWeight: 'bold' }}>
                    Infusion Rate Unit
                  </FormLabel>
                  <select
                    className="custom-select"
                    type="name"
                    value={inputRateUnit}
                    onChange={(e) => setInputRateUnit(e.target.value)}>
                    {rateUnits.map((rateUnit) => (
                      <option value={rateUnit.id} disabled={rateUnit.disabled}>
                        {rateUnit.label}
                      </option>
                    ))}
                  </select>
                </FormGroup>
              </Col>
            </Row>
          </Form>

          <FormGroup>
            <Form.Group controlId="rateMg">
              <FormLabel style={{ fontWeight: 'bold' }}>Weight(kg)</FormLabel>
              <Form.Control
                type="number"
                placeholder="Enter Patient Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}></Form.Control>
            </Form.Group>
          </FormGroup>

          <Row>
            <Col>
              <Form.Group controlId="ampNo">
                <FormLabel style={{ fontWeight: 'bold' }}>
                  No. of amp. in total volume
                </FormLabel>
                <Form.Control
                  type="number"
                  placeholder="Enter Number of Ampoules"
                  value={ampNo}
                  onChange={(e) => setAmpNo(e.target.value)}></Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="ampNo">
                <FormLabel style={{ fontWeight: 'bold' }}>
                  Total Volume (ml)
                </FormLabel>
                <Form.Control
                  type="number"
                  placeholder="Enter total volume (ml)"
                  value={totalVolume}
                  onChange={(e) =>
                    setTotalVolume(e.target.value)
                  }></Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <ButtonToolbar style={{ float: 'right' }}>
            <Button
              style={{ float: 'right' }}
              onClick={calc}
              className="btn btn-success mr-2">
              Calculate
            </Button>

            <Button
              style={{ float: 'right' }}
              onClick={Reset}
              className="btn btn-warning mr-2">
              Reset
            </Button>
          </ButtonToolbar>
        </Form>

        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>

        {answer1 && (
          <Alert className="alert-dismissible alert-info">{answer1}</Alert>
        )}
        {answer2 && (
          <Alert className="alert-dismissible alert-success">{answer2}</Alert>
        )}

        {answer3 && (
          <Alert className="alert-dismissible alert-warning">{answer3}</Alert>
        )}
      </Container>
    </>
  )
}

export default RateCalc
