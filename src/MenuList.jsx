
import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class MenuList extends React.Component {
    constructor(props) {
	super(props);
	this.menuItems = this.props.menuItems;
    }
    render() {
	return(
	    <ListGroup>
	      { this.menuItems.map(item => <ListGroupItem>{item}</ListGroupItem>)  }
	    </ListGroup>
	);
    }
}
