import { Container, Row, Col } from "react-bootstrap";
import scale from "../../assets/scale.png";
import ppl from "../../assets/ppl.png";
import key from "../../assets/key.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Grow = () => {
  return (
    <section className="grow" id="home">
      <Container>
        <h2 className="era"> A new era of real estate investment</h2>
        <Row className="align-items-center">
          <Col xs={12} md={4} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn card" : "card"}>
                  <Row>
                    <Col xs={12} md={6} xl={3}>
                      <img src={key} alt="Header Img" />
                    </Col>
                    <Col xs={12} md={6} xl={9}>
                      <div className="card-content">
                        <h1>Simplified Investing
                        </h1>
                        <p>We are dedicated to making your investment journey effortless and rewarding. We offer you the opportunity to invest in real estate with ease and confidence.</p>
                      </div>
                    </Col>
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn card" : "card"}>

                  <Row>
                    <Col xs={12} md={6} xl={3}>
                      <img src={scale} alt="Header Img" />
                    </Col>
                    <Col xs={12} md={6} xl={9}>
                      <div className="card-content">
                        <h1>Innovative Accesibility </h1>
                        <p>
                          We've leveraged technology to eliminate complex paperwork, making it easy for you to invest, buy, and sell properties with just a few taps</p>
                      </div>
                    </Col>
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={4}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn card" : "card"}>
                  <Row>
                    <Col xs={12} md={6} xl={3}>
                      <img src={ppl} alt="Header Img" />
                    </Col>
                    <Col xs={12} md={6} xl={9}>
                      <div className="card-content">
                        <h1>Community Impact </h1>
                        <p>We've leveraged technology to eliminate complex paperwork, making it easy for you to invest, buy, and sell properties with just a few taps</p>
                      </div>
                    </Col>
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

{/* <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>Build a Wealthier Future, One Fraction at a Time </h1>
                  <p>We are dedicated to making your investment journey effortless and rewarding. We offer you the opportunity to invest in real estate with ease and confidence.</p>
                 
              </div>}
            </TrackVisibility>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility> */}