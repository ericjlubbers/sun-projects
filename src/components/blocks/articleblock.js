import React from "react";
import { Col, Row } from "react-bootstrap"


export default ({ type, children }) => (
<Row>
<Col xl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }}>
<div className={type}>
    {children}
</div>
</Col>
</Row>

)