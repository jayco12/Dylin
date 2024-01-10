import { Container, Row, Col } from "react-bootstrap";
import facebook from "../../assets/facebook.svg";
import x from "../../assets/x.svg";
import navIcon3 from "../../assets/nav-icon3.svg"
import logo from "../../assets/logo-.png"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
          <Row>
          <a href="#home" ><img src={logo} alt="" className="logo"/></a>
          <div className="social-icon">
              <a href="https://www.facebook.com/GHCCGLOBAL"><img src={facebook} alt="Icon" /></a>
              <a href="https://twitter.com/ghccofficial"><img src={x} alt="Icon" /></a>
              <a href="https://www.instagram.com/ghccglobal/"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Row>   
            </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <Row>
              <h4>Legal</h4>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Disclaimer</p>
            </Row>
           
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
          <Row>
              <h4>Company</h4>
            <p>Home</p>
            <p>About us</p>
            <p>FAQS</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}