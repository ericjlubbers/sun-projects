import React from "react";
import { Col, Row } from "react-bootstrap"


export default ({ type, children }) => (
<Row>
<Col lg={{ span: 6, offset: 3 }}>
<div className={type}>
    {children}
</div>
</Col>
</Row>

)