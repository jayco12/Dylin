
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../../assets/group.png";
import 'animate.css';
import './App.css'
import TrackVisibility from 'react-on-screen';

export const Mission = () => {
  return (
    <section className="mission" id="about">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>Our Mission:</h1>
               
                  <p>We're on a mission to revolutionize real estate investment, one fraction at a time. We are dedicated to making real estate accessible to real people. We firmly believe that the path to wealth building should be open to all, and we're here to help you take those crucial steps.</p>
                 
              </div>}
            </TrackVisibility>
       
          </Col>
          <Col xs={12} md={6} xl={6}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}
