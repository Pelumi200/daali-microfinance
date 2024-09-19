import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../image/logo.png'
import './header.css'

function HeaderApp(){
return(

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className='logo'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto main-menu" >
            <Nav.Link href="#link">Home</Nav.Link>
            <Nav.Link href="#about-us">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#choose">Why Choose Us</Nav.Link>
            <Nav.Link href="#global-impact">Global Impact</Nav.Link>
            <Nav.Link href="#testimonial">Testionial</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)


}


export default HeaderApp