
import React from 'react';
import {
    Button,
    Container,
    Row,
    Col
} from 'reactstrap';
import styled from 'styled-components';

const StyledActiveItem = styled.div`
background: blue;
`;

export default class TopPanelItem extends React.Component {
    constructor(props) {
	super(props);
	this.text = this.props.text;

	this.toggle = this.toggle.bind(this);
	this.state = {
	    isActive: false
	};
    };
    toggle() {
	this.setState({
	    isActive: !this.state.isActive });
    }
    render() {
	return(
	    <>
	      <Container>
		{ this.text }
	      </Container>
	    </>
	);
    }
}
