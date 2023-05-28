import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} style={{backgroundColor:"lightgray"}} expand={expand} className="mb-3" >
          <Container fluid>
            <Navbar.Brand style={{color:"black", fontSize:"20px", fontStyle:"initial" }}  href="#">KingofIndumentaria.com</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}  >
                  Kingof Indumentaria
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Pagina Principal</Nav.Link>
                  <NavDropdown
                    title="SHOP"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/Buzos">Buzos</NavDropdown.Item>
                    <NavDropdown.Item href="/Camisas">
                      Camisas
                    </NavDropdown.Item>
                   
                    <NavDropdown.Item href="/pantalones">
                      Pantalones
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/remerones">
                      Remerones
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Buscar</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;