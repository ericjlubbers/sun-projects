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
import SenateTVChart from "../components/outsidemoney/senateTVspending"
import CD3Chart from "../components/outsidemoney/cd3TVspending"
import AdsByDayChart from "../components/outsidemoney/adsbyday"
import TvTable from "../components/outsidemoney/tvTable"
import MessageTable from "../components/outsidemoney/messageTable"


class MoneyTracker extends React.Component {
  
  
  
  render() {
    
    return (
      <Layout pageInfo={{ pageName: "outside-money-tracker" }}>

      <Topper>
      <SEO title="Colorado Election 2020 Money Tracker" />

      <HeadlineBox
      headline="[MONEY TRACKER HEADLINE]"
      eyebrow="ELECTION 2020"
      deck="[MONEY TRACKER DECK]"
      timestamp="UPDATED: OCT. 21 2020 05:00 A.M."
      />
      <BylineBox>
      <Byline
      author="Sandra Fish"
      authorMug="http://placehold.it/256x256"
      authorLabel="Reporter"
      authorEmail="[NEED EMAIL]"
      authorTwitter="fishnette"
      authorLink="https://coloradosun.com/author/sandra-fish/"
      />
      <Byline
      author="John Frank"
      authorMug="http://placehold.it/256x256"
      authorLabel="Reporter"
      authorEmail="johnfrank@coloradosun.com"
      authorTwitter="byJohnFrank"
      authorLink="https://coloradosun.com/author/john-frank/"
      />
      <Byline
      author="Eric Lubbers"
      authorMug="http://placehold.it/256x256"
      authorLabel="Designer"
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
      <h3 className="fancy center">TV ad spending database</h3>
      </ArticleBlock>
      
      <Container fluid>
      
      <Row>
      <Col lg={{ span: 10, offset: 1 }}>
      <TvTable />
      <hr />
      </Col>
      </Row>
      </Container>
      <ArticleBlock>
      <h3 className="fancy center">Who’s Behind That Mailer?</h3>
      </ArticleBlock>
      
      <Container fluid>
      <Row>
      <Col lg={{ span: 10, offset: 1 }}>
      <MessageTable />
      <hr />
      </Col>
      </Row>
      </Container>

      <Container fluid>
      <Row>
      <Col>
      <h4 className="fancy">SENATE SPENDING</h4>
      <p>Biggest buyers in the Senate Race.</p>
      <SenateChart />
      <p>More info.</p>
      
      </Col>
      <Col>
      <h4 className="fancy">SENATE TV SPENDING</h4>
      <p>Biggest buyers of airtime in the Senate race.</p>
      <SenateTVChart />
      <p>More info.</p>
      
      </Col>
      <Col>
      <h4 className="fancy">CD 3 TV SPENDING</h4>
      <p>Biggest buyers of airtime for the CD 3 Congressional Race.</p>
      <CD3Chart />
      <p>More info.</p>
      
      </Col>
      </Row>
      </Container>


      <WideBlock>
      <hr />
      <Row>
      <Col>
      <h4 className="fancy">ADS BY DATE</h4>
      <p>The number of new TV ad starts purchased in Colorado. </p>
      <AdsByDayChart />
      <p>More info.</p>
      </Col>
      </Row>
      </WideBlock>
      
      
      
      </Layout>
      )
    }
    
  }
  
  
  export default MoneyTracker