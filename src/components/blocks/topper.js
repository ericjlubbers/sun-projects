import React from "react";
import { Col } from "react-bootstrap"


export default ({ children }) => (

<Col lg={{ span: 6, offset: 3 }}>
    {children}
</Col>

)