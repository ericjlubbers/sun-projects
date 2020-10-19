import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

// ARTICLE BUILDING BLOCKS
import HeadlineBox from "../components/blocks/headlinebox"
import Byline from "../components/blocks/byline"
import BylineBox from "../components/blocks/bylinebox"
import Topper from "../components/blocks/topper"
import ArticleBlock from "../components/blocks/articleblock"
import WideBlock from "../components/blocks/wideblock"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Topper>
      <SEO title="Colorado Election 2020 Money Tracker" />

      <HeadlineBox
      headline="Colorado Sun Projects"
      eyebrow="DATA JOURNALISM"
      deck="An index of data and other journalism projects created by The Colorado Sun."
      timestamp="UPDATED: OCT. 13 06:07 A.M."
      />
      <hr />
      </Topper>
      <ArticleBlock type="article">
      </ArticleBlock>
    <Container className="text-center">
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
