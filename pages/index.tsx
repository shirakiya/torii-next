import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import dynamic from "next/dynamic"
import { Card, Container } from "react-bootstrap"
import useSWR from "swr"
import NavBar from "../components/navBar"

const InputField = dynamic(() => import("../components/inputField"), {
  ssr: false,
})

const Home: NextPage = ({}) => {
  const { pythonVersion, jinjaVersion } = useVersion()

  const onSubmit = async (template: string, context: string) => {
    // TODO: submit
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

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

          <InputField onSubmit={onSubmit} />
        </Container>
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
