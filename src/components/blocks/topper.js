import React from "react";
import { Col } from "react-bootstrap"


export default ({ children }) => (

<Col xl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }}>
    {children}
</Col>

)