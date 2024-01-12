
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../../assets/estate.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Estate = () => {
  return (
    <section className="estate" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : "est"}>
               <div className="divide">
                <br/>
                <h1>Real Estate Wealth, Right in Your Pocket </h1>
                <br/>
                <h3>DYLIN is designed to empower individuals in Africa with the opportunity to invest in real estate through fractional ownership</h3>
                  <br/>
                  </div>
                <h4>Effortless Real Estate Investment:</h4>
                  <p>Explore, buy, and sell properties with ease, no complex paperwork required. Manage and monitor your investments seamlessly.</p>
                  <br/>
                  <h4> Wealth-Building Revolution</h4>
                  <p>Make wealth-building a reality through property appreciation and rental income. Our user-friendly platforms democratizes real estate ownership, providing a sustainable path to financial prosperity.</p>
              </div>}
            </TrackVisibility>
        
          </Col>
          <Col xs={12} md={6} xl={4}>
         
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
