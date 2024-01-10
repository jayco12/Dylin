
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../../assets/grow.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Grow = () => {
  return (
    <section className="grow" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={6}>
          <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>Build a Wealthier Future, One Fraction at a Time </h1>
                  <p>We are dedicated to making your investment journey effortless and rewarding. We offer you the opportunity to invest in real estate with ease and confidence.</p>
                 
              </div>}
            </TrackVisibility>
            
          </Col>
          <p className="era"> A new era of real estate investment</p>
        </Row>
      </Container>
    </section>
  )
}
