import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import { Card, Container } from "react-bootstrap"
import useSWR from "swr"
import NavBar from "../components/navBar"
import { SemVer } from "../lib/version"

const Home: NextPage = ({}) => {
  const { pythonVersion, jinjaVersion } = useVersion()

  return (
    <div>
      <main id="main">
        <NavBar pythonVersion={pythonVersion} jinjaVersion={jinjaVersion} />
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

const fetcher = (url: string) => fetch(url).then(res => res.json())

const useVersion = () => {
  const { data, error } = useSWR("/api/version", fetcher)

  if (error) {
    console.error(error)
  }

  return {
    pythonVersion: data?.python_version,
    jinjaVersion: data?.jinja_version,
    // isLoading: !error && !data,
    // isError: error,
  }
}

export default Home
