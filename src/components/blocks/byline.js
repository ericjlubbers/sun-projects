import React from "react"
import { Col, Media, Image } from "react-bootstrap"


export default ({ author, authorMug, authorLabel, authorEmail, authorTwitter, authorLink }) => (
    
            <Col className="no-gutters">
                <Media>
                <a href={authorLink} alt={author}><Image src={authorMug} roundedCircle  width={40}
                height={40}
                className="mr-2 authorMug" /></a>
                
                <Media.Body>
                
                <p className="bylineName"><a href={authorLink} className="bylineNameLink">{author}</a></p>
                <p className="bylineInfo"><a href={"mailto:" + authorEmail} className="bylineLink">{authorEmail}</a> / <a href={"http://twitter.com/" + authorTwitter} className="bylineLink">@{authorTwitter}</a></p>
                <p className="bylineLabel">{authorLabel}</p>
                    
                </Media.Body>
                </Media>
            </Col>
    )