
import { Container, Row, Col, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Step1 = () => {
    return (
        <section className="step" id="hiw">
            <Container>
                <h1 className="center">How Dylin Works</h1>
                <p className="center">We've made real estate investing easy for everyone. 
In just a matter of minutes, you can embark on your investment journey with us.</p>
<br/>
<br/>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={6}>


                    </Col>
                    <Col xs={12} md={6} xl={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "shift"}>
                                    <h2>Step 1</h2>
                                    <h3>Kick things off by creating your
                                        account</h3>
                                    <p>Create your Dylin account with a simple sign-up process, beginning your journey to real estate investment.</p>

                                </div>}
                        </TrackVisibility>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
