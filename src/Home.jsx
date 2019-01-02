
import React from 'react';
import { Form, FormGroup, Input, Badge, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import LinearFeed from './LinearFeed.jsx';
import TopPanel from './TopPanel.jsx';

const StyledSidePanel = styled.div`
margin-top: 1rem;
padding-top: 1rem;
padding-bottom: 1rem;
background-color: light;
border: 2px solid silver;
`;

const StyledLinearFeed = styled.div`
margin-top: 1rem;
margin-bottom: 1rem;
background-color: rgba(99, 70, 216, 0.25);
border: 2px solid silver;
border-radius: 1rem;
`;

export default class Home extends React.Component {

    render() {
	return(
	    <>
	      <Container>
		<Row>
		  <Col sm={{size: '12'}}><TopPanel/></Col>
		  <Col xs={{ size: '10', offset: 1 }}><StyledLinearFeed><LinearFeed/></StyledLinearFeed></Col>
		</Row>
	      </Container>
	    </>
	);
    }
}
