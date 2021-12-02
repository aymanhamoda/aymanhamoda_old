import React from 'react'
import {
  Form,
  Modal,
  Row,
  Col,
  Image,
  Container,
  FormGroup,
  Button,
  FormLabel,
  Alert,
  ButtonToolbar,
} from 'react-bootstrap'

export const Posts = () => {
  return (
    <div>
      {/* <!-- Main --> */}
      <section>
        <header
          style={{
            color: ' #545454',
            textAlign: 'center',
            marginTop: '1.5em',
            lineHeight: '1.5em',
          }}>
          <h2
            style={{
              fontSize: '2.5em',
              fontWeight: 700,
              letterSpacing: '-0.01em',
            }}>
            My Posts
          </h2>
          <p
            style={{
              fontSize: '1.5em',
              color: '#949494',
              position: 'relative',
            }}>
            Shortcuts to ICU pharmacotherapy tips.
          </p>
        </header>

        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            minWidth: '1200px',
            width: '1200px',
          }}>
          <Row>
            <Col>
              <div>
                {/* <!-- Content --> */}

                <div id="content">
                  <Image
                    fluid
                    style={{ borderRadius: '0.5em' }}
                    src="/images/slide03.jpg"
                    alt=""
                  />

                  <h3>Heading New</h3>
                  <p>
                    Aliquam massa urna, imperdiet sit amet mi non, bibendum
                    euismod est. Curabitur mi justo, tincidunt vel eros
                    ullamcorper, porta cursus justo. Cras vel neque eros.
                    Vestibulum diam quam, mollis at magna consectetur non,
                    malesuada quis augue. Morbi tincidunt pretium interdum est.
                    Curabitur mi justo, tincidunt vel eros ullamcorper, porta
                    cursus justo. Cras vel neque eros. Vestibulum diam.
                  </p>
                  <h3>Sed Magna Ornare</h3>
                  <p>
                    In vestibulum massa quis arcu lobortis tempus. Nam pretium
                    arcu in odio vulputate luctus. Suspendisse euismod lorem
                    eget lacinia fringilla. Sed sed felis justo. Nunc sodales
                    elit in laoreet aliquam. Nam gravida, nisl sit amet iaculis
                    porttitor, risus nisi rutrum metus.
                  </p>
                  <ul>
                    <li>Faucibus orci lobortis ac adipiscing integer.</li>
                    <li>Col accumsan arcu mi aliquet placerat.</li>
                    <li>Lobortis vestibulum ut magna tempor massa nascetur.</li>
                    <li>Blandit massa non blandit tempor interdum.</li>
                    <li>Lacinia mattis arcu nascetur lobortis.</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col>
              {/* <!-- Sidebar --> */}
              <section id="sidebar">
                <section>
                  <h3>Side Bar</h3>
                  <p>
                    Sed tristique purus vitae volutpat commodo suscipit amet sed
                    nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                    vitae volutpat commodo suscipit ullamcorper commodo suscipit
                    amet sed nibh. Proin a ullamcorper sed blandit..
                  </p>
                  <footer>
                    <ul>
                      <li>
                        <a href="#">Learn More</a>
                      </li>
                    </ul>
                  </footer>
                </section>
                <hr />
                <section>
                  <a href="#">
                    <img src="/images/pic03.jpg" alt="" />
                  </a>
                  <h3>Amet Lorem Tempus</h3>
                  <p>
                    Sed tristique purus vitae volutpat commodo suscipit amet sed
                    nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                    vitae volutpat commodo suscipit ullamcorper sed blandit
                    lorem ipsum dolore.
                  </p>
                  <footer>
                    <ul className="actions">
                      <li>
                        <a href="#">Learn More</a>
                      </li>
                    </ul>
                  </footer>
                </section>
              </section>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )
}

export default Posts
