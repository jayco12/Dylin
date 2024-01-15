
import { Container, Row, Col, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Step6 = () => {
    return (
        <section className="step" id="hiw">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={6}>
                    <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "shift"}>
                                    <h2>Step 6</h2>
                                    <h3>Enjoy Returns</h3>
                                    <p>As your investments appreciate and potential rental income flows in, you'll be reaping the rewards of your real estate journey. </p>

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
