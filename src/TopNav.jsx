import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

export default class TopNav extends React.Component {
    constructor(props) {
	super(props);
	this.toggle = this.toggle.bind(this);
	this.state = {
	    isOpen: false
	};
    }
    toggle() {
	this.setState({
	    isOpen: !this.state.isOpen });
    }
    render() {
	return (
	    <div>
	      <Navbar color="light" light expand="md">
		<NavbarBrand href="/">CoLab</NavbarBrand>
		<NavbarToggler onClick={this.toggle} />
		<Collapse isOpen={this.state.isOpen} navbar>
		  <Nav className="m1-auto" navbar>
		    <NavItem>
		      <NavLink href="/home/">Home</NavLink>
		    </NavItem>
		    <NavItem>
		      <NavLink href="/about/">About</NavLink>
		    </NavItem>
		    <NavItem>
		      <NavLink href="/users/">Users</NavLink>
		    </NavItem>
		  </Nav>
		</Collapse>
	      </Navbar>
	    </div>
	);
    }
}
