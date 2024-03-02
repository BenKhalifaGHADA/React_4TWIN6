import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';

function NavigationBar() {
   
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >Events</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/events' 
           
           style={(isActive)=>({textDecoration:isActive && "underline"})}
            
            >Events</Nav.Link>

<Nav.Link as={NavLink} to='/events/add' 
           
           style={(isActive)=>({textDecoration:isActive && "underline"})}
            
            >Add New event</Nav.Link>
          
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;