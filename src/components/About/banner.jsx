
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../../assets/hands.png";
import 'animate.css';
import './App.css'
import TrackVisibility from 'react-on-screen';

export const Wwa = () => {
  return (
    <section className="wwa" id="about">
      <Container>
        <Row className="aligh-items-center">
         
          <Col xs={12} md={12} xl={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>Who we are</h1>
                <h2 className="white">Your Trusted Wealth Building Partner</h2>
                  <p>We are more than just a real estate investment platform. We are your trusted partner on the journey effortless and rewarding investment journeys, ensuring your financial prosperity.</p>
                 
              </div>}
            </TrackVisibility>
            
          </Col>
        </Row>
      </Container>
    </section>
  )
}
