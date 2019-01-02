
import React from 'react';
import { Button,
	 Collapse,
	 Form,
	 FormGroup,
	 Label,
	 Input,
	 Navbar,
	 NavbarToggler,
	 NavbarBrand,
	 Nav,
	 NavItem,
	 NavLink,
       } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavSearch from './NavSearch.jsx';

export default class TopNav extends React.Component {
    constructor(props) {
	super(props);
	this.links = this.props.links;

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
	      <Navbar color="light" light expand="md">
		<NavbarBrand href="/">CoLab</NavbarBrand>
		<NavbarToggler onClick={this.toggle} />
		<Collapse isOpen={this.state.isOpen} navbar>
		  <Nav>
		    <NavItem>
		      <NavSearch/>
		    </NavItem>
		  </Nav>
		  <Nav className="ml-auto" navbar>
		    { this.links.map((link,i) => (
			<NavItem key={i}>
			  <NavLink tag={Link} to={link['url']}>{link['name']}</NavLink>
			</NavItem>
		    )) }
	          </Nav>
		</Collapse>
		</Navbar>
		</>
	);
    }
}


