
import React from 'react';
import { Container,
	 Row,
	 Col,   
	 Button,
	 Fade,
	 Form,
	 FormGroup,
	 Input
       } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';

export default class NavSearch extends React.Component {
    constructor(props) {
	super(props);
	this.state = { isActive: false };
	this.toggle = this.toggle.bind(this);
    }
    toggle() {
	this.setState({
	    isActive: !this.state.isActive });
    }
    render() {
	return(
	    <>
	      <Container>
		<Row style={{paddingTop: "1rem"}}>
		  <Col xs="2">
		    <Button onClick={this.toggle}><FaSearch/></Button>
		  </Col>
		  <Col>
		    <Fade in={this.state.isActive}>
		      <Form>
			<FormGroup>
			  <Input type="text" placeholder="search collab"/>
			</FormGroup>
		      </Form>
		    </Fade>
		  </Col>
		</Row>
	      </Container>
	    </>
	);
    }
}
