import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import SiteLogo from "../../content/assets/colorado-sun-web-logo-white.png"


const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="https://coloradosun.com/" className="link-no-style">
    <Navbar.Brand as="span">
    <img src={SiteLogo} height="40" class="d-inline-block align-top" alt=""/>
    </Navbar.Brand>
    </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/page-2" className="link-no-style">
              <Nav.Link as="span" eventKey="page-2">
                Page 2
              </Nav.Link>
            </Link>
            <Link to="/outside-money-tracker" className="link-no-style">
              <Nav.Link as="span" eventKey="outside-money-tracker">
                Outside Money
              </Nav.Link>
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Form inline onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Fake Search"
                  className="mr-2"
                />
              </Form.Group>
              <Button>Fake Button</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
