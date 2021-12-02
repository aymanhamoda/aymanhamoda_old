import React, { Component } from 'react'
import axios from 'axios'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'

class Promotion extends Component {
  state = {
    loading: true,
    promotions: [],
    error: '',
  }
  componentDidMount() {
    try {
      axios.get('/api/promotions').then((res) =>
        this.setState({
          promotions: res.data.promotions,
          loading: false,
          error: '',
        })
      )
    } catch (error) {
      this.setState({
        promotions: [],
        loading: false,
        error: error.message,
      })
    }
  }

  render() {
    return this.state.loading ? (
      <Loader />
    ) : this.state.error ? (
      <Message variant='danger'>{this.state.error}</Message>
    ) : (
      <Carousel pause='hover' className='bg-dark'>
        {this.state.promotions.map((promotions) => (
          <Carousel.Item key={promotions._id}>
            <Image src={promotions.image} fluid />
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

export default Promotion
