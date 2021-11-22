import Link from "next/link"
import type React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Version } from "../lib/version"

type Props = {
  pythonVersion: Version
  jinjaVersion: Version
}

const NavBar: React.FC<Props> = ({ pythonVersion, jinjaVersion }) => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Link href="/">
          <a className="navbar-brand">
            {/* shirakiya: If use the Image component from next/image, Bootstrap CSS is not able to interpret the image brand. */}
            {/* eslint @next/next/no-img-element: 0 */}
            <img src="/torii_512.png" alt="torii-logo" width="30" height="30" />
            Torii(鳥居) β
          </a>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Information" id="collasible-nav-dropdown">
              <Link
                href={`https://docs.python.jp/${pythonVersion.major}.${pythonVersion.minor}/`}
                passHref={true}
              >
                <a
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Python version: {pythonVersion.major}.{pythonVersion.minor}.
                  {pythonVersion.patch}
                </a>
              </Link>
              <Link
                href={`https://jinja.palletsprojects.com/en/${jinjaVersion.major}.${jinjaVersion.minor}.x/`}
                passHref={true}
              >
                <a
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jinja2 version: {jinjaVersion.major}.{jinjaVersion.minor}.
                  {jinjaVersion.patch}
                </a>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
