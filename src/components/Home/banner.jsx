import { useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../../assets/banner.png";
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [activeLink, setActiveLink] = useState('/');
    const navigate = useNavigate();
  return (
    <section className="banner" id="home">
      <Container>
      <span className="tagline"> Coming soon</span>
        <Row className="aligh-items-center">
       
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <h1>Empowering Every African to Own a Piece of Real Estate </h1>
                  <p>Your Path to Fractional Property Ownership</p>
                  <Button
              variant="outline-light"
              className={`waitlist-button ${activeLink === 'waitlist' ? 'active' : ''}`}
              onClick={() => {
                setActiveLink('/waitlist');
                navigate('/waitlist');
              }}
            >
              Join the waitlist
            </Button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className="banimg">
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
                </div>
                }
                
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
