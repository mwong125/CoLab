
import React from 'react';
import { Button, ButtonGroup, Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';

import SidePanelMenu from './SidePanelMenu.jsx';
import MenuList from './MenuList.jsx';

export default class SidePanel extends React.Component {
    render() {
        return(
            <>
	      <Container>
		<Row>
		  <Col>
		    <SidePanelMenu menuText="My Collabs"
				   menuContent={<MenuList
						      menuItems={[ <Form id="searchCollabName"><FormGroup><Input placeholder="search collabs"></Input></FormGroup></Form>,
								   <div><p>Sort By</p>
								     <ButtonGroup>
								       <Button>ABC</Button>
								       <Button>Views</Button>
								       <Button>Recent</Button>
								     </ButtonGroup>
								   </div>
								   ]}
								   />} />
		  </Col>
		</Row><hr/>
		<Row>
		  <Col className="mx-auto">
		    <SidePanelMenu menuText="Collages" />
		  </Col>
		</Row><hr/>
		<Row>
		  <Col>
		    <SidePanelMenu menuText="New Collab"
				   menuContent={<Form>
						<MenuList
						      menuItems={[ <FormGroup><Input placeholder="collab name"/></FormGroup>,
								   <FormGroup><Input placeholder="add collaborators"/></FormGroup>
						      ]}/>
				   </Form>} />
		  </Col>
		</Row>
	    </Container></>
        );
    }
}
