import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Button } from "react-bootstrap"
import SiteLogo from "../../content/assets/colorado-sun-web-logo-white.png"


const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
    <Navbar.Brand as="span">
    <a href="https://coloradosun.com/" aria-label=""><img aria-label="" src={SiteLogo} height="40" class="d-inline-block align-top" alt="Colorado Sun site logo"/></a>
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
            <Link to="/outside-money-tracker" className="link-no-style">
              <Nav.Link as="span" eventKey="outside-money-tracker">
                Tracking Outside Money
              </Nav.Link>
            </Link>
              <Nav.Link href="https://coloradosun.com/2020/10/12/colorado-voter-guide-2020-election/">
                More Election 2020 Resources
              </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
          <Button href="https://trypico.com/thecoloradosun?utm_source=internal&utm_medium=button&utm_campaign=projects" variant="danger" className="PicoPlan">Become a Member!</Button>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
