import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import DropRateCalc from './components/DropRateCalc'
import HomeScreen from './screens/HomeScreen'
import AdminScreen from './screens/AdminScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import Youtube from './components/Youtube'
import YoutubePlay from './components/YoutubePlay'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import Screenshot from './components/Screenshot'
import screenshotEditScreen from './components/screenshotEditScreen'
import screenshotDetailsEditScreen from './components/screenshotDetailsEditScreen'
import About from './screens/About'
import RateCalc from './components/RateCalc'
import Posts from './screens/Posts'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/home" component={HomeScreen} />
          <Route path="/about" component={About} />

          <Route path="/admin" component={AdminScreen} />

          <Route path="/posts" component={Posts} />

          <Route path="/youtubes" component={Youtube} />
          <Route path="/youtube/:id" component={YoutubePlay} />

          <Route path="/register" component={RegisterScreen} />
          <Route path="/login" component={LoginScreen} />

          <Route path="/dropcalc" component={DropRateCalc} />
          <Route path="/ratecalc" component={RateCalc} />

          <Route path="/courses" component={Courses} exact />
          <Route path="/courses/:id" component={CourseDetails} />

          <Route path="/screenshots" component={Screenshot} exact />
          <Route
            path="/6180/screenshots/edit"
            component={screenshotEditScreen}
            exact
          />
          <Route
            path="/6180/screenshots/edit/:id"
            component={screenshotDetailsEditScreen}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
