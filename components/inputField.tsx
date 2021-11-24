import type React from "react"
import { useState } from "react"
import { Button, Card, Col, Form, Row } from "react-bootstrap"
import { Controlled as CodeMirror } from "react-codemirror2"
import "codemirror/lib/codemirror.css"
import "codemirror/mode/jinja2/jinja2"
import "codemirror/mode/python/python"
import "codemirror/addon/display/placeholder"

const templateOptions = {
  mode: "jinja2",
  lineNumbers: true,
  lineWrapping: true,
}

const contextOptions = {
  mode: "python",
  lineNumbers: true,
  lineWrapping: true,
}

type Props = {
  onSubmit: (template: string, context: string) => Promise<void>
  errorType?: string
}

const InputField: React.FC<Props> = ({ onSubmit, errorType }) => {
  const [template, setTemplate] = useState("")
  const [context, setContext] = useState("")
  const [inSubmit, setInSubmit] = useState(false)

  const handleTemplateInput = (_: any, __: any, value: string) => {
    setTemplate(value)
  }

  const handleContextInput = (_: any, __: any, value: string) => {
    setContext(value)
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setInSubmit(true)
    await onSubmit(template, context)
    setInSubmit(false)
  }

  const isInvalidTemplateClass = errorType === "template" ? "is-invalid" : ""
  const isInvalidContextClass = errorType === "context" ? "is-invalid" : ""

  return (
    <div className="input-field-container">
      <Form autoComplete="on" onSubmit={submit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <h3>Template Statement</h3>
              <CodeMirror
                className={`statement-editor ${isInvalidTemplateClass}`}
                options={templateOptions}
                value={template}
                onBeforeChange={handleTemplateInput}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <h3 data-tip data-for="context-title">
                Context Settings
              </h3>
              <Card className="card context-container">
                <Card.Body>
                  <h5 data-tip data-for="context-object-description">
                    Context object
                  </h5>
                  <CodeMirror
                    className={`context-editor ${isInvalidContextClass}`}
                    options={contextOptions}
                    value={context}
                    onBeforeChange={handleContextInput}
                  />
                </Card.Body>
              </Card>
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center submit">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={!template || inSubmit}
          >
            Get Result
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default InputField
