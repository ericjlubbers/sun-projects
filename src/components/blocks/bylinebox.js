import React from "react"
import { Container, Row } from "react-bootstrap"


export default ({ children }) => (
    <div id="bylinebox">
     <hr />

    <Container fluid>
        <Row>
            {children}
        </Row>
    </Container>
    <hr />
    </div>
    )