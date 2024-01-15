
import { Container, Row, Col, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Step2 = () => {
    return (
        <section className="step" id="hiw">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={6}>
                    <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "shift"}>
                                    <h2>Step 2</h2>
                                    <h3>Explore Properties</h3>
                                    <p>Dive into a world of varying real estate properties, all at your fingertips. </p>

                                </div>}
                        </TrackVisibility>

                    </Col>
                    <Col xs={12} md={6} xl={6}>
                       

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
