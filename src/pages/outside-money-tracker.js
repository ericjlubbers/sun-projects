// BASICS
import React from "react"

// ARTICLE BUILDING BLOCKS
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadlineBox from "../components/blocks/headlinebox"
import Byline from "../components/blocks/byline"
import BylineBox from "../components/blocks/bylinebox"
import Topper from "../components/blocks/topper"
import ArticleBlock from "../components/blocks/articleblock"
import WideBlock from "../components/blocks/wideblock"
import { Container, Row, Col } from "react-bootstrap"

// DATA
import SenateChart from "../components/outsidemoney/senatespending"
import TvTable from "../components/outsidemoney/grouptable"
// import SenateChart from "../components/outsidemoney/senatechart"
// import Table from "../components/outsidemoney/table"

const MoneyTracker = () => (
  <Layout pageInfo={{ pageName: "outside-money-tracker" }}>
    <Topper>
    <SEO title="Colorado Election 2020 Money Tracker" />
    <HeadlineBox
      headline="Hi from the Money Tracker"
      eyebrow="ELECTION 2020"
      deck="This is the deck!"
      timestamp="UPDATED: SEPT. 27 2020 11:52 P.M."
    />
    <BylineBox>
      <Byline
      author="Reporter Name"
      authorMug="http://placehold.it/256x256"
      authorLabel="Reporter"
      authorEmail="eric@coloradosun.com"
      authorTwitter="brofax"
      authorLink="https://coloradosun.com/author/eric-lubbers/"
      />
      <Byline
      author="Reporter Name"
      authorMug="http://placehold.it/256x256"
      authorLabel="Reporter"
      authorEmail="eric@coloradosun.com"
      authorTwitter="brofax"
      authorLink="https://coloradosun.com/author/eric-lubbers/"
      />
      <Byline
      author="Reporter Name"
      authorMug="http://placehold.it/256x256"
      authorLabel="Reporter"
      authorEmail="eric@coloradosun.com"
      authorTwitter="brofax"
      authorLink="https://coloradosun.com/author/eric-lubbers/"
      />
    </BylineBox>
    </Topper>
    <ArticleBlock type="article">
    <p className="has-drop-cap">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

<p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>

<p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>

<p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.</p>


{/* <Alert variant="primary">LOOK AT THIS NOT SO WIDE ALERT.</Alert> */}
<h3 className="fancy">TV ad spending database</h3>
    </ArticleBlock>

    <Container fluid>
      
<Row>
  <Col lg={{ span: 10, offset: 1 }}>
  <TvTable />
  </Col>
</Row>
</Container>
<WideBlock>
      <Row>
        <Col>
        <h4 className="fancy">SENATE</h4>
        <p>Biggest buyers in the Senate Race.</p>
        <SenateChart />
        <p>More info.</p>

      </Col>
      <Col>
      <h4 className="fancy">BALLOT ISSUES</h4>
      <p>Biggest buyers for ballot issues? State races?</p>
      <SenateChart />
      <p>More info.</p>

      </Col>
      </Row>
      <Row>
      <Col>
      <h4 className="fancy">PRESIDENT</h4>
      <p>Biggest buyers for president.</p>
      <SenateChart />
      <p>More info.</p>

      </Col>
      <Col>
      <h4 className="fancy">ADS BY DATE</h4>
      <p>This will be a line chart showing ad buys by date.</p>
      <SenateChart />
      <p>More info.</p>
      </Col>
    </Row>
    </WideBlock>



  </Layout>
)

export default MoneyTracker
