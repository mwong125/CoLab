
import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



export default class SidePanleMenu extends React.Component {
    constructor(props) {
	super(props);
	this.toggle = this.toggle.bind(this);
	this.state = { collapse: false };
	this.menuText = this.props.menuText;
	this.menuContent = this.props.menuContent;
    }
    toggle() {
	this.setState({ collapse: !this.state.collapse });
    }
    render() {
	return(
	    <>
	      <Button color="primary" onClick={this.toggle}>{ this.menuText }</Button>
	      <Collapse isOpen={this.state.collapse}>
		<Card>
		  { this.menuContent }
		</Card>
	      </Collapse>
	    </>
	);
    }
}
