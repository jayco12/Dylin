import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-.png'; // Update the path to your logo

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container fluid>
          <Navbar.Brand href="#">
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => {
                  setActiveLink('/');
                  navigate('/');
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'aboutus' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => {
                  setActiveLink('/about');
                  navigate('/about');
                }}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'hiw' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => {
                  setActiveLink('/hiw');
                  navigate('/hiw');
                }}
              >
                How it Works
              </Nav.Link>
              <Nav.Link
                className={activeLink === 'faqs' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => {
                  setActiveLink('/faq');
                  navigate('/faq');
                }}
              >
                FAQS
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
            <Nav.Link
                className={activeLink === 'login' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => {
                  setActiveLink('/login');
                  navigate('/login');
                }}
              >
                Log In
              </Nav.Link>
            <Button
              variant="outline-light" 
              className={`waitlist-button ${activeLink === 'signup' ? 'active' : ''}`}
              onClick={() => {
                setActiveLink('/signup');
                navigate('/signup');
              }}
            >
              Sign Up for free
            </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
