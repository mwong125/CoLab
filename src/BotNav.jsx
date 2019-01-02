
import React from 'react';
import { Navbar,
         Nav,
         NavItem
       } from 'reactstrap';
import styled from 'styled-components';

const StyledBotNav = styled.div`

`;

export default class BotNav extends React.Component {
    constructor(props) {
	super(props);
    }
    render() {
	return(
	    <>
	      <StyledBotNav>
		<Navbar color="light" light>
		  <Nav pills>
		    <NavItem>
		      <p>Copyright &#x24B8; 2019 CoLab Inc.</p>
		    </NavItem>
		  </Nav>
		</Navbar>
	      </StyledBotNav>
	    </>
	);
    }
}
