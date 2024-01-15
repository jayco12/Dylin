import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

export const SignUp = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
    refferal: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Create Account');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }


  return (
    <section className="signup" id="signup">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <form>
                  <Row>
                    <Col size={12} sm={6} md={6} className="px-1">
                      <label >
                        First Name
                        <br/><br/>
                      <input type="text" className="spil" value={formDetails.firstName}  onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </label>
                    </Col>
                    <br/><br/>
                    <Col size={12} sm={6} md={6} className="px-1">
                    <label className="ln">
                        Last Name
                        <br/><br/>
                      <input type="text" className="spilt" value={formDetails.lastName}  onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </label>
                    </Col>
                    <br/><br/>
                    <Col size={12} sm={12} className="px-1">
                    <label >
                        Email Adress
                        <br/><br/>
                      <input type="email" className="input" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </label>
                    </Col>
                    <br/><br/>
                    <Col size={12} sm={12} className="px-1">
                    <label >
                        Phone Number
                        <br/> <br/>
                      <input type="tel" className="input" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </label>
                    </Col>
                    <br/><br/>
                    <Col size={12} sm={12} className="px-1">
                    <label >
                        Password
                        <br/> <br/>
                      <input type="text" className="input" value={formDetails.password}  onChange={(e) => onFormUpdate('password', e.target.value)}/>
                    </label> 
                    </Col>
                    <br/><br/>
                    <Col size={12} sm={12} className="px-1">
                    <label >
                        Confirm Password
                        <br/><br/>
                      <input type="text" className="input" value={formDetails.confirm} onChange={(e) => onFormUpdate('confirm', e.target.value)}/>
                    </label>
                    </Col>
                    <br/><br/>
                    <Col size={12} className="px-1">
                    <label >
                    Refferal Code(Optional)

                    <br/><br/>
                      <input type="text" className="input" value={formDetails.refferal} onChange={(e) => onFormUpdate('refferal', e.target.value)}/>
                    </label>
                     
                    </Col>
                    
                    <p><FormCheckInput></FormCheckInput>I agree to the Terms and Conditions</p>
                    <button type="submit"><span>{buttonText}</span></button>
                    <h5>Already have an existing account?Login</h5>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
