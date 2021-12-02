import React from 'react'
import Meta from '../components/Meta'
import Youtube from '../components/Youtube'
import Promotion from '../components/Promotion'
import Courses from '../components/Courses'

const HomeScreen = () => {
  return (
    <>
      <Meta />
      <Promotion />
      <Youtube offMeta="true" />
      <Courses offMeta="true" />
    </>
  )
}

export default HomeScreen
