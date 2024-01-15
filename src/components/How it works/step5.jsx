
import { Container, Row, Col, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Step5 = () => {
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
                                    <h2>Step 5</h2>
                                    <h3>Monitor and Manage Portfolio</h3>
                                    <p>Once you've purchased fractions, take the reins. Manage and monitor your portfolio effortlessly with our user-friendly tools.</p>

                                </div>}
                        </TrackVisibility>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
