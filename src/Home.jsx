
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import FeedTile from './FeedTile.jsx';

const StyledSidePanel = styled.div`
margin-top: 1rem;
background: orange;
border: 2px solid silver;
height: 97%;
`;

const StyledLinearFeed = styled.div`
margin-top: 1rem;
background: blue;
border: 2px solid silver;
height: 97%;
`;

const HOME_HEIGHT = 1000;

class SidePanel extends React.Component {
    render() {
	return(
	    <>
	      <StyledSidePanel></StyledSidePanel>
	    </>
	);	
    }
}

class LinearFeed extends React.Component {
    render() {
	return(
	    <>
	      <StyledLinearFeed></StyledLinearFeed>
	    </>
	);
    }
}

export default class Home extends React.Component {

    render() {
	return(
	    <>
	      <Container>
		<Row style={{ height: HOME_HEIGHT + 'px' }} >
		      <Col xs="3"><SidePanel/></Col>
		      <Col xs="9"><LinearFeed/></Col>
		    </Row>
	      </Container>
	    </>
	);
    }
}
