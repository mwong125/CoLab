
import React from 'react';
import {
    Button,
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import styled from 'styled-components';

import TopPanelItem from './TopPanelItem.jsx';

const StyledSeperatorRight = styled.div`
border-right: 1px solid silver;
border-bottom: 2px solid silver;
`;

const StyledSeperatorLeft = styled.div`
border-left: 1px solid silver;
border-bottom: 2px solid silver;
`;

const StyledSeperator = styled.div`
border-left: 1px solid silver;
border-right: 1px solid silver;
border-bottom: 2px solid silver;
`;


export default class TopPanel extends React.Component {
    constructor(props) {
	super(props);

	this.toggle = this.toggle.bind(this);
	this.state = {
	    isOpen: false
	};
    }
    toggle() {
	this.setState({
	    isOpen: !this.state.isOpen
	});
    }
    render() {
	return(
	    <>
	      <Container style={{background: "#f8f9fa"}}>
		<Row  noGutters>
		  <Col sm={{size: 2, offset: 2}} className="text-center">
	            <StyledSeperatorRight style={{borderLeft: "2px solid silver"}}><Button color="light"><TopPanelItem text="item 1"/></Button></StyledSeperatorRight>
		  </Col>
		  <Col sm="2" className="text-center">
                    <StyledSeperator><Button color="light"><TopPanelItem text="item 2"/></Button></StyledSeperator>         
		  </Col>                                                                                         
                  <Col sm="2" className="text-center">                                                                                <StyledSeperator><Button color="light"><TopPanelItem text="item 3"/></Button></StyledSeperator>                              
                  </Col>
		  <Col sm="2" className="text-center">
            <StyledSeperatorLeft style={{borderRight: "2px solid silver"}}><Button color="light"><TopPanelItem text="item 4"/></Button></StyledSeperatorLeft>
		  </Col>
		</Row>
	      </Container>
            </>
	);
    }
}
