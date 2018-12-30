
import React from 'react';
import { Navbar,
         Nav,
         NavItem
       } from 'reactstrap';

export default class BotNav extends React.Component {
    constructor(props) {
	super(props);
    }
    render() {
	return(
	    <>
	      <Navbar color="light" light>
		<Nav pills>
		  <NavItem>
		    <p>Copyright &#x24B8; 2019 CoLab Inc.</p>
		  </NavItem>
		</Nav>
	      </Navbar>
	    </>
	);
    }
}
