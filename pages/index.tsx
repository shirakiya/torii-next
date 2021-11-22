import type { NextPage } from "next"
import { Card, Container } from "react-bootstrap"
import NavBar from "../components/navBar"
import { Version } from "../lib/version"

const Home: NextPage = () => {
  // TODO: Get from API.
  const pyVer: Version = {
    major: 3,
    minor: 6,
    patch: 0,
  }
  const jinjaVer: Version = {
    major: 2,
    minor: 11,
    patch: 0,
  }

  return (
    <div>
      <main id="main">
        <NavBar pythonVersion={pyVer} jinjaVersion={jinjaVer} />
        <Container>
          <div id="top-message">
            <Card>
              <Card.Body>
                <Card.Title>What&rsquo;s Torii?</Card.Title>
                Torii(鳥居) is the testing tool for Jinja2. You can test or use
                Jinja2 by trial with Torii.
              </Card.Body>
            </Card>
          </div>
        </Container>

        {/* TODO: Textarea */}
      </main>
    </div>
  )
}

export default Home
