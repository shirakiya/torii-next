import type React from "react"
import { Alert, Card } from "react-bootstrap"

type Props = {
  result?: string
  errorMessage?: string
}

const ResultField: React.FC<Props> = ({ result, errorMessage }) => {
  const nl2br = (text: string): React.ReactElement[] => {
    const regexp = /(\n)/g

    return text.split(regexp).map((line, index) => {
      if (line.match(regexp)) {
        return <br key={index} />
      } else {
        return <span>{line}</span>
      }
    })
  }

  let content = (
    // defualt
    <Alert variant="secondary">Rendering result will be showed here.</Alert>
  )

  if (errorMessage) {
    content = <Alert variant="danger">{nl2br(errorMessage)}</Alert>
  } else if (result) {
    content = (
      <Card>
        <Card.Body>
          <div className="lead">{nl2br(result)}</div>
        </Card.Body>
      </Card>
    )
  }

  return (
    <div className="result-field-container">
      <h3>Rendering Result</h3>
      <div className="result-field-content">{content}</div>
    </div>
  )
}

export default ResultField
