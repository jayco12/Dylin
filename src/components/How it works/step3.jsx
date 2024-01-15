
import { Container, Row, Col, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Step3 = () => {
    return (
        <section className="step" id="hiw">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={6}>


                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "shift"}>
                                    <h2>Step 3</h2>
                                    <h3>Select a Fitting Property</h3>
                                    <p>Select a property that aligns with your investment dreams. We provide all the information you need to make an informed decision. .</p>

                                </div>}
                        </TrackVisibility>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
