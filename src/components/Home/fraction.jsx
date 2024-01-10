
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../../assets/frac.png";
import fraction from "../../assets/fraction.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Fraction = () => {
  return (
    <section className="fraction" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <img src={fraction} alt="Header Img"/>
                  <p>Easily Secure Your Fraction of Income-Generating Real Estate with DYLIN. The Hassle-Free Path to Confident and Peaceful Real Estate Investment</p>
                 
              </div>}
            </TrackVisibility>
        
          </Col>
          <Col xs={12} md={6} xl={7}>
       
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
