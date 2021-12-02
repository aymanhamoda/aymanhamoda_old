import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Nav.Link>
                <Image src={'/images/logo.png'} fluid />
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Navbar.Brand> {'  '}Ayman Hamoda</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/youtubes">
                  <Nav.Link>
                    <i className="fas fa-play"></i> Youtube
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/courses">
                  <Nav.Link>
                    <i
                      style={{ color: 'tomato' }}
                      className="fas fa-shopping-cart"></i>{' '}
                    Courses
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/ratecalc">
                  <Nav.Link>
                    <i className="fas fa-calculator"></i> Calc.
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/screenshots">
                  <Nav.Link>
                    <i className="fas fa-copy"></i> Screenshots
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link>
                    <i className="fas fa-user"></i> About
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header
