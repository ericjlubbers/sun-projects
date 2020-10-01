import React from "react";
import { Col, Row } from "react-bootstrap"


export default ({ type, children }) => (
<Row noGutters>
<Col lg={{ span: 8, offset: 2 }}>
<div className={type}>
    {children}
</div>
</Col>
</Row>
)