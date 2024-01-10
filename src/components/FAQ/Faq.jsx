import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../../assets/faq.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Faq = () => {
  return (
    <section className="faq" id="faq">
    <Container>
      <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={3}>
        <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img src={headerImg} alt="Header Img"/>
              </div>}
          </TrackVisibility>
        </Col>
        <Col xs={12} md={6} xl={8}>
        <h1>Frequently Asked Questions</h1>
                  <p>
Questions you might ask about our product</p>
                 
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Dylin</Accordion.Header>
        <Accordion.Body>
        Dylin is a real estate investment platform that allows users to buy and sell fractional ownership in real estate properties. We're committed to making real estate investment accessible to everyone.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does fractional ownership work?</Accordion.Header>
        <Accordion.Body>
        Fractional ownership means you can invest in real estate by buying a portion of a property that matches the amount you're willing to invest
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What are the benefits of investing in fractional real estate</Accordion.Header>
        <Accordion.Body>
        Investing in fractional real estate offers diversification, reduced capital requirements, and creates opportunities for rental income.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Is my investment secure with Dylin?</Accordion.Header>
        <Accordion.Body>
        Dylin is committed to security. We work to protect your investments and personal information.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>What are the returns distributed to investors?</Accordion.Header>
        <Accordion.Body>
        Returns are distributed proportionally to each investor's ownership percentage. For example, if an investor owns 10% of a property and the property generates $100,000 in rental income, the investor would receive $10,000.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What is the minimum investment amount?</Accordion.Header>
        <Accordion.Body>
        The minimum investment amount varies and is based on the value of the fraction per property. The minimum investment amount may differ for each property.        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Can i sell my fractional ownership?</Accordion.Header>
        <Accordion.Body>
        Yes, you can sell your fractional ownership at any time. Dylin offers the flexibility to manage your real estate investments as needed.   
        </Accordion.Body>
        </Accordion.Item>
    </Accordion>
          
        </Col>
      </Row>
    </Container>
  </section>
    
  );
}