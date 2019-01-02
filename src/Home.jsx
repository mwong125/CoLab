
import React from 'react';
import { Form, FormGroup, Input, Badge, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import LinearFeed from './LinearFeed.jsx';
import TopPanel from './TopPanel.jsx';

export default class Home extends React.Component {

    render() {
	return(
	    <>
	      <Container>
	        <Row>
	          <Col sm={{size: '12'}}><TopPanel/></Col>
                </Row>
                <Row>
                  <Col xs="1"></Col>
		  <Col xs={{ size: '10'}}><LinearFeed/></Col>
                  <Col xs="1"></Col>
                </Row>
	      </Container>
	    </>
	);
    }
}
